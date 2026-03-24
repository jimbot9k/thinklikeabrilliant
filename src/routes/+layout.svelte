<script lang="ts">
	import { dev } from '$app/environment';
	import favicon from '$lib/assets/favicon.svg';
	import { locale } from '$lib/locale.svelte';
	import { translations } from '$lib/translations';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';

	injectSpeedInsights();
	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();

	let theme = $state<'dark' | 'light'>('dark');
	let copied = $state(false);

	const tl = $derived(translations[locale.current].layout);

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
		theme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

		const savedLocale = localStorage.getItem('locale') as 'en' | 'zh' | 'de' | 'es' | 'fr' | 'ja' | null;
		locale.init(savedLocale ?? (navigator.language.startsWith('de') ? 'de' : navigator.language.startsWith('zh') ? 'zh' : navigator.language.startsWith('ja') ? 'ja' : 'en'));
	});

	$effect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	});

	$effect(() => {
		document.documentElement.lang = locale.current === 'zh' ? 'zh-CN' : locale.current === 'de' ? 'de' : locale.current === 'es' ? 'es' : locale.current === 'fr' ? 'fr' : locale.current === 'ja' ? 'ja' : 'en';
		localStorage.setItem('locale', locale.current);
	});

	function toggleTheme() {
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

<a href="#main-content" class="skip-link">{tl.skipLink}</a>

<header aria-label={tl.headerAriaLabel}>
	<a href="/" class="logo" aria-label={tl.logoAriaLabel}>{tl.logo}</a>
	<div class="header-right">
		<button
			class="theme-toggle"
			onclick={toggleTheme}
			aria-label={theme === 'dark' ? tl.switchToLight : tl.switchToDark}
		>{theme === 'dark' ? '☀' : '☾'}</button>
		<select
			class="lang-select"
			aria-label={tl.langLabel}
			value={locale.current}
			onchange={(e) => locale.set((e.currentTarget as HTMLSelectElement).value as 'en' | 'zh' | 'de' | 'es' | 'fr' | 'ja')}
		>
			<option value="en">English</option>
			<option value="zh">中文</option>
			<option value="de">Deutsch</option>
			<option value="es">Español</option>
			<option value="fr">Français</option>
			<option value="ja">日本語</option>
		</select>
	</div>
</header>

{@render children()}

<footer aria-label={tl.footerAriaLabel}>
	<p class="donate-label">{tl.donateLabel}</p>
	<button
		class="btc-btn"
		aria-label={copied ? tl.copiedLabel : tl.donateAriaLabel}
		onclick={() => {
			navigator.clipboard.writeText('3LvVN9PFtnUiZhzTLUV2k2BTJjiysPjvZE');
			copied = true;
			setTimeout(() => (copied = false), 2000);
		}}
	>
		<span class="btc-icon" aria-hidden="true">₿</span>
		<span class="btc-address" aria-hidden="true">3LvVN9PFtnUiZhzTLUV2k2BTJjiysPjvZE</span>
		<span class="copy-status" aria-hidden="true">{copied ? tl.copiedLabel : ''}</span>
	</button>
	<a href="https://github.com/jimbot9k" class="copyright" target="_blank" rel="noopener noreferrer" aria-label={tl.githubAriaLabel}>© jimbot9k</a>
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	:global(main) {
		flex: 1;
	}

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

	.lang-select {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--text-muted);
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		line-height: 1;
		transition: color 0.15s, background 0.15s;
		font-family: inherit;
	}

	.lang-select:hover {
		color: var(--text);
		background: var(--surface-hover);
	}

	.lang-select:focus-visible {
		outline: 2px solid var(--accent-brilliant);
		outline-offset: 2px;
	}

	.lang-select option {
		background: var(--bg);
		color: var(--text);
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

	footer {
		margin-top: 3rem;
		padding: 2rem 1.5rem;
		text-align: center;
		border-top: 1px solid var(--border-4);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.donate-label {
		font-size: 0.8rem;
		color: var(--text-faint);
		margin: 0;
	}

	.btc-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--surface);
		border: 1px solid var(--border-4);
		border-radius: 8px;
		padding: 0.45rem 0.9rem;
		cursor: pointer;
		font-family: monospace;
		font-size: 0.72rem;
		color: var(--text-muted);
		transition: border-color 0.15s, color 0.15s;
		max-width: 100%;
	}

	.btc-btn:hover {
		border-color: var(--accent);
		color: var(--text);
	}

	.btc-icon {
		color: #f7931a;
		font-style: normal;
		flex-shrink: 0;
	}

	.btc-address {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.copy-status {
		flex-shrink: 0;
		font-family: inherit;
		font-size: 0.7rem;
		color: var(--accent-brilliant);
		min-width: 3ch;
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
