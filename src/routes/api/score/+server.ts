import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { json } from '@sveltejs/kit';
import { KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';
import type { RequestHandler } from './$types';

const redis = new Redis({ url: KV_REST_API_URL, token: KV_REST_API_TOKEN });

// 5 submissions per IP per hour
const ratelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(5, '1 h'),
	prefix: 'rl:score'
});

const SUBMISSIONS = 'score_submissions';
const DISTRIBUTION = 'score_distribution';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json().catch(() => null);

	if (!body || typeof body.score !== 'number' || !Number.isInteger(body.score) || body.score < -20 || body.score > 20) {
		return json({ error: 'Invalid score' }, { status: 400 });
	}

	const { score } = body;

	const ip =
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
		request.headers.get('x-real-ip') ??
		'unknown';

	const { success, reset } = await ratelimit.limit(ip);
	if (!success) {
		const retryAfter = Math.ceil((reset - Date.now()) / 1000);
		return json({ error: 'Too many submissions. Come back later.' }, {
			status: 429,
			headers: { 'Retry-After': String(retryAfter) }
		});
	}
	const ua = (request.headers.get('user-agent') ?? 'unknown').slice(0, 200);
	const raw = `${ip}:${ua}:${Date.now()}`;
	const hashBuf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
	const member = Array.from(new Uint8Array(hashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');

	await Promise.all([
		redis.zadd(SUBMISSIONS, { score, member }),
		redis.hincrby(DISTRIBUTION, String(score), 1)
	]);

	const [belowOrEqual, total, rawDist] = await Promise.all([
		redis.zcount(SUBMISSIONS, '-inf', score),
		redis.zcard(SUBMISSIONS),
		redis.hgetall<Record<string, number>>(DISTRIBUTION)
	]);

	const percentile = total > 0 ? Math.round((belowOrEqual / total) * 100) : 100;

	const distribution: Record<number, number> = {};
	if (rawDist) {
		for (const [key, val] of Object.entries(rawDist)) {
			distribution[Number(key)] = Number(val);
		}
	}

	return json({ percentile, total, distribution });
};
