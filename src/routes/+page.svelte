<script lang="ts">
	const questions = [
		{
			text: "You're handed a tough problem you've never seen before. What's your first move?",
			answers: [
				{ text: "Dive in headfirst — instructions are for cowards.", score: -2 },
				{ text: "Skim the brief and wing the rest.", score: -1 },
				{ text: "Read it carefully, sketch a rough plan, then start.", score: 1 },
				{ text: "Research similar problems, map the unknowns, then act deliberately.", score: 2 }
			]
		},
		{
			text: "Someone disagrees with your opinion in a meeting. You...",
			answers: [
				{ text: "Loudly insist you're right until they give up.", score: -2 },
				{ text: "Get a bit defensive, but eventually let it slide.", score: -1 },
				{ text: "Ask them to explain their reasoning.", score: 1 },
				{ text: "Update your view on the spot if their argument is stronger.", score: 2 }
			]
		},
		{
			text: "You just got a new gadget. What do you do?",
			answers: [
				{ text: "Turn it on and mash every button until something happens.", score: -2 },
				{ text: "Scan the quick-start guide only.", score: -1 },
				{ text: "Read the manual before using it.", score: 1 },
				{ text: "Look up reviews, best practices, and edge cases before even unboxing.", score: 2 }
			]
		},
		{
			text: "How do you make a big life decision?",
			answers: [
				{ text: "Pure gut feeling — overthinking kills the vibe.", score: -2 },
				{ text: "Ask one friend and go with whatever they say.", score: -1 },
				{ text: "List the pros and cons, then decide.", score: 1 },
				{ text: "Build a decision framework comparing multiple factors and second-order effects.", score: 2 }
			]
		},
		{
			text: "You need to learn something completely new. Your approach?",
			answers: [
				{ text: "You'll figure it out as problems come — no prep needed.", score: -2 },
				{ text: "Watch a few random videos and hope it clicks.", score: -1 },
				{ text: "Find a structured course and work through it properly.", score: 1 },
				{ text: "Study the foundational principles first, then layer in techniques.", score: 2 }
			]
		},
		{
			text: "You lose badly at something. Your reaction?",
			answers: [
				{ text: "Blame the rules, the other players, or cosmic misfortune.", score: -2 },
				{ text: "Feel bad for a bit, then move on without much reflection.", score: -1 },
				{ text: "Think through what you could have done differently.", score: 1 },
				{ text: "Systematically analyze your mistakes and deliberately practice weak spots.", score: 2 }
			]
		},
		{
			text: "A confident friend gives you advice that sounds a bit off. You...",
			answers: [
				{ text: "Follow it anyway — their confidence is convincing.", score: -2 },
				{ text: "Follow it, but mentally bookmark who to blame if it goes wrong.", score: -1 },
				{ text: "Politely push back and check a couple of other sources.", score: 1 },
				{ text: "Independently verify the claim before making any decision.", score: 2 }
			]
		},
		{
			text: "How do you handle a project with a hard deadline?",
			answers: [
				{ text: "Start the night before — deadline pressure is your superpower.", score: -2 },
				{ text: "Start a few days early and rush through the hard parts.", score: -1 },
				{ text: "Break it into milestones and work through it steadily.", score: 1 },
				{ text: "Build in buffer time, review early drafts, and iterate before submitting.", score: 2 }
			]
		},
		{
			text: "You see a wild statistic shared online. What do you do?",
			answers: [
				{ text: "Repost it immediately — it's too good not to share.", score: -2 },
				{ text: "Mention it in conversation; it's probably true.", score: -1 },
				{ text: "Google it before repeating it to anyone.", score: 1 },
				{ text: "Track down the primary source, check the sample size and methodology.", score: 2 }
			]
		},
		{
			text: "What's your honest relationship with being wrong?",
			answers: [
				{ text: "You're rarely wrong — and when you are, nobody noticed.", score: -2 },
				{ text: "It's embarrassing. You'd rather quietly avoid the topic.", score: -1 },
				{ text: "It happens. You correct yourself and move on.", score: 1 },
				{ text: "Being wrong is a gift — it's how you update your model of reality.", score: 2 }
			]
		}
	];

	let currentQuestion = $state(0);
	let totalScore = $state(0);
	let showResult = $state(false);
	let selectedIndex = $state<number | null>(null);
	let animating = $state(false);

	const progress = $derived((currentQuestion / questions.length) * 100);
	const result = $derived(totalScore > 0 ? 'brilliant' : 'fool');

	function selectAnswer(score: number, index: number) {
		if (animating) return;
		selectedIndex = index;
		animating = true;

		setTimeout(() => {
			totalScore += score;
			if (currentQuestion < questions.length - 1) {
				currentQuestion++;
				selectedIndex = null;
				animating = false;
			} else {
				showResult = true;
				animating = false;
			}
		}, 400);
	}

	function restart() {
		currentQuestion = 0;
		totalScore = 0;
		showResult = false;
		selectedIndex = null;
		animating = false;
	}
