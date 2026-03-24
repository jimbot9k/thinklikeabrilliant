<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Robots -->
	<meta name="robots" content="index, follow" />

	<!-- Default social metadata (overridden per page) -->
	<meta property="og:site_name" content="brilliant" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/brilliant.png" />
	<meta property="og:image:width" content="760" />
	<meta property="og:image:height" content="428" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="/brilliant.png" />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header aria-label="Site header">
	<a href="/" class="logo" aria-label="Are you a brilliant? — home">are you a brilliant?</a>
	<a href="https://github.com/jimbot9k" class="copyright" target="_blank" rel="noopener noreferrer" aria-label="jimbot9k on GitHub, opens in new tab">© jimbot9k</a>
</header>

{@render children()}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 1rem 2rem;
		background: rgba(13, 13, 13, 0.85);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid #1e1e1e;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: lowercase;
		color: #a78bfa;
		text-decoration: none;
	}

	.copyright {
		font-size: 0.8rem;
		color: #555;
		text-decoration: none;
		transition: color 0.15s;
	}

	.copyright:hover {
		color: #888;
	}

	:global(.skip-link) {
		position: absolute;
		top: -100%;
		left: 1rem;
		z-index: 200;
		background: #a78bfa;
		color: #0d0d0d;
		padding: 0.5rem 1.25rem;
		border-radius: 0 0 8px 8px;
		font-weight: 700;
		font-size: 0.9rem;
		text-decoration: none;
		transition: top 0.15s ease;
	}

	:global(.skip-link:focus) {
		top: 0;
	}

	:global(*:focus-visible) {
		outline: 2px solid #a78bfa;
		outline-offset: 3px;
		border-radius: 3px;
	}
</style>
