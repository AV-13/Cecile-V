<script lang="ts">
	import './psychoanalysis.css';
</script>

<svelte:head>
	<title>La psychanalyse - Cécile Vathonne</title>
	<meta name="description" content="Découvrez la psychanalyse et les différences avec la psychothérapie." />
</svelte:head>

<img
	class="svg-wave-top"
	src="/images/waves/before-presentation-wave.svg"
	alt="Présentation"
/>
<main>
	<div class="hero-header">
			<h1 class="hero-title">Psychothérapie et psychanalyse</h1>
			<p class="hero-subtitle">La cure par la parole pour mieux se comprendre et se construire</p>
	</div>

	<section class="content-section">
		<div class="two-column-layout">
			<div class="image-column">
				<img
					class="section-illustration"
					src="/images/fil.jpg"
					alt="Illustration de Sigmund Freud, père de la psychanalyse."
				/>
			</div>
			<div class="text-column">
				<h2 class="section-title">La cure par la parole</h2>
				<p class="section-text">
					Dans les deux cas, il s'agit d'une cure par la parole. Elle a pour objectif de responsabiliser la personne
					par rapport à la construction de sa vie, son travail, ses relations.
				</p>
				<p class="section-text">
					La personne est invitée à parler librement et sans filtre. La confidentialité permet de pouvoir dire ce qui
					concerne ses pensées, son corps et ses rêves en toute confiance.
				</p>
			</div>
		</div>
	</section>

	<section class="content-section bg-light">
		<div class="centered-content">
			<p class="highlight-text">
				Le travail de cure est l'occasion d'accueillir avec bienveillance les éléments inconscients pour se séparer petit à petit de ce qui fait
				souffrir. Ce travail aide donc à traverser l'existence de façon plus légère, il permet de mieux se connaître
				pour construire sa voie et son équilibre.
			</p>
		</div>
	</section>

	<section class="content-section">
		<div class="centered-content">
			<img
				class="consultation-illustration"
				src="/images/consultation.jpg"
				alt="Illustration d'une psychanalyse"
			/>
			<div class="comparison-cards">
				<div class="comparison-card">
					<h3 class="card-title">Psychothérapie</h3>
					<p class="card-text">
						Le patient cherche à ne plus souffrir de ses symptômes. Il est installé sur le <strong>fauteuil</strong>.
					</p>
				</div>
				<div class="comparison-card">
					<h3 class="card-title">Psychanalyse</h3>
					<p class="card-text">
						Le psychanalysant a le désir de savoir sur sa souffrance. Il est installé sur le <strong>divan</strong>.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="content-section bg-light">
		<div class="centered-content">
			<p class="cta-text">
				Chacun peut être concerné par la souffrance à un moment de sa vie, qu'il soit <strong>nourrisson, enfant, adolescent
				ou adulte</strong>. N'hésitez pas à prendre rendez-vous pour en parler !
			</p>
		</div>
	</section>

	<section class="content-section">
		<div class="centered-content">
			<h2 class="section-title centered">Psychiatre, psychologue, psychothérapeute, psychanalyste : quelles différences ?</h2>
			<div class="professionals-grid">
				<div class="professional-card">
					<h3 class="professional-title">Psychiatre</h3>
					<p class="professional-description">
						Un médecin spécialiste des troubles psychiatriques. Il est habilité à prescrire des médicaments.
					</p>
				</div>

				<div class="professional-card">
					<h3 class="professional-title">Psychologue</h3>
					<p class="professional-description">
						Un spécialiste de la psychologie. Il peut exercer dans différents champs : le travail, le
						développement de l'enfant, la neuropsychologie, etc. Seul le psychologue clinicien peut aussi occuper la position de psychothérapeute.
					</p>
				</div>

				<div class="professional-card">
					<h3 class="professional-title">Psychothérapeute</h3>
					<p class="professional-description">
						Il occupe une position clinique auprès des patients qu'il rencontre. Il propose une cure par la parole.
					</p>
				</div>

				<div class="professional-card">
					<h3 class="professional-title">Psychanalyste</h3>
					<p class="professional-description">
						Il occupe une position clinique auprès des psychanalysants dont il assure la cure. Il les invite à s'installer sur le divan.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
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
			Prendre rendez-vous
			<img
				style="vertical-align:middle;width:auto;height:19px;margin-left:8px"
				src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
				alt="Doctolib"
			/>
		</a>
	</div>
</div>

