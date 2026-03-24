<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	let { children } = $props();

	let theme = $state<'dark' | 'light'>('dark');

	onMount(() => {
		const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
		theme = saved ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	});

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
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
	<div class="header-right">
		<button
			class="theme-toggle"
			onclick={toggle}
			aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		>{theme === 'dark' ? '☀' : '☾'}</button>
		<a href="https://github.com/jimbot9k" class="copyright" target="_blank" rel="noopener noreferrer" aria-label="jimbot9k on GitHub, opens in new tab">© jimbot9k</a>
	</div>
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
		background: var(--bg-header);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--border-4);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.1rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: lowercase;
		color: var(--accent-brilliant);
		text-decoration: none;
	}

	.header-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.theme-toggle {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.1rem;
		color: var(--text-muted);
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		line-height: 1;
		transition: color 0.15s, background 0.15s;
	}

	.theme-toggle:hover {
		color: var(--text);
		background: var(--surface-hover);
	}

	.copyright {
		font-size: 0.8rem;
		color: var(--text-faint);
		text-decoration: none;
		transition: color 0.15s;
	}

	.copyright:hover {
		color: var(--text-muted);
	}

	:global(.skip-link) {
		position: absolute;
		top: -100%;
		left: 1rem;
		z-index: 200;
		background: var(--accent-brilliant);
		color: var(--bg);
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
		outline: 2px solid var(--accent-brilliant);
		outline-offset: 3px;
		border-radius: 3px;
	}
</style>
