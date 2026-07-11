<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Cécile Vathonne - Psychothérapeute</title>
	<meta name="description" content="Psychothérapeute spécialisée en psychanalyse à Paris 9e. RV rapide au 07 62 80 25 77." />
</svelte:head>

<main>
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
				<div class="breathing-halo"></div>
				<div class="arch-frame portrait">
					<img src="/images/accueil_psy.jpg" alt="portrait" />
				</div>
			</div>
		</div>
	</section>

	<hr class="hairline" />

	<!-- Prendre rendez-vous -->
	<section id="takeAppointment" class="take-appointment section-shell">
		<div class="appointment-visual" use:reveal>
			<div class="phone-illustration-container">
				<div class="breathing-halo halo-alt"></div>
				<div class="blob-frame">
					<img
						class="telephone-illustration"
						src="/images/telephone-illustration.jpg"
						alt="telephone-illustration"
					/>
				</div>
			</div>
		</div>

		<div class="appointment-content" use:reveal={{ delay: 0.15 }}>
			<h2 class="section-heading">Prendre rendez-vous</h2>
			<p>
				Les prises de rendez-vous se font <b>par téléphone</b> au <b>07 62 80 25 77</b>, par <b>mail</b> à
				l'adresse <b>cecile.vathonne@gmail.com</b> ou via Doctolib.
			</p>

			<div class="appointment-actions">
				<a class="btn" href="tel:762802577">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
					</svg>
					07 62 80 25 77
				</a>
				<DoctolibButton />
			</div>
		</div>
	</section>

	<!-- Tarifs -->
	<section id="price" class="price-section section-shell">
		<div class="price-card" use:reveal>
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
		margin-bottom: 1.5rem;
	}

	.appointment-content p {
		line-height: 1.9;
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

	.phone-illustration-container {
		position: relative;
		width: min(64vw, 280px);
	}

	.halo-alt {
		background: linear-gradient(140deg, var(--mist-tint), rgba(217, 200, 184, 0.7));
		animation-duration: 17s;
	}

	.blob-frame {
		overflow: hidden;
		border-radius: 58% 42% 55% 45% / 48% 55% 45% 52%;
		box-shadow: 0 30px 60px -35px rgba(47, 64, 71, 0.4);
		aspect-ratio: 1;
	}

	.telephone-illustration {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* --- Tarifs --- */
	.price-section {
		padding-top: 0;
	}

	.price-card {
		background-color: rgba(255, 255, 255, 0.55);
		border: 1px solid var(--line);
		border-radius: calc(var(--radius-soft) * 1.5);
		padding: clamp(2.5rem, 6vw, 4.5rem);
		text-align: center;
		backdrop-filter: blur(4px);
	}

	.price-card h2 {
		margin-bottom: 1.5rem;
	}

	.price-text {
		max-width: 38rem;
		margin: 0 auto;
		line-height: 1.9;
		font-size: 1.02rem;
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

		.take-appointment {
			flex-direction: row;
			justify-content: space-between;
			gap: 4rem;
		}

		.appointment-visual {
			flex: 1;
			justify-content: flex-start;
		}

		.appointment-content {
			flex: 1.2;
			text-align: left;
			align-items: flex-start;
		}

		.appointment-actions {
			justify-content: flex-start;
		}

		.phone-illustration-container {
			width: min(28vw, 330px);
		}
	}
</style>