<style>
    .ending-container {
        background-color: #fff;
    }
	main {
		overflow-x: hidden;
		background-color: #edf3f6;
	}

	.svg-wave-top {
		width: 100%;
		height: 50px;
		display: block;
		margin-bottom: -5px;
	}

	/* Hero Header */
	.hero-header {
		text-align: center;
		padding: 3rem 1.5rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: 2.2rem;
		font-weight: 800;
		color: #053f5f;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.hero-subtitle {
		font-size: 1.1rem;
		color: #0a5f8f;
		line-height: 1.6;
		font-weight: 500;
	}

	/* Content Sections */
	.content-section {
		padding: 3rem 1.5rem;
	}

	.content-section.bg-light {
		background-color: #f9fafb;
	}

	.centered-content {
		max-width: 1100px;
		margin: 0 auto;
	}

	/* Two Column Layout */
	.two-column-layout {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		max-width: 1100px;
		margin: 0 auto;
	}

	.image-column {
		width: 100%;
	}

	.text-column {
		width: 100%;
	}

	.section-illustration {
		width: 100%;
		max-width: 400px;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		display: block;
		margin: 0 auto;
	}

	.section-title {
		font-size: 1.75rem;
		font-weight: 700;
		color: #053f5f;
		margin: 0 0 1.5rem 0;
		line-height: 1.3;
	}

	.section-title.centered {
		text-align: center;
	}

	.section-text {
		font-size: 1.05rem;
		line-height: 1.8;
		color: #374151;
		margin-bottom: 1.25rem;
	}

	/* Highlight Text */
	.highlight-text {
		font-size: 1.15rem;
		line-height: 1.9;
		color: #1f2937;
		text-align: center;
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		border-left: 4px solid #107ACA;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	}

	/* Consultation Illustration */
	.consultation-illustration {
		width: 100%;
		max-width: 500px;
		border-radius: 12px;
		margin: 0 auto 3rem auto;
		display: block;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	/* Comparison Cards */
	.comparison-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.comparison-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
		border-left: 5px solid #107ACA;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.comparison-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
	}

	.card-title {
		font-size: 1.4rem;
		font-weight: 700;
		color: #053f5f;
		margin: 0 0 1rem 0;
	}

	.card-text {
		font-size: 1.05rem;
		line-height: 1.7;
		color: #4b5563;
		margin: 0;
	}

	/* CTA Text */
	.cta-text {
		font-size: 1.15rem;
		line-height: 1.8;
		color: #1f2937;
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
		padding: 1.5rem;
	}

	/* Professionals Grid */
	.professionals-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-top: 2.5rem;
	}

	.professional-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
		border-top: 4px solid #faedfc;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.professional-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
		border-top-color: #107ACA;
	}

	.professional-title {
		font-size: 1.3rem;
		font-weight: 700;
		color: #053f5f;
		margin: 0 0 1rem 0;
	}

	.professional-description {
		font-size: 1rem;
		line-height: 1.7;
		color: #4b5563;
		margin: 0;
	}

	/* Tablets */
	@media (min-width: 640px) {
		.svg-wave-top {
			height: 100px;
		}

		.hero-header {
			padding: 4rem 2rem;
		}

		.hero-title {
			font-size: 2.8rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.content-section {
			padding: 4rem 2rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.comparison-cards {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.professionals-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.cta-text {
			font-size: 1.2rem;
		}
	}

	/* Small Laptops */
	@media (min-width: 1024px) {
		.svg-wave-top {
			height: 150px;
		}

		.hero-header {
			padding: 5rem 3rem;
		}

		.hero-title {
			font-size: 3.5rem;
		}

		.hero-subtitle {
			font-size: 1.3rem;
		}

		.content-section {
			padding: 5rem 3rem;
		}

		.section-title {
			font-size: 2.2rem;
		}

		.two-column-layout {
			flex-direction: row;
			gap: 4rem;
		}

		.image-column {
			width: 40%;
		}

		.text-column {
			width: 60%;
		}

		.section-illustration {
			max-width: none;
		}

		.professional-card {
			padding: 2rem;
		}

		.cta-text {
			font-size: 1.25rem;
		}
	}

	/* Large screens */
	@media (min-width: 1291px) {
		.svg-wave-top {
			height: 200px;
		}

		.hero-header {
			padding: 6rem 4rem;
			max-width: 1100px;
		}

		.hero-title {
			font-size: 4rem;
		}

		.hero-subtitle {
			font-size: 1.4rem;
		}

		.content-section {
			padding: 6rem 4rem;
		}

		.centered-content {
			max-width: 1400px;
		}
	}

	/* Extra large screens */
	@media (min-width: 1920px) {
		.hero-header {
			padding: 7rem 5rem;
			max-width: 1300px;
		}

		.hero-title {
			font-size: 4.5rem;
		}

		.hero-subtitle {
			font-size: 1.5rem;
		}

		.content-section {
			padding: 7rem 5rem;
		}

		.centered-content {
			max-width: 1600px;
		}

		.section-title {
			font-size: 2.5rem;
		}
	}
</style>
