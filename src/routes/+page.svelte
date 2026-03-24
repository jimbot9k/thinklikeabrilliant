<script lang="ts">
	import { tick } from 'svelte';
	import ScoreChart from '$lib/ScoreChart.svelte';
	import { locale } from '$lib/locale.svelte';
	import { translations } from '$lib/translations';

	const t = $derived(translations[locale.current].quiz);

	let currentQuestion = $state(0);
	let totalScore = $state(0);
	let showResult = $state(false);
	let selectedIndex = $state<number | null>(null);
	let animating = $state(false);

	let percentile = $state<number | null>(null);
	let distribution = $state<Record<number, number>>({});
	let statTotal = $state(0);
	let statsLoading = $state(false);
	let statsError = $state(false);

	async function submitScore(score: number) {
		statsLoading = true;
		statsError = false;
		try {
			const res = await fetch('/api/score', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ score })
			});
			if (!res.ok) throw new Error();
			const data = await res.json();
			percentile = data.percentile;
			distribution = data.distribution;
			statTotal = data.total;
		} catch {
			statsError = true;
		} finally {
			statsLoading = false;
		}
	}

	const progress = $derived((currentQuestion / t.questions.length) * 100);
	const result = $derived(totalScore > 0 ? 'brilliant' : 'fool');

	const percentileMessage = $derived.by(() => {
		if (percentile === null) return '';
		return t.percentileMessage(percentile, result);
	});

	function selectAnswer(score: number, index: number) {
		if (animating) return;
		selectedIndex = index;
		animating = true;

		setTimeout(() => {
			totalScore += score;
			if (currentQuestion < t.questions.length - 1) {
				currentQuestion++;
				selectedIndex = null;
				animating = false;
				tick().then(() => {
					document.querySelector<HTMLButtonElement>('.answer-btn')?.focus();
				});
			} else {
				showResult = true;
				animating = false;
				submitScore(totalScore);
				tick().then(() => {
					document.querySelector<HTMLElement>('.result h2')?.focus();
				});
			}
		}, 400);
	}

	function restart() {
		currentQuestion = 0;
		totalScore = 0;
		showResult = false;
		selectedIndex = null;
		animating = false;
		percentile = null;
		distribution = {};
		statTotal = 0;
		statsLoading = false;
		statsError = false;
	}
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:url" content="https://thinklikeabrilliant.com/" />
	<meta name="twitter:title" content={t.meta.title} />
	<meta name="twitter:description" content={t.meta.description} />
</svelte:head>

