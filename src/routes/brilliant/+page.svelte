<script lang="ts">
	import { locale } from '$lib/locale.svelte';
	import { translations } from '$lib/translations';

	const t = $derived(translations[locale.current].brilliant);
	const schemaLD = $derived(JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Article',
		'headline': t.meta.title,
		'description': t.meta.description,
		'url': 'https://thinklikeabrilliant.pro/brilliant',
		'author': { '@type': 'Person', 'name': 'jimbot9k' }
	}));
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta name="keywords" content="think like a brilliant, brilliant personality type, intellectual traits, critical thinking quiz result, how smart am I, brilliant thinker guide, cognitive quiz" />
	<link rel="canonical" href="https://thinklikeabrilliant.pro/brilliant" />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:url" content="https://thinklikeabrilliant.pro/brilliant" />
	<meta property="og:image" content="https://thinklikeabrilliant.pro/brilliant.png" />
	<meta name="twitter:title" content={t.meta.title} />
	<meta name="twitter:description" content={t.meta.description} />
	<meta name="twitter:image" content="https://thinklikeabrilliant.pro/brilliant.png" />
	{@html `<script type="application/ld+json">${schemaLD}<\/script>`}
</svelte:head>

<main id="main-content" tabindex="-1">
	<a href="/" class="back" aria-label={t.backAriaLabel}><span aria-hidden="true">← </span>{t.back}</a>

	<img src="/brilliant.png" alt={t.heroAlt} class="hero-img" />

	<article>
		<h1>{t.h1}</h1>
		<p class="subtitle">{t.subtitle}</p>

		{#each t.parts as part}
			<h2>{part.h2}</h2>
			{#each part.paragraphs as para}
				{#if typeof para === 'string'}
					<p>{para}</p>
				{:else}
					<p><strong>{para.trait}</strong>{para.text}</p>
				{/if}
			{/each}
		{/each}

		<a href="/" class="take-again" aria-label={t.takeAgainAriaLabel}>{t.takeAgain}</a>
	</article>
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
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem 5rem;
	}

	.back {
		display: inline-block;
		color: var(--accent-brilliant);
		text-decoration: none;
		font-size: 0.9rem;
		margin-bottom: 2rem;
		opacity: 0.8;
		transition: opacity 0.15s;
	}

	.back:hover {
		opacity: 1;
	}

	.hero-img {
		width: 100%;
		border-radius: 12px;
		margin-bottom: 2.5rem;
		object-fit: cover;
	}

	h1 {
		font-size: 2.2rem;
		font-weight: 700;
		color: var(--accent-brilliant);
		margin: 0 0 0.5rem;
		line-height: 1.2;
	}

	.subtitle {
		color: var(--text-muted);
		font-size: 0.95rem;
		margin: 0 0 3rem;
		font-style: italic;
		line-height: 1.6;
	}

	h2 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--brilliant-blockquote);
		margin: 2.5rem 0 0.75rem;
		border-left: 3px solid var(--accent-brilliant);
		padding-left: 0.75rem;
	}

	p {
		color: var(--text-secondary);
		line-height: 1.8;
		font-size: 1rem;
		margin: 0 0 1.25rem;
	}

	strong {
		color: var(--text);
	}

	.take-again {
		display: inline-block;
		margin-top: 2rem;
		background: var(--accent);
		color: #fff;
		text-decoration: none;
		border-radius: 10px;
		padding: 0.8rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		transition: background 0.15s, transform 0.1s;
	}

	.take-again:hover {
		background: var(--accent-hover);
		transform: translateY(-1px);
	}

	@media (prefers-reduced-motion: reduce) {
		.back,
		.take-again {
			transition: none;
		}

		.take-again:hover {
			transform: none;
		}
	}
</style>
