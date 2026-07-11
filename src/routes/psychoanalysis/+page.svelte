<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<Seo
	title="Psychothérapie et psychanalyse : quelles différences ? — Cécile Vathonne"
	description="La cure par la parole : ce qui distingue psychothérapie et psychanalyse, et les différences entre psychiatre, psychologue, psychothérapeute et psychanalyste."
	path="/psychoanalysis"
/>

<main>
	<div class="hero-header section-shell" use:reveal>
		<h1 class="hero-title">Psychothérapie et psychanalyse</h1>
	</div>

	<section class="section-shell two-column-layout">
		<div class="image-column" use:reveal>
			<div class="visual-wrapper">
				<div class="photo-veil">
					<img
						class="section-illustration"
						src="/images/wal_172619-man-7825138_1920.jpg"
						alt="Visage recueilli, les yeux baissés, dans une lumière chaude"
					/>
				</div>
			</div>
		</div>
		<div class="text-column" use:reveal={{ delay: 0.15 }}>
			<h2 class="section-heading">La cure par la parole</h2>
			<p class="section-text">
				Dans les deux cas, il s'agit d'une cure par la parole. Elle a pour objectif de responsabiliser la personne
				par rapport à la construction de sa vie, son travail, ses relations.
			</p>
			<p class="section-text">
				La personne est invitée à parler librement et sans filtre. La confidentialité permet de pouvoir dire ce qui
				concerne ses pensées, son corps et ses rêves en toute confiance.
			</p>
		</div>
	</section>

	<section class="highlight-section" use:reveal>
		<div class="highlight-backdrop" aria-hidden="true"></div>
		<div class="section-shell">
			<p class="highlight-text">
				Le travail de cure est l'occasion d'accueillir avec bienveillance les éléments inconscients pour se séparer petit à petit de ce qui fait
				souffrir. Ce travail aide donc à traverser l'existence de façon plus légère, il permet de mieux se connaître
				pour construire sa voie et son équilibre.
			</p>
		</div>
	</section>

	<section class="section-shell comparison-block">
		<div class="consultation-visual" use:reveal>
			<div class="photo-veil consultation-frame">
				<img
					class="consultation-illustration"
					src="/images/consultation.jpg"
					alt="Illustration d'une psychanalyse"
				/>
			</div>
		</div>
		<div class="comparison-section">
			<div class="comparison-item" use:reveal>
				<h3 class="comparison-title">Psychothérapie</h3>
				<p class="comparison-text">
					Le patient cherche à ne plus souffrir de ses symptômes. Il est installé sur le <strong>fauteuil</strong>.
				</p>
			</div>
			<div class="comparison-item" use:reveal={{ delay: 0.15 }}>
				<h3 class="comparison-title">Psychanalyse</h3>
				<p class="comparison-text">
					Le psychanalysant a le désir de savoir sur sa souffrance. Il est installé sur le <strong>divan</strong>.
				</p>
			</div>
		</div>
	</section>

	<section class="cta-strip" use:reveal>
		<p class="cta-text">
			Chacun peut être concerné par la souffrance à un moment de sa vie, qu'il soit <strong>nourrisson, enfant, adolescent
			ou adulte</strong>. N'hésitez pas à prendre rendez-vous pour en parler !
		</p>
	</section>

	<section class="section-shell">
		<h2 class="section-heading centered" use:reveal>Psychiatre, psychologue, psychothérapeute, psychanalyste : quelles différences ?</h2>
		<div class="professionals-list">
			<div class="professional-item" use:reveal>
				<h3 class="professional-title">Psychiatre</h3>
				<p class="professional-text">
					Un médecin spécialiste des troubles psychiatriques. Il est habilité à prescrire des médicaments.
				</p>
			</div>

			<div class="professional-item" use:reveal={{ delay: 0.1 }}>
				<h3 class="professional-title">Psychologue</h3>
				<p class="professional-text">
					Un spécialiste de la psychologie. Il peut exercer dans différents champs : le travail, le
					développement de l'enfant, la neuropsychologie, etc. Seul le psychologue clinicien peut aussi occuper la position de psychothérapeute.
				</p>
			</div>

			<div class="professional-item" use:reveal={{ delay: 0.15 }}>
				<h3 class="professional-title">Psychothérapeute</h3>
				<p class="professional-text">
					Il occupe une position clinique auprès des patients qu'il rencontre. Il propose une cure par la parole.
				</p>
			</div>

			<div class="professional-item" use:reveal={{ delay: 0.2 }}>
				<h3 class="professional-title">Psychanalyste</h3>
				<p class="professional-text">
					Il occupe une position clinique auprès des psychanalysants dont il assure la cure. Il les invite à s'installer sur le divan.
				</p>
			</div>
		</div>
	</section>

	<div class="ending-container" use:reveal>
		<hr class="hairline" />
		<div class="doctolib-container">
			<DoctolibButton />
		</div>
	</div>
