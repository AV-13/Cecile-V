<script lang="ts">
	import { onMount } from 'svelte';
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
		// Close menus when clicking outside
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
	<div class="psi-container">
		<img width="50" height="50" src="/images/psychology.svg" alt="Psi" />
		<div class="logo-container">
			<h2>Cécile Vathonne</h2>
			<h3>Psychothérapeute</h3>
		</div>
	</div>

	<nav class="menu">
		<ul class="navbar-normal-width">
			<li><a href="/">Accueil</a></li>
			<li><a href="/about-me">À propos</a></li>
			<li><a href="/why-consult">Pourquoi consulter</a></li>
			<li><a href="/#price">Combien ça coûte ?</a></li>
			<li class="plus-item">
				<button
					on:click={togglePlusMenu}
					class="plus-button"
					aria-expanded={showPlusMenu}
				>
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
				<img width="15" height="15" src="/images/telephone.svg" alt="telephone" />
				07 62 80 25 77
			</a>
		</div>

		<button on:click={toggleMenu} class="burger-menu-container" class:active={showMenu}>
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
					<a href="tel:07 62 80 25 77">
						<img src="/images/telephone.svg" alt="telephone" />
						07 62 80 25 77
					</a>
				</div>
				<div class="burger-menu-doctolib-button">
					<a
						href="https://www.doctolib.fr/psychologue/paris/cecile-vathonne/booking?bookingFunnelSource=external_referral&utm_campaign=website-button&utm_source=cecile-vathonne-website-button&utm_medium=referral&utm_content=withoutpreview-blue-floating-bottom-right&utm_term=cecile-vathonne"
						style="display:flex;text-align:center;background-color:#107ACA;color:#ffffff;font-size:14px;overflow:hidden;font-family:Roboto, sans-serif;box-sizing:border-box;align-items:center;justify-content:center;padding:8px 24px;z-index:1000;min-height:48px;text-decoration:none;border-radius:24px;width:fit-content;margin:0 auto;flex-wrap:wrap;gap:8px"
						target="_blank"
						rel="noopener">
						<span style="white-space:nowrap">Prendre rendez-vous</span>
						<img
							style="vertical-align:middle;width:auto;height:19px"
							src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
							alt="Doctolib"/>
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>

<div class="doctolib-container">
	<a
		href="https://www.doctolib.fr/psychologue/paris/cecile-vathonne/booking?bookingFunnelSource=external_referral&utm_campaign=website-button&utm_source=cecile-vathonne-website-button&utm_medium=referral&utm_content=withoutpreview-blue-floating-bottom-right&utm_term=cecile-vathonne"
		class="doctolib-button-main"
		target="_blank"
		rel="noopener"
	>
		<span class="button-text">Prendre rendez-vous</span>
		<img
			style="vertical-align:middle;width:auto;height:19px"
			src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
			alt="Doctolib"
		/>
	</a>
</div>

<div class="purple-warning">
	Chaque être traverse des périodes de <strong>doute</strong>, de <strong>chagrin</strong>, voire de <strong>souffrance</strong>.
	Laisser cette souffrance s'installer, ce n'est <strong>pas obligé !</strong> Tout le monde
	<strong>mérite</strong> une <strong>écoute sérieuse</strong>. Prendre <strong>rendez-vous</strong>, c'est facile
	et rapide.
</div>

<style>
	.header-container {
		position: relative;
		z-index: 10;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
	}

	.plus-button {
		background: none;
		border: none;
		cursor: pointer;
		font-size: inherit;
		color: #fff;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 0;
		font: inherit;
	}

	.plus-button:hover {
		opacity: 0.8;
	}
</style>
