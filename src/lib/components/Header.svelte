<script lang="ts">
	import { onMount } from 'svelte';
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import './header.css';

	let showMenu = false;
	let showPlusMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function togglePlusMenu() {
		showPlusMenu = !showPlusMenu;
	}

	function closeMenu() {
		showMenu = false;
	}

	onMount(() => {
		// Ferme les menus au clic à l'extérieur
		const handleClickOutside = (e: MouseEvent) => {
			const header = document.querySelector('.header-container');
			if (header && !header.contains(e.target as Node)) {
				showMenu = false;
				showPlusMenu = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<header class="header-container">
	<a href="/" class="psi-container" aria-label="Accueil — Cécile Vathonne">
		<span class="psi-mark">
			<img width="26" height="26" src="/images/psychology.svg" alt="Psi" />
		</span>
		<div class="logo-container">
			<h2>Cécile Vathonne</h2>
			<h3>Psychothérapeute</h3>
		</div>
	</a>

	<nav class="menu">
		<ul class="navbar-normal-width">
			<li><a href="/">Accueil</a></li>
			<li><a href="/about-me">À propos</a></li>
			<li><a href="/why-consult">Pourquoi consulter</a></li>
			<li><a href="/#price">Combien ça coûte ?</a></li>
			<li class="plus-item">
				<button on:click={togglePlusMenu} class="plus-button" aria-expanded={showPlusMenu}>
					Plus
					<span class="arrow" class:active={showPlusMenu}></span>
				</button>
				{#if showPlusMenu}
					<div class="dropdown-plus-menu active">
						<ul>
							<li><a href="/psychoanalysis">Psychothérapie et psychanalyse</a></li>
							<li><a href="/network">Réseau</a></li>
							<li><a href="/article">Article</a></li>
						</ul>
					</div>
				{/if}
			</li>
		</ul>

		<div class="telephone-header-button">
			<a href="tel:07 62 80 25 77" class="phone-button">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
				</svg>
				07 62 80 25 77
			</a>
		</div>

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
	</nav>

	{#if showMenu}
		<div class="dropdown-menu active">
			<nav class="dropdown-nav">
				<ul>
					<li><a href="/" on:click={closeMenu}>Accueil</a></li>
					<li><a href="/about-me" on:click={closeMenu}>À propos</a></li>
					<li><a href="/why-consult" on:click={closeMenu}>Pourquoi consulter</a></li>
					<li><a href="/psychoanalysis" on:click={closeMenu}>Psychothérapie et psychanalyse</a></li>
					<li><a href="/#price" on:click={closeMenu}>Combien ça coûte ?</a></li>
					<li><a href="/network" on:click={closeMenu}>Réseau</a></li>
					<li><a href="/article" on:click={closeMenu}>Article</a></li>
				</ul>
			</nav>
			<div class="dropdown-menu-background">
				<div class="dropdown-buttons-container">
					<a href="tel:07 62 80 25 77" class="dropdown-phone">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
						</svg>
						07 62 80 25 77
					</a>
				</div>
				<div class="burger-menu-doctolib-button">
					<DoctolibButton />
				</div>
			</div>
		</div>
	{/if}
</header>

<div class="epigraph-block">
	<p class="epigraph">
		Chaque être traverse des périodes de <strong>doute</strong>, de <strong>chagrin</strong>,
		voire de <strong>souffrance</strong>. Laisser cette souffrance s'installer, ce n'est
		<strong>pas obligé !</strong> Tout le monde <strong>mérite</strong> une
		<strong>écoute sérieuse</strong>. Prendre <strong>rendez-vous</strong>, c'est facile et
		rapide.
	</p>
	<div class="doctolib-container">
		<DoctolibButton />
	</div>
</div>
