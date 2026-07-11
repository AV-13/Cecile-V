<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>À propos - Cécile Vathonne</title>
	<meta name="description" content="Parcours de Cécile Vathonne, psychothérapeute clinicienne et psychanalyste à Paris 9e." />
</svelte:head>

<main>
	<section class="about-me section-shell">
		<div class="about-visual" use:reveal>
			<div class="portrait-wrapper">
				<div class="photo-veil portrait">
					<img src="/images/cecile-vathonne-portrait.png" alt="portrait de Cécile Vathonne" />
				</div>
			</div>
		</div>

		<div class="about-me-text" use:reveal={{ delay: 0.15 }}>
			<h1>Mon parcours</h1>
			<p>
				Diplômée de l'Université Paris V Descartes, j'ai suivi une formation de Psychologie clinique,
				Psychopathologie et Psychanalyse (PCPP). Je dispose donc du titre de <b>psychologue
				clinicienne</b> et
				je suis référencée auprès de l'Agence Régionale de santé (numéro RPPS : 10009020818).
				<br />
				<br />
				Grâce aux heures de stage clinique effectuées lors de ce cursus, je suis également habilitée à
				occuper la position de <b>psychothérapeute</b>.
				<br />
				<br />
				En complémentarité de cette activité, j'occupe un poste institutionnel.
				Je travaille auprès des équipes d'écoles primaires et je reçois des enfants avec leurs parents
				pour différentes problématiques ou symptômes (difficultés d'apprentissage, trouble de
				l'attention, énurésie, changements familiaux, etc.)
				<br />
				<br />
				J'exerce également des missions d'enseignement à l'université Paris Cité.
				<br /><br />
				J'ai décidé de poursuivre ma formation au sein d'une école de psychanalyse pour enrichir mes
				connaissances cliniques et théoriques. J'évolue donc depuis quelques années au sein du Réseau
				pour la
				Psychanalyse à l'Hôpital <b>(RPH - École de psychanalyse)</b>. Je participe aux colloques, aux
				supervisions et aux groupes de
				lecture proposés.
				<br /><br />
				Je suis également une psychanalyse personnelle, ce qui permet, entre autres,
				d'assurer mon discernement auprès des personnes qui viennent me rencontrer en consultation.
			</p>
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
	.about-me {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	.about-visual {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.portrait-wrapper {
		position: relative;
		width: min(72vw, 320px);
	}

	.portrait {
		aspect-ratio: 4 / 5;
	}

	.about-me-text {
		max-width: var(--text-max);
	}

	.about-me-text h1 {
		font-size: clamp(2.2rem, 5.5vw, 3.6rem);
		font-weight: 500;
		margin-bottom: 1.75rem;
		text-align: center;
	}

	.about-me-text p {
		line-height: 1.9;
		font-size: 1.02rem;
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
	@media (min-width: 1000px) {
		.about-me {
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			gap: 5rem;
		}

		.about-visual {
			flex: 1;
			justify-content: flex-end;
			order: 2;
			position: sticky;
			top: 3rem;
		}

		.portrait-wrapper {
			width: min(30vw, 380px);
		}

		.about-me-text {
			flex: 1.3;
		}

		.about-me-text h1 {
			text-align: left;
		}
	}
</style>