<main id="main-content" tabindex="-1">
	<div class="card">
		{#if !showResult}
			<div class="quiz-progress">
				<p class="label" aria-hidden="true">{t.questionLabel(currentQuestion + 1, t.questions.length)}</p>
				<div
					class="progress-bar"
					role="progressbar"
					aria-valuenow={Math.round(progress)}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-label={t.progressAriaLabel(currentQuestion + 1, t.questions.length)}
				>
					<div class="progress-fill" style="width: {progress}%"></div>
				</div>
			</div>

			<div class="question-block" aria-live="polite" aria-atomic="true">
				<h2 id="current-question">{t.questions[currentQuestion].text}</h2>
			</div>

			<div class="answers" role="group" aria-labelledby="current-question">
				{#each t.questions[currentQuestion].answers as answer, i}
					<button
						class="answer-btn"
						class:selected={selectedIndex === i}
						onclick={() => selectAnswer(answer.score, i)}
						disabled={animating}
						aria-pressed={selectedIndex === i}
					>
						<span class="answer-letter" aria-hidden="true">{String.fromCharCode(65 + i)}</span>
						<span class="answer-text">{answer.text}</span>
					</button>
				{/each}
			</div>
		{:else}
			<div class="result" class:brilliant={result === 'brilliant'} class:fool={result === 'fool'} role="region" aria-label={t.resultAriaLabel}>
				{#if result === 'brilliant'}
				<img class="result-img" src="/brilliant.png" alt={t.brilliant.imgAlt} />
					<h2 tabindex="-1">{t.brilliant.h2}</h2>
					<p>{t.brilliant.p}</p>
					<p class="score-tag">{t.brilliant.scoreLabel(totalScore)}</p>
				<a href="/brilliant" class={t.brilliant.exploreLinkClass}>{t.brilliant.exploreLink}</a>
				{:else}
				<img class="result-img" src="/fool.png" alt={t.fool.imgAlt} />
					<h2 tabindex="-1">{t.fool.h2}</h2>
					<p>{t.fool.p}</p>
					<p class="score-tag">{t.fool.scoreLabel(totalScore)}</p>
				<a href="/fool" class={t.fool.exploreLinkClass}>{t.fool.exploreLink}</a>
				{/if}
			{#if statsLoading}
				<p class="stats-status" role="status" aria-live="polite">{t.tallying}</p>
			{:else if percentile !== null}
				<div class="stats" role="region" aria-label={t.statsAriaLabel}>
					<p class="percentile-text">{percentileMessage}</p>
					<ScoreChart {distribution} userScore={totalScore} total={statTotal} />
					<p class="stat-count">{t.pelicansCount(statTotal)}</p>
				</div>
			{/if}
				<button class="restart-btn" onclick={restart}>{t.restart}</button>
			</div>
		{/if}
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Segoe UI', system-ui, sans-serif;
		background: var(--bg);
		color: var(--text);
		min-height: 100vh;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 5rem 1rem 2rem;
		box-sizing: border-box;
	}

	.card {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 2.5rem;
		max-width: 640px;
		width: 100%;
		box-shadow: 0 8px 40px var(--shadow);
	}

	.quiz-progress {
		margin-bottom: 2rem;
	}

	.label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-muted);
		margin: 0 0 0.75rem;
	}

	.progress-bar {
		height: 4px;
		background: var(--border);
		border-radius: 999px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #6c63ff, #a78bfa);
		border-radius: 999px;
		transition: width 0.4s ease;
	}

	.question-block {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.35rem;
		font-weight: 600;
		line-height: 1.5;
		margin: 0;
		color: var(--text);
	}

	.answers {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.answer-btn {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		background: var(--surface-2);
		border: 1px solid var(--border-2);
		border-radius: 10px;
		padding: 0.9rem 1.1rem;
		cursor: pointer;
		text-align: left;
		color: var(--text-2);
		font-size: 0.95rem;
		line-height: 1.5;
		transition:
			background 0.15s,
			border-color 0.15s,
			transform 0.1s;
	}

	.answer-btn:hover:not(:disabled) {
		background: var(--surface-hover);
		border-color: var(--accent);
		transform: translateY(-1px);
	}

	.answer-btn:disabled {
		cursor: default;
	}

	.answer-btn.selected {
		background: var(--selected-bg);
		border-color: var(--accent);
	}

	.answer-letter {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.7rem;
		height: 1.7rem;
		background: var(--answer-letter-bg);
		border-radius: 6px;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--answer-letter-color);
		flex-shrink: 0;
		margin-top: 0.05rem;
	}

	.answer-btn.selected .answer-letter {
		background: var(--accent);
		color: #fff;
	}

	/* Result */
	.result {
		text-align: center;
		padding: 1rem 0;
	}

	.result-img {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 1.5rem;
		object-fit: cover;
	}

	.result h2 {
		font-size: 1.8rem;
		margin: 0 0 1.25rem;
		text-align: center;
	}

	.result p {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-secondary);
		margin: 0 0 1rem;
	}

	.result.brilliant h2 {
		color: var(--accent-brilliant);
	}

	.result.fool h2 {
		color: var(--accent-fool);
	}

	.score-tag {
		display: block;
		font-size: 0.8rem !important;
		color: var(--text-ghost) !important;
		font-variant-numeric: tabular-nums;
		margin-bottom: 1.25rem !important;
	}

	.restart-btn {
		background: var(--accent);
		color: #fff;
		border: none;
		border-radius: 10px;
		padding: 0.8rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.15s, transform 0.1s;
	}

	.restart-btn:hover {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}

	.explore-link {
		display: block;
		margin-bottom: 1.5rem;
		font-size: 0.9rem;
		text-decoration: none;
		opacity: 0.8;
		transition: opacity 0.15s;
	}

	.explore-link:hover {
		opacity: 1;
	}

	.brilliant-link {
		color: var(--accent-brilliant);
	}

	.fool-link {
		color: var(--accent-fool);
	}

	.stats-status {
		color: var(--text-faint);
		font-size: 0.85rem;
		margin: 1.25rem 0;
	}

	.stats {
		margin: 1.25rem 0;
		padding: 1rem 1.25rem;
		background: var(--surface-3);
		border: 1px solid var(--border-3);
		border-radius: 10px;
	}

	.percentile-text {
		margin: 0 0 0.5rem !important;
		font-size: 0.95rem !important;
		color: var(--text-muted) !important;
	}

	.stat-count {
		margin: 0.5rem 0 0 !important;
		font-size: 0.75rem !important;
		color: var(--text-dim) !important;
	}

	@media (prefers-reduced-motion: reduce) {
		.progress-fill {
			transition: none;
		}

		.answer-btn {
			transition: none;
		}

		.answer-btn:hover:not(:disabled) {
			transform: none;
		}

		.restart-btn {
			transition: none;
		}

		.restart-btn:hover {
			transform: none;
		}
	}
</style>


