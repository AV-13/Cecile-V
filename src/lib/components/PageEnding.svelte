<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';

	export let variant: 'solid' | 'outline-light' = 'solid';
</script>

<!-- Fin de page partagée : filet fin puis appel à la prise de rendez-vous -->
<div class="ending-container" use:reveal>
	<hr class="hairline" />
	<div class="doctolib-container">
		<DoctolibButton {variant} />
	</div>
</div>

<style>
	.ending-container {
		padding-bottom: clamp(1rem, 3vw, 2rem);
	}

	.doctolib-container {
		display: flex;
		justify-content: center;
		margin-top: clamp(2.5rem, 6vw, 4rem);
	}
</style>
