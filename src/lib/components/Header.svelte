<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { DOCTOLIB_URL, PHONE_DISPLAY, PHONE_HREF } from '$lib/constants';
	import './header.css';

	let showMenu = false;

	const links = [
		{ href: '/', label: 'Accueil' },
		{ href: '/about-me', label: 'À propos' },
		{ href: '/why-consult', label: 'Pourquoi consulter' },
		{ href: '/psychoanalysis', label: 'Psychothérapie et psychanalyse' },
		{ href: '/#price', label: 'Combien ça coûte ?' },
		{ href: '/network', label: 'Réseau' },
		{ href: '/article', label: 'Article' }
	];

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function closeMenu() {
		showMenu = false;
	}

	onMount(() => {
		// Ferme le menu au clic à l'extérieur
		const handleClickOutside = (e: MouseEvent) => {
			const header = document.querySelector('.header-container');
			if (header && !header.contains(e.target as Node)) {
				showMenu = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<header class="header-container">
	<div class="header-top">
		<div class="header-side header-side-left">
			<a href={PHONE_HREF} class="phone-button">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
				</svg>
				<span class="phone-number">{PHONE_DISPLAY}</span>
			</a>
		</div>

		<a href="/" class="logo" aria-label="Accueil — Cécile Vathonne">
			<span class="logo-name">Cécile Vathonne</span>
			<span class="logo-role">Psychothérapeute</span>
		</a>

		<div class="header-side header-side-right">
			<a
				class="header-doctolib"
				href={DOCTOLIB_URL}
				target="_blank"
				rel="noopener"
			>
				Prendre rendez-vous
			</a>
			<button
				on:click={toggleMenu}
				class="burger-menu-container"
				class:active={showMenu}
				aria-label="Menu"
				aria-expanded={showMenu}
			>
				<span class="burger-line"></span>
				<span class="burger-line"></span>
				<span class="burger-line"></span>
			</button>
		</div>
	</div>

	<nav class="main-nav" aria-label="Navigation principale">
		<ul>
			{#each links as link}
				<li>
					<a
						href={link.href}
						class:active={$page.url.pathname === link.href}
						aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	{#if showMenu}
		<div class="dropdown-menu">
			<nav class="dropdown-nav" aria-label="Navigation">
				<ul>
					{#each links as link}
						<li><a href={link.href} on:click={closeMenu}>{link.label}</a></li>
					{/each}
				</ul>
			</nav>
			<div class="dropdown-menu-background">
				<div class="dropdown-buttons-container">
					<a href={PHONE_HREF} class="dropdown-phone">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
						</svg>
						{PHONE_DISPLAY}
					</a>
				</div>
				<div class="burger-menu-doctolib-button">
					<DoctolibButton />
				</div>
			</div>
		</div>
	{/if}
</header>
