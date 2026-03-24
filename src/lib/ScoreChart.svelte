<script lang="ts">
	let {
		distribution,
		userScore,
		total
	}: {
		distribution: Record<number, number>;
		userScore: number;
		total: number;
	} = $props();

	const MIN = -20;
	const MAX = 20;
	const SLOT = 20; // px per score position
	const BAR_W = 14;
	const CHART_H = 90;
	const PAD_TOP = 20; // room for "you" label
	const PAD_BOT = 26;
	const W = (MAX - MIN + 1) * SLOT; // 820
	const H = PAD_TOP + CHART_H + PAD_BOT; // 136

	const allScores = Array.from({ length: MAX - MIN + 1 }, (_, i) => MIN + i);

	const maxCount = $derived(Math.max(1, ...allScores.map((s) => distribution[s] ?? 0)));

	const mean = $derived.by(() => {
		if (total === 0) return 0;
		return allScores.reduce((sum, s) => sum + s * (distribution[s] ?? 0), 0) / total;
	});

	const stddev = $derived.by(() => {
		if (total < 2) return 5;
		const variance =
			allScores.reduce((sum, s) => sum + (distribution[s] ?? 0) * (s - mean) ** 2, 0) / total;
		return Math.sqrt(variance) || 5;
	});

	// Smooth bell curve using actual mean/stddev, scaled so peak = CHART_H
	const bellPath = $derived.by(() => {
		if (total < 5) return '';
		const norm = (x: number) => Math.exp(-0.5 * ((x - mean) / stddev) ** 2);
		const pts: string[] = [];
		for (let s = MIN; s <= MAX; s += 0.25) {
			const x = (s - MIN) * SLOT + BAR_W / 2;
			const y = PAD_TOP + CHART_H - norm(s) * CHART_H;
			pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
		}
		return 'M ' + pts.join(' L ');
	});

	function bx(score: number) {
		return (score - MIN) * SLOT;
	}

	function bh(score: number) {
		return ((distribution[score] ?? 0) / maxCount) * CHART_H;
	}

	function barFill(score: number) {
		if (score === userScore) return '#facc15';
		if (score > 0) return '#7c3aed';
		if (score < 0) return '#ef4444';
		return '#6b7280';
	}
</script>

<svg viewBox="0 0 {W} {H}" class="chart" role="img" aria-labelledby="chart-title chart-desc">
	<title id="chart-title">Score distribution</title>
	<desc id="chart-desc">Bar chart showing quiz scores from −20 (most fool-like) to +20 (most brilliant-like). Your score of {userScore > 0 ? '+' : ''}{userScore} is highlighted in yellow. {total.toLocaleString()} total results recorded.</desc>
	<!-- bars -->
	{#each allScores as score}
		{@const h = bh(score)}
		{#if h > 0}
			<rect
				x={bx(score)}
				y={PAD_TOP + CHART_H - h}
				width={BAR_W}
				height={h}
				rx="2"
				fill={barFill(score)}
				opacity={score === userScore ? 1 : 0.45}
			/>
		{/if}
	{/each}

	<!-- bell curve overlay -->
	{#if bellPath}
		<path
			d={bellPath}
			fill="none"
			stroke="rgba(255,255,255,0.18)"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
	{/if}

	<!-- x-axis baseline -->
	<line x1="0" y1={PAD_TOP + CHART_H} x2={W} y2={PAD_TOP + CHART_H} style="stroke: var(--chart-axis)" stroke-width="1" />

	<!-- zero divider -->
	<line
		x1={bx(0)}
		y1={PAD_TOP}
		x2={bx(0)}
		y2={PAD_TOP + CHART_H}
		style="stroke: var(--chart-grid)"
		stroke-width="1"
		stroke-dasharray="3,3"
	/>

	<!-- x-axis labels -->
	{#each [-20, -10, 0, 10, 20] as l}
		<text
			x={bx(l) + BAR_W / 2}
			y={H - 8}
			text-anchor="middle"
			style="fill: var(--chart-label)"
			font-size="10"
			font-family="system-ui, sans-serif"
		>{l > 0 ? '+' : ''}{l}</text>
	{/each}

	<!-- "you" label above user's bar -->
	<text
		x={bx(userScore) + BAR_W / 2}
		y={Math.max(PAD_TOP + CHART_H - bh(userScore) - 5, 12)}
		text-anchor="middle"
		fill="#facc15"
		font-size="9"
		font-weight="bold"
		font-family="system-ui, sans-serif"
	>you</text>
</svg>

<style>
	.chart {
		width: 100%;
		height: auto;
		display: block;
		margin-top: 0.5rem;
	}
</style>
