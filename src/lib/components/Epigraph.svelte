<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { EPIGRAPH_HTML } from '$lib/content';
</script>

<div class="epigraph-block">
	<p class="epigraph">{@html EPIGRAPH_HTML}</p>
	<div class="doctolib-container">
		<DoctolibButton />
	</div>
</div>

<style>
	.epigraph-block {
		max-width: 46rem;
		margin: clamp(1.5rem, 4vw, 3rem) auto 0 auto;
		padding: 0 var(--gutter);
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.epigraph {
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.05rem, 2.2vw, 1.3rem);
		line-height: 1.85;
		color: var(--ink-soft);
	}

	/* :global — le contenu injecté par {@html} n'est pas couvert par le scoping Svelte */
	.epigraph :global(strong) {
		font-weight: 600;
		color: var(--ink);
	}

	.epigraph::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--sage);
		margin: 0 auto 1.5rem auto;
	}

	.doctolib-container {
		display: flex;
		justify-content: center;
		margin-top: 1.75rem;
	}
</style>