</main>

<style>
	/* --- En-tête --- */
	.hero-header {
		text-align: center;
		max-width: 56rem;
		padding-bottom: 0;
	}

	.hero-title {
		font-size: clamp(2.2rem, 5.5vw, 4rem);
		font-weight: 500;
		line-height: 1.2;
	}

	/* --- La cure par la parole --- */
	.two-column-layout {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
	}

	.image-column {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.visual-wrapper {
		position: relative;
		width: min(70vw, 320px);
	}

	.photo-veil {
		aspect-ratio: 4 / 5;
	}

	.text-column {
		max-width: var(--text-max);
	}

	.text-column h2 {
		margin-bottom: 1.5rem;
	}

	.section-text {
		line-height: 1.9;
		margin-bottom: 1.25rem;
		font-size: 1.02rem;
	}

	/* --- Citation, posée sur la nuit étoilée --- */
	.highlight-section {
		position: relative;
		overflow: hidden;
	}

	.highlight-backdrop {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(rgba(18, 24, 38, 0.45), rgba(18, 24, 38, 0.55)),
			url('/images/rauschenberger-night-4489561_1920.jpg') center 30% / cover no-repeat;
		animation: night-drift 40s ease-in-out infinite alternate;
	}

	@keyframes night-drift {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.07);
		}
	}

	.highlight-text {
		position: relative;
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.15rem, 2.6vw, 1.5rem);
		line-height: 1.9;
		color: var(--paper);
		text-align: center;
		max-width: 46rem;
		margin: 0 auto;
		text-shadow: 0 1px 20px rgba(10, 14, 24, 0.6);
	}

	.highlight-text::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--paper);
		opacity: 0.8;
		margin: 0 auto 1.75rem auto;
	}

	/* --- Fauteuil / divan --- */
	.comparison-block {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		align-items: center;
	}

	.consultation-visual {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.consultation-frame {
		width: min(80vw, 420px);
		aspect-ratio: 5 / 4;
	}

	.comparison-section {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.25rem;
		width: 100%;
		max-width: 54rem;
	}

	.comparison-item {
		border-top: 1px solid var(--line);
		padding-top: 1.75rem;
	}

	.comparison-title {
		font-size: 1.6rem;
		font-weight: 550;
		margin-bottom: 0.9rem;
	}

	.comparison-text {
		line-height: 1.85;
		margin: 0;
		max-width: 30rem;
	}

	/* --- Bandeau CTA --- */
	.cta-strip {
		padding: 0 var(--gutter);
		max-width: var(--content-max);
		margin: 0 auto;
	}

	.cta-text {
		line-height: 1.9;
		text-align: center;
		max-width: 42rem;
		margin: 0 auto;
		font-size: 1.05rem;
	}

	/* --- Les métiers du psychisme --- */
	.professionals-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		max-width: 60rem;
		margin: 3rem auto 0 auto;
	}

	.professional-item {
		border-top: 1px solid var(--line);
		padding-top: 1.75rem;
	}

	.professional-title {
		font-size: 1.4rem;
		font-weight: 550;
		margin-bottom: 0.75rem;
	}

	.professional-text {
		line-height: 1.8;
		margin: 0;
		font-size: 0.98rem;
	}

	.ending-container {
		padding-bottom: clamp(1rem, 3vw, 2rem);
	}

	.doctolib-container {
		display: flex;
		justify-content: center;
		margin-top: clamp(2.5rem, 6vw, 4rem);
	}

	/* Tablettes et plus */
	@media (min-width: 900px) {
		.two-column-layout {
			flex-direction: row;
			justify-content: space-between;
			gap: 5rem;
		}

		.image-column {
			flex: 1;
			justify-content: flex-end;
			order: 2;
		}

		.visual-wrapper {
			width: min(28vw, 340px);
		}

		.text-column {
			flex: 1.3;
		}

		.comparison-section {
			grid-template-columns: 1fr 1fr;
			gap: 0;
		}

		.comparison-item {
			border-top: none;
			padding-top: 0;
			padding-right: clamp(2rem, 4vw, 3.5rem);
		}

		.comparison-item + .comparison-item {
			border-left: 1px solid var(--line);
			padding-right: 0;
			padding-left: clamp(2rem, 4vw, 3.5rem);
		}

		.professionals-list {
			grid-template-columns: 1fr 1fr;
			gap: 2.5rem 3.5rem;
		}
	}
</style>
