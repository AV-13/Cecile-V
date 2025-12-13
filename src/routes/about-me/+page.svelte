<script lang="ts">
	import './about-me.css';
</script>

<svelte:head>
	<title>À propos - Cécile Vathonne</title>
	<meta name="description" content="Parcours de Cécile Vathonne, psychothérapeute clinicienne et psychanalyste à Paris 9e." />
</svelte:head>

<main>
	<img class="svg-wave" src="/images/waves/before-presentation-wave.svg" alt="Présentation" />
	<div class="about-me-container">
		<div class="about-me">
			<div class="about-me-container">
				<img
					class="portrait portrait-about-me"
					src="/images/cecile-vathonne-portrait.png"
					alt="portrait de Cécile Vathonne"
				/>
				<div class="about-me-text">
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
			</div>
		</div>
	</div>
	<div class="ending-container">
		<img
			class="svg-wave"
			src="/images/waves/before-take-appointment-wave.svg"
			alt="Prendre rendez-vous"
		/>
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
	</div>
</main>

<style>
	.ending-container {
			background-color: #fff;
	}
	.about-me {
		background-color: #EDF3F6;
		padding-top: 50px;
	}

	.about-me img {
		width: 60%;
		margin: auto;
		border-radius: 10px;
	}

	.about-me-text h1 {
		padding: 30px;
	}

	.about-me-text p {
		padding: 20px 4rem 60px 4rem;
	}

	.portrait {
		margin: 20px auto;
		width: 250px;
		height: auto;
		border-radius: 5px;
		object-fit: cover;
	}

	.portrait-about-me {
		right: 0 !important;
		left: unset;
		top: -200px !important;
		border-radius: 10px 0 0 10px;
	}

	.svg-wave {
		width: 100%;
		height: 50px;
	}

	/* Tablets */
	@media (min-width: 640px) {
		.svg-wave {
			height: 100px;
		}

		.portrait {
			width: 50%;
			height: auto;
			max-width: 350px;
		}

		.about-me-text {
			padding: 40px;
		}

		.presentation-container h1 {
			font-size: 8vw;
		}
	}

	/* Small Laptops */
	@media (min-width: 1024px) {
		.presentation-container h1 {
			font-size: 6vw;
		}

		.portrait {
			width: 40%;
			height: auto;
		}

		.about-me-text {
			padding: 50px 60px;
		}
	}

	/* Large screens */
	@media (min-width: 1291px) {
		.svg-wave {
			height: 200px;
		}

		.presentation-container h1 {
			font-size: 5vw;
		}

		.about-me-container {
			display: flex;
			flex-direction: row-reverse;
		}

		.about-me-container .about-me-text, .about-me-container img {
			width: 50%;
		}

		.about-me img {
			width: 35%;
			height: auto;
			max-width: 400px;
		}

		.about-me-text {
			padding: 60px 80px;
		}
	}

	/* Extra large screens */
	@media (min-width: 1920px) {
		.presentation-container h1 {
			font-size: 4.5vw;
		}

		.about-me-text {
			padding: 80px 120px;
			max-width: 1600px;
			margin: 0 auto;
		}
	}
</style>
