<script lang="ts">
	import './why-consult.css';

	const reasons = [
		'Anxiété',
		'Dépression',
		'Colère',
		'Agitation',
		'Crises d\'angoisse',
		'Difficultés amoureuses et sexuelles',
		'Relations toxiques',
		'Confiance en soi',
		'Timidité',
		'Deuil',
		'Agressions sexuelles',
		'Burn out',
		'Addictions',
		'Troubles du comportement alimentaire',
		'TOC',
		'Symptômes corporels (eczéma, maux de tête, chute de cheveux, palpitations...)',
		'Fibromyalgie',
		'Maladie organique (cancer, AVC, polyarthrite)',
		'Sommeil (cauchemars, insomnies)',
		'Fatigue',
		'Grossesse ou parentalité difficile'
	];
</script>

<svelte:head>
	<title>Pourquoi consulter - Cécile Vathonne</title>
	<meta name="description" content="Découvrez les raisons et symptômes pour lesquels consulter un psychothérapeute." />
</svelte:head>

<img
	class="svg-wave-top"
	src="/images/waves/before-presentation-wave.svg"
	alt="Présentation"
/>
<main>
	<div class="hero-header">
		<h1 class="hero-title">Pourquoi consulter ?</h1>
		<p class="hero-subtitle">
			Les raisons d'une première consultation peuvent être très diverses, elles sont toutes les
			bienvenues. Voici quelques exemples de situations pour lesquelles une thérapie peut vous
			aider.
		</p>
	</div>

	<section class="content-section">
		<div class="centered-content">
			<div class="reasons-list">
				<ul class="items-list">
					{#each reasons as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<section class="content-section bg-light">
		<div class="centered-content">
			<p class="cta-text">
				Et bien d'autres raisons encore... N'hésitez pas à me contacter pour en discuter ensemble.
			</p>
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
			<span class="button-text">Prendre rendez-vous</span>
			<img
				style="vertical-align:middle;width:auto;height:19px"
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

	/* Reasons List */
	.reasons-list {
		max-width: 900px;
		margin: 0 auto;
	}

	.reason-item {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e5e7eb;
	}

	.reason-item:last-child {
		border-bottom: none;
		margin-bottom: 0;
		padding-bottom: 0;
	}

	.reason-title {
		font-size: 1.35rem;
		font-weight: 700;
		color: #053f5f;
		margin: 0 0 0.75rem 0;
	}

	.items-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.items-list li {
		font-size: 1.05rem;
		line-height: 1.7;
		color: #374151;
		margin-bottom: 0.5rem;
		padding-left: 1.5rem;
		position: relative;
	}

	.items-list li::before {
		content: '•';
		color: #107aca;
		font-weight: bold;
		position: absolute;
		left: 0;
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

		.reason-title {
			font-size: 1.45rem;
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

		.reason-title {
			font-size: 1.5rem;
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

		.reasons-list {
			max-width: 1000px;
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

		.reasons-list {
			max-width: 1200px;
		}

		.reason-title {
			font-size: 1.6rem;
		}
	}
</style>
