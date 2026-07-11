<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';

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

	// Deux rangées qui dérivent en sens opposés, comme des pensées qui circulent
	const rowA = reasons.slice(0, 11);
	const rowB = reasons.slice(11);
</script>

<svelte:head>
	<title>Pourquoi consulter - Cécile Vathonne</title>
	<meta name="description" content="Découvrez les raisons et symptômes pour lesquels consulter un psychothérapeute." />
</svelte:head>

<main>
	<div class="hero-header section-shell" use:reveal>
		<h1 class="hero-title">Pourquoi consulter ?</h1>
		<p class="hero-subtitle">
			Les raisons d'une première consultation peuvent être très diverses, elles sont toutes les
			bienvenues. Voici quelques exemples de situations pour lesquelles une thérapie peut vous
			aider.
		</p>
	</div>

	<!-- Les motifs, en mouvement perpétuel — comme la parole qui circule -->
	<section class="reasons-drift" use:reveal={{ delay: 0.1 }}>
		<div class="marquee">
			<ul class="marquee-track" style="--drift-duration: 80s;">
				{#each rowA as item}
					<li class="reason-chip">{item}</li>
				{/each}
				{#each rowA as item}
					<li class="reason-chip" aria-hidden="true">{item}</li>
				{/each}
			</ul>
		</div>
		<div class="marquee">
			<ul class="marquee-track track-reverse" style="--drift-duration: 95s;">
				{#each rowB as item}
					<li class="reason-chip chip-alt">{item}</li>
				{/each}
				{#each rowB as item}
					<li class="reason-chip chip-alt" aria-hidden="true">{item}</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="cta-section section-shell" use:reveal>
		<p class="cta-text">
			Et bien d'autres raisons encore... N'hésitez pas à me contacter pour en discuter ensemble.
		</p>
		<div class="doctolib-container">
			<DoctolibButton />
		</div>
	</section>
</main>

<style>
	/* --- En-tête --- */
	.hero-header {
		text-align: center;
		max-width: 52rem;
		padding-bottom: clamp(2rem, 5vw, 4rem);
	}

	.hero-title {
		font-size: clamp(2.4rem, 6vw, 4.2rem);
		font-weight: 500;
		margin-bottom: 1.5rem;
	}

	.hero-subtitle {
		font-size: 1.05rem;
		line-height: 1.9;
		max-width: 40rem;
		margin: 0 auto;
	}

	/* --- Dérive perpétuelle des motifs --- */
	.reasons-drift {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding: 1rem 0;
	}

	.marquee {
		overflow: hidden;
		width: 100%;
		-webkit-mask-image: linear-gradient(
			90deg,
			transparent,
			black 12%,
			black 88%,
			transparent
		);
		mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: drift var(--drift-duration) linear infinite;
	}

	.track-reverse {
		animation-direction: reverse;
	}

	/* Le survol suspend la dérive, pour lire tranquillement */
	.marquee:hover .marquee-track {
		animation-play-state: paused;
	}

	@keyframes drift {
		to {
			transform: translateX(-50%);
		}
	}

	.reason-chip {
		white-space: nowrap;
		margin-right: 1.1rem;
		padding: 0.8rem 1.7rem;
		border-radius: 999px;
		border: 1px solid var(--line);
		background-color: rgba(255, 255, 255, 0.6);
		color: var(--ink-soft);
		font-size: 0.95rem;
		font-weight: 500;
		backdrop-filter: blur(3px);
	}

	.chip-alt {
		background-color: var(--sage-tint);
		border-color: transparent;
		color: var(--ink);
	}

	/* Mouvement réduit : la liste se pose, complète et lisible */
	@media (prefers-reduced-motion: reduce) {
		.marquee {
			-webkit-mask-image: none;
			mask-image: none;
		}

		.marquee-track {
			animation: none;
			width: auto;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1rem;
			padding: 0 var(--gutter);
		}

		.reason-chip {
			white-space: normal;
			margin-right: 0;
			text-align: center;
		}

		.marquee-track li[aria-hidden='true'] {
			display: none;
		}
	}

	/* --- Fin de page --- */
	.cta-section {
		text-align: center;
	}

	.cta-text {
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.1rem, 2.4vw, 1.4rem);
		line-height: 1.8;
		color: var(--ink-soft);
		max-width: 40rem;
		margin: 0 auto;
	}

	.doctolib-container {
		display: flex;
		justify-content: center;
		margin-top: 2.5rem;
	}
</style>
