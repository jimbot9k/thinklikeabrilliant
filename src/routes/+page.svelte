<script lang="ts">
	const questions = [
		{
			text: "You wake up and a pelican is sitting on your chest. It is holding your phone. It does not look friendly. You:",
			answers: [
				{ text: "Immediately try to rizz it up. You speak bird.", score: -2 },
				{ text: "Scream 'no cap bro what is this' until the situation resolves itself.", score: -1 },
				{ text: "Stay calm, assess the vibe, and carefully negotiate your phone back.", score: 1 },
				{ text: "Observe its body language, identify what it wants, and execute a strategic retrieval plan.", score: 2 }
			]
		},
		{
			text: "A wizard slides into your DMs and offers you infinite knowledge about ONE topic. You have four seconds. You:",
			answers: [
				{ text: "Reply 'W' and type the first word in your head. It is 'cereal'.", score: -2 },
				{ text: "Say 'vibes' and spend the rest of your life knowing everything about vibes.", score: -1 },
				{ text: "Ask if 'everything' counts. Stall. Negotiate. Use the four seconds wisely.", score: 1 },
				{ text: "Instantly identify the highest-leverage domain of knowledge and lock it in. No hesitation.", score: 2 }
			]
		},
		{
			text: "You open TikTok and every single video is just someone confidently explaining something completely wrong. You:",
			answers: [
				{ text: "Agree with all of them. The confidence is contagious and honestly kind of inspiring.", score: -2 },
				{ text: "Feel weird about it but keep scrolling. Maybe they know something you don't.", score: -1 },
				{ text: "Fact-check the ones that seem most sus before resharing anything.", score: 1 },
				{ text: "Track down primary sources, check credentials, and leave politely cited corrections.", score: 2 }
			]
		},
		{
			text: "Your shadow has been making different life choices than you for three years. Its credit score is higher and it has a gym membership. You:",
			answers: [
				{ text: "Call it out publicly. This shadow is NOT that girl.", score: -2 },
				{ text: "Feel personally attacked, post a vague tweet about betrayal, move on.", score: -1 },
				{ text: "Respectfully ask what it's been doing differently and take notes.", score: 1 },
				{ text: "Request a full breakdown of its decisions, identify divergence points, and adapt immediately.", score: 2 }
			]
		},
		{
			text: "A horse sends you a formal email with read-receipts on. Subject line: 'Regarding Your Recent Choices'. You:",
			answers: [
				{ text: "Leave it on read. You are NOT doing this today.", score: -2 },
				{ text: "Open it, get to paragraph two, close it, tell yourself you'll deal with it later.", score: -1 },
				{ text: "Read the whole thing even though it's uncomfortable. Accountability era.", score: 1 },
				{ text: "Read it thoroughly, draft a structured response, and schedule a follow-up meeting.", score: 2 }
			]
		},
		{
			text: "Your friend group chat is going absolutely feral over a statistic someone screenshot from a random account with 47 followers. You:",
			answers: [
				{ text: "Add three fire emojis and help it spread. You are a culture-shaper.", score: -2 },
				{ text: "Laugh-react and move on. Probably true enough.", score: -1 },
				{ text: "Google it before adding to the chaos.", score: 1 },
				{ text: "Find the original study, check the sample size and methodology, and post the actual context.", score: 2 }
			]
		},
		{
			text: "You're in a debate and thirty seconds in you realise the other person is completely right and you are very wrong. You:",
			answers: [
				{ text: "Double down harder. Backing out now would be major L behaviour.", score: -2 },
				{ text: "Go quiet, change the subject, and hope nobody clocked what happened.", score: -1 },
				{ text: "Concede the point with your dignity mostly intact.", score: 1 },
				{ text: "Concede immediately, compliment their argument, and ask them to explain more. Secure in yourself.", score: 2 }
			]
		},
		{
			text: "Scientists announce that every decision you made on a Tuesday was wrong. All of them. Every single one. You:",
			answers: [
				{ text: "Immediately cancel Tuesdays within your household. It's giving restructure.", score: -2 },
				{ text: "Gaslight yourself into thinking most Tuesdays were actually fine. Move on.", score: -1 },
				{ text: "Sit down and genuinely review your Tuesday decisions to find the pattern.", score: 1 },
				{ text: "Systemically analyse the Tuesday error pattern, build a decision checklist, and deploy it.", score: 2 }
			]
		},
		{
			text: "You're 40 minutes into a very confident presentation about cheese when you realize literally nothing you've said is accurate. You:",
			answers: [
				{ text: "Increase the confidence. You cannot let them see weakness. Gaslight the room.", score: -2 },
				{ text: "Say 'anyway' and pivot to Q&A. Let the audience figure it out.", score: -1 },
				{ text: "Stop, acknowledge the L, and give a quick corrected summary.", score: 1 },
				{ text: "Stop mid-sentence, explain exactly what went wrong, provide the correct information, and apologise to the cheese.", score: 2 }
			]
		},
		{
			text: "You show up to what you thought was a dinner party and it's actually a job interview for a job you don't want, run by a panel of owls. You:",
			answers: [
				{ text: "Go absolutely unhinged in the interview. You are built different.", score: -2 },
				{ text: "Half-try in a way that communicates 'I'm here but I'm not here here'.", score: -1 },
				{ text: "Politely clarify the situation and ask whether attendance is actually mandatory.", score: 1 },
				{ text: "Assess what the owls need, evaluate whether your skills transfer, and make a conscious decision about engaging.", score: 2 }
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
				<img class="result-img" src="/brilliant.png" alt="Think Like a Brilliant" />
					<h2>You Think Like a Brilliant.</h2>
					<p>
						You approach problems with curiosity, rigor, and patience. You update your beliefs when
						the evidence demands it, and you'd rather be right than feel right. The hard questions
						don't scare you — they fascinate you.
					</p>
					<p class="score-tag">Score: +{totalScore}</p>
				{:else}
				<img class="result-img" src="/fool.png" alt="Act Like a Fool" />
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
		padding: 5rem 1rem 2rem;
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


