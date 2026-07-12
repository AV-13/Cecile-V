<script lang="ts">
	import { onMount } from 'svelte';

	/** Carrousel d'ambiance : fondu croisé très lent entre images plein cadre. */
	export let images: { src: string; alt: string }[] = [];
	/** Durée d'affichage de chaque image, en millisecondes */
	export let interval = 7000;
	/** Suspend le défilement (bouton pause, mouvement réduit) */
	export let paused = false;

	let current = 0;
	let mounted = false;
	let timer: ReturnType<typeof setInterval> | undefined;

	// Chargement paresseux : seules l'image courante et la suivante reçoivent
	// leur `src` ; les <img> restent tous montés pour préserver le fondu croisé.
	let loaded = new Set<number>([0, 1]);

	function advance() {
		current = (current + 1) % images.length;
		loaded.add((current + 1) % images.length);
		loaded = loaded; // déclenche la réactivité (mutation de Set)
	}

	function syncTimer(active: boolean) {
		clearInterval(timer);
		timer = active ? setInterval(advance, interval) : undefined;
	}

	// L'intervalle ne tourne que lorsque le carrousel défile réellement
	$: if (mounted) syncTimer(!paused && images.length > 1);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			paused = true;
		}
		mounted = true;
		return () => clearInterval(timer);
	});
</script>

<div class="atmosphere" class:paused>
	{#each images as img, i}
		<img
			src={loaded.has(i) ? img.src : undefined}
			alt={img.alt}
			class:active={i === current}
			loading={i === 0 ? 'eager' : 'lazy'}
			draggable="false"
		/>
	{/each}
</div>

<style>
	.atmosphere {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}

	.atmosphere img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 2.4s ease-in-out;
	}

	.atmosphere img.active {
		opacity: 1;
		animation: atmosphere-drift 16s ease-in-out infinite alternate;
	}

	.paused img.active {
		animation-play-state: paused;
	}

	@keyframes atmosphere-drift {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.08);
		}
	}
</style>
