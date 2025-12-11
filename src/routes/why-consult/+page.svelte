<script lang="ts">
	import './why-consult.css';

	const reasons = [
		{ category: 'Émotions', items: ['Anxiété', 'Dépression', 'Colère', 'Agitation', 'Crises d\'angoisse'] },
		{ category: 'Relations', items: ['Difficultés amoureuses et sexuelles', 'Relations toxiques', 'Confiance en soi', 'Timidité'] },
		{ category: 'Traumatismes', items: ['Deuil', 'Agressions sexuelles', 'Burn out'] },
		{ category: 'Comportements', items: ['Addictions', 'Troubles du comportement alimentaire', 'TOC'] },
		{ category: 'Santé physique', items: ['Symptômes corporels (eczéma, maux de tête, chute de cheveux, palpitations...)', 'Fibromyalgie', 'Maladie organique (cancer, AVC, polyarthrite)', 'Sommeil (cauchemars, insomnies)', 'Fatigue'] },
		{ category: 'Parentalité', items: ['Grossesse ou parentalité difficile'] }
	];
</script>

<svelte:head>
	<title>Pourquoi consulter - Cécile Vathonne</title>
	<meta name="description" content="Découvrez les raisons et symptômes pour lesquels consulter un psychothérapeute." />
</svelte:head>

<img
	class="svg-wave"
	src="/images/waves/before-presentation-wave.svg"
	alt="Présentation"
/>
<main>
	<div class="presentation-container">
		<h1>Pourquoi consulter ?</h1>
		<div class="intro-box">
			<p>
				Les raisons d'une première consultation peuvent être très diverses, elles sont toutes les
				bienvenues. Voici quelques exemples de situations pour lesquelles une thérapie peut vous
				aider.
			</p>
		</div>
	</div>

	<div class="container">
		<div class="reasons-grid">
			{#each reasons as { category, items }}
				<div class="reason-card">
					<h2 class="category-title">{category}</h2>
					<ul class="items-list">
						{#each items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="outro-section">
			<p class="outro-text">
				Et bien d'autres raisons encore... N'hésitez pas à me contacter pour en discuter ensemble.
			</p>
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
				Prendre rendez-vous
				<img
					style="vertical-align:middle;width:auto;height:19px;margin-left:8px"
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
	main {
		background-color: #edf3f6;
		min-height: 100vh;
	}
	.presentation-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.presentation-container h1 {
		font-size: 7vw;
		text-align: center;
		padding: 20px 0;
		font-weight: 800;
		color: #053f5f;
	}

	.intro-box {
		background-color: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(5, 63, 95, 0.15);
		border-left: 5px solid #107aca;
		margin: 2rem auto;
		max-width: 700px;
	}

	.intro-box p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #053f5f;
		margin: 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.reasons-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.reason-card {
		background-color: white;
		border-radius: 12px;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(5, 63, 95, 0.1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.reason-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 16px rgba(5, 63, 95, 0.15);
	}

	.category-title {
		color: #053f5f;
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		border-bottom: 3px solid #ffec2d;
		padding-bottom: 0.5rem;
		display: inline-block;
	}

	.items-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.items-list li {
		color: #053f5f;
		font-size: 1rem;
		line-height: 1.8;
		padding: 0.5rem 0 0.5rem 1.5rem;
		position: relative;
	}

	.items-list li::before {
		content: '•';
		color: #107aca;
		font-weight: bold;
		font-size: 1.5rem;
		position: absolute;
		left: 0;
		top: 0.2rem;
	}

	.outro-section {
		text-align: center;
		padding: 2rem 1rem;
		background-color: #faedfc;
		border-radius: 9999px;
		margin: 2rem auto;
		max-width: 800px;
	}

	.outro-text {
		color: #053f5f;
		font-size: 1.1rem;
		font-weight: 600;
		line-height: 1.6;
	}

	/* Responsive */
	@media (min-width: 640px) {
		.reasons-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.reasons-grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.reason-card {
			padding: 2.5rem;
		}
	}
</style>