</script>

<svelte:head>
	<title>Think Like a Brilliant</title>
</svelte:head>

<main>
	<div class="card">
		{#if !showResult}
			<header>
				<p class="label">Question {currentQuestion + 1} of {questions.length}</p>
				<div class="progress-bar">
					<div class="progress-fill" style="width: {progress}%"></div>
				</div>
			</header>

			<div class="question-block">
				<h2>{questions[currentQuestion].text}</h2>
			</div>

			<div class="answers">
				{#each questions[currentQuestion].answers as answer, i}
					<button
						class="answer-btn"
						class:selected={selectedIndex === i}
						onclick={() => selectAnswer(answer.score, i)}
						disabled={animating}
					>
						<span class="answer-letter">{String.fromCharCode(65 + i)}</span>
						<span class="answer-text">{answer.text}</span>
					</button>
				{/each}
			</div>
		{:else}
			<div class="result" class:brilliant={result === 'brilliant'} class:fool={result === 'fool'}>
				{#if result === 'brilliant'}
					<div class="result-icon">🧠</div>
					<h2>You Think Like a Brilliant.</h2>
					<p>
						You approach problems with curiosity, rigor, and patience. You update your beliefs when
						the evidence demands it, and you'd rather be right than feel right. The hard questions
						don't scare you — they fascinate you.
					</p>
					<p class="score-tag">Score: +{totalScore}</p>
				{:else}
					<div class="result-icon">🃏</div>
					<h2>You Act Like a Fool.</h2>
					<p>
						You lead with instinct, confidence, and beautiful recklessness. You don't sweat the
						details — you make the details sweat. The world calls it chaos. You call it Tuesday.
					</p>
					<p class="score-tag">Score: {totalScore}</p>
				{/if}

				<button class="restart-btn" onclick={restart}>Take it again</button>
			</div>
		{/if}
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Segoe UI', system-ui, sans-serif;
		background: #0d0d0d;
		color: #f0f0f0;
		min-height: 100vh;
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 2rem 1rem;
		box-sizing: border-box;
	}

	.card {
		background: #1a1a1a;
		border: 1px solid #2e2e2e;
		border-radius: 16px;
		padding: 2.5rem;
		max-width: 640px;
		width: 100%;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
	}

	header {
		margin-bottom: 2rem;
	}

	.label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #888;
		margin: 0 0 0.75rem;
	}

	.progress-bar {
		height: 4px;
		background: #2e2e2e;
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
		color: #f5f5f5;
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
		background: #242424;
		border: 1px solid #333;
		border-radius: 10px;
		padding: 0.9rem 1.1rem;
		cursor: pointer;
		text-align: left;
		color: #e0e0e0;
		font-size: 0.95rem;
		line-height: 1.5;
		transition:
			background 0.15s,
			border-color 0.15s,
			transform 0.1s;
	}

	.answer-btn:hover:not(:disabled) {
		background: #2d2d2d;
		border-color: #6c63ff;
		transform: translateY(-1px);
	}

	.answer-btn:disabled {
		cursor: default;
	}

	.answer-btn.selected {
		background: #2a2050;
		border-color: #6c63ff;
	}

	.answer-letter {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 1.7rem;
		height: 1.7rem;
		background: #333;
		border-radius: 6px;
		font-size: 0.75rem;
		font-weight: 700;
		color: #aaa;
		flex-shrink: 0;
		margin-top: 0.05rem;
	}

	.answer-btn.selected .answer-letter {
		background: #6c63ff;
		color: #fff;
	}

	/* Result */
	.result {
		text-align: center;
		padding: 1rem 0;
	}

	.result-icon {
		font-size: 4rem;
		margin-bottom: 1rem;
	}

	.result h2 {
		font-size: 1.8rem;
		margin: 0 0 1.25rem;
		text-align: center;
	}

	.result p {
		font-size: 1rem;
		line-height: 1.7;
		color: #bbb;
		margin: 0 0 1rem;
	}

	.result.brilliant h2 {
		color: #a78bfa;
	}

	.result.fool h2 {
		color: #f97316;
	}

	.score-tag {
		display: inline-block;
		font-size: 0.8rem !important;
		color: #666 !important;
		font-variant-numeric: tabular-nums;
		margin-bottom: 2rem !important;
	}

	.restart-btn {
		background: #6c63ff;
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
		background: #5a52e0;
		transform: translateY(-1px);
	}
</style>

