<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import AtmosphereCarousel from '$lib/components/AtmosphereCarousel.svelte';
	import CurveDivider from '$lib/components/CurveDivider.svelte';
	import { reveal } from '$lib/actions/reveal';

	// Les paysages du chemin thérapeutique : contemplation, lumière
	// qui perce, ciel qui se dégage, traversée de la nuit.
	const atmospheres = [
		{ src: '/images/243623-child-438373_1920.jpg', alt: '' },
		{ src: '/images/duernsteiner-forest-4919834_1920.jpg', alt: '' },
		{ src: '/images/mariakray-sky-6804245_1920.jpg', alt: '' },
		{ src: '/images/evgenit-sunrise-3340367_1920.jpg', alt: '' },
		{ src: '/images/rauschenberger-night-4489561_1920.jpg', alt: '' }
	];

	let heroPaused = false;
</script>

<Seo
	title="Psychothérapeute à Paris 9e — Cécile Vathonne, psychologue clinicienne"
	description="Psychothérapeute et psychologue clinicienne à Paris 9e (Pigalle). Consultations adultes et enfants, séances réglées selon vos moyens (CPP). Tél : 07 62 80 25 77."
	path="/"
/>

<main>
	<!-- Héro : les paysages défilent, la phrase demeure -->
	<section class="hero" aria-label="Présentation">
		<AtmosphereCarousel images={atmospheres} paused={heroPaused} />
		<div class="hero-scrim"></div>

		<div class="hero-content">
			<p class="hero-epigraph">
				Chaque être traverse des périodes de <strong>doute</strong>, de <strong>chagrin</strong>,
				voire de <strong>souffrance</strong>. Laisser cette souffrance s'installer, ce n'est
				<strong>pas obligé !</strong> Tout le monde <strong>mérite</strong> une
				<strong>écoute sérieuse</strong>. Prendre <strong>rendez-vous</strong>, c'est facile et
				rapide.
			</p>
			<DoctolibButton variant="outline-light" />
		</div>

		<button
			class="hero-pause"
			on:click={() => (heroPaused = !heroPaused)}
			aria-label={heroPaused ? 'Reprendre le défilement des images' : 'Suspendre le défilement des images'}
		>
			{#if heroPaused}
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
			{:else}
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
			{/if}
		</button>
	</section>

	<!-- Présentation -->
	<section class="presentation-container section-shell">
		<div class="presentation-text" use:reveal>
			<h1>Psychothérapeute</h1>
			<p class="psychology-explanation">
				Je propose de recevoir toute personne qui souffre.
				Au cours de sa vie, il est courant de rencontrer un moment difficile, un accident, de sentir en soi une
				tristesse ou un blocage depuis longtemps. Toute souffrance est légitime et mérite d'être écoutée.
				Si vous avez le désir d'en parler pour avancer, faites le premier pas et appelez au <a
					class="quiet-link" href="tel:07 62 80 25 77">07 62 80 25 77</a>.
			</p>
		</div>
		<div class="presentation-visual" use:reveal={{ delay: 0.2 }}>
			<div class="portrait-wrapper">
				<div class="photo-veil portrait">
					<img src="/images/accueil_psy.jpg" alt="La salle d’attente du cabinet de psychothérapie, 33 rue Jean-Baptiste Pigalle à Paris 9e" />
				</div>
			</div>
		</div>
	</section>

	<!-- Prendre rendez-vous — bande immersive -->
	<CurveDivider fill="var(--forest)" />
	<section id="takeAppointment" class="take-appointment">
		<div class="appointment-inner">
			<div class="appointment-visual" use:reveal>
				<div class="photo-veil bridge-frame">
					<img src="/images/anthr_photoblog-bridge-4336404_1920.jpg" alt="Pont dans un jardin paisible" />
				</div>
			</div>

			<div class="appointment-content" use:reveal={{ delay: 0.15 }}>
				<h2 class="section-heading">Prendre rendez-vous</h2>
				<p>
					Les prises de rendez-vous se font <b>par téléphone</b> au <b>07 62 80 25 77</b>, par <b>mail</b> à
					l'adresse <b>cecile.vathonne@gmail.com</b> ou via Doctolib.
				</p>

				<div class="appointment-actions">
					<a class="btn btn-light" href="tel:762802577">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
						</svg>
						07 62 80 25 77
					</a>
					<DoctolibButton variant="outline-light" />
				</div>
			</div>
		</div>
	</section>
	<CurveDivider fill="var(--forest)" flip />

	<!-- Tarifs -->
	<section id="price" class="price-section">
		<div class="price-inner" use:reveal>
			<h2 class="section-heading centered">Combien ça coûte ?</h2>
			<p class="price-text">
				Je pratique le principe de <strong>Consultation Publique de Psychanalyse (CPP)</strong>.
				Vous êtes invités à régler vos séances <strong>en fonction de vos moyens</strong>.
				Nous pouvons donc discuter ensemble du prix des séances <strong>selon vos possibilités</strong>.
			</p>
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}

	/* --- Héro --- */
	.hero {
		position: relative;
		min-height: clamp(480px, 72vh, 760px);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: clamp(1rem, 2.5vw, 2rem);
		overflow: hidden;
	}

	.hero-scrim {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 60% 55% at 50% 48%, rgba(31, 42, 46, 0.34), transparent 70%),
			linear-gradient(
				180deg,
				rgba(31, 42, 46, 0.46) 0%,
				rgba(31, 42, 46, 0.32) 45%,
				rgba(31, 42, 46, 0.6) 100%
			);
	}

	.hero-content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.25rem;
		max-width: 46rem;
		padding: 4rem var(--gutter);
		text-align: center;
		animation: hero-in 1.6s var(--ease-out-soft) both;
	}

	@keyframes hero-in {
		from {
			opacity: 0;
			transform: translateY(26px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-epigraph {
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.15rem, 2.6vw, 1.6rem);
		line-height: 1.85;
		color: var(--paper);
		text-shadow: 0 1px 22px rgba(31, 42, 46, 0.45);
	}

	.hero-epigraph strong {
		color: #ffffff;
		font-weight: 600;
	}

	.hero-epigraph::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--paper);
		opacity: 0.8;
		margin: 0 auto 1.6rem auto;
	}

	.hero-pause {
		position: absolute;
		right: clamp(1rem, 3vw, 2rem);
		bottom: clamp(1rem, 3vw, 2rem);
		z-index: 3;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		border: 1px solid rgba(245, 242, 236, 0.65);
		color: var(--paper);
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(31, 42, 46, 0.25);
		backdrop-filter: blur(3px);
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	.hero-pause:hover {
		background-color: rgba(31, 42, 46, 0.5);
		border-color: var(--paper);
	}

	.hero-pause svg {
		width: 15px;
		height: 15px;
	}

	/* --- Présentation --- */
	.presentation-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
		width: 100%;
	}

	.presentation-text {
		text-align: center;
		max-width: var(--text-max);
	}

	.presentation-text h1 {
		font-size: clamp(2.6rem, 7vw, 4.75rem);
		font-weight: 500;
		margin-bottom: 1.75rem;
	}

	.psychology-explanation {
		text-align: left;
		font-size: 1.02rem;
		line-height: 1.9;
	}

	.presentation-visual {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.portrait-wrapper {
		position: relative;
		width: min(78vw, 340px);
	}

	.portrait {
		aspect-ratio: 4 / 5;
	}

	/* --- Prendre rendez-vous --- */
	.take-appointment {
		background-color: var(--forest);
		color: var(--paper);
		padding: clamp(2.5rem, 6vw, 5rem) var(--gutter);
	}

	.appointment-inner {
		max-width: var(--content-max);
		margin: 0 auto;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		gap: 3rem;
	}

	.appointment-content {
		text-align: center;
		max-width: var(--text-max);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.appointment-content h2 {
		color: var(--paper);
		margin-bottom: 1.5rem;
	}

	.appointment-content p {
		line-height: 1.9;
		color: rgba(245, 242, 236, 0.85);
	}

	.appointment-content p b {
		color: #ffffff;
	}

	.appointment-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
		margin-top: 2.25rem;
	}

	.appointment-visual {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.bridge-frame {
		--veil-color: var(--forest);
		width: min(70vw, 320px);
		aspect-ratio: 4 / 5;
	}

	/* --- Tarifs : une bande posée sur sable, sans cadre --- */
	.price-section {
		background-color: var(--paper-2);
		margin-top: var(--space-section);
	}

	.price-inner {
		max-width: var(--content-max);
		margin: 0 auto;
		padding: clamp(3.5rem, 8vw, 6rem) var(--gutter);
		text-align: center;
	}

	.price-inner h2 {
		margin-bottom: 1.75rem;
	}

	.price-inner h2::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--sage);
		margin: 0 auto 1.6rem auto;
	}

	.price-text {
		max-width: 38rem;
		margin: 0 auto;
		line-height: 1.95;
		font-size: clamp(1.02rem, 2vw, 1.15rem);
	}

	/* Tablettes */
	@media (min-width: 900px) {
		.presentation-container {
			flex-direction: row;
			justify-content: space-between;
			gap: 4rem;
		}

		.presentation-text {
			text-align: left;
			flex: 1.2;
		}

		.presentation-visual {
			flex: 1;
			justify-content: flex-end;
		}

		.portrait-wrapper {
			width: min(34vw, 400px);
		}

		.appointment-inner {
			flex-direction: row;
			justify-content: space-between;
			gap: 4rem;
		}

		.appointment-visual {
			flex: 1;
			justify-content: flex-start;
		}

		.appointment-content {
			flex: 1.3;
			text-align: left;
			align-items: flex-start;
		}

		.appointment-actions {
			justify-content: flex-start;
		}

		.bridge-frame {
			width: min(26vw, 320px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-content {
			animation: none;
		}
	}
</style>
