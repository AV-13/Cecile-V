<script lang="ts">
	/** Transition courbe entre deux sections, à la manière d'une respiration. */
	export let fill = 'var(--forest)';
	export let flip = false;
</script>

<svg
	class="curve"
	class:flip
	viewBox="0 0 1440 90"
	preserveAspectRatio="none"
	aria-hidden="true"
>
	<path d="M0,90 C360,8 1080,8 1440,90 L1440,92 L0,92 Z" style="fill: {fill}" />
</svg>

<style>
	.curve {
		display: block;
		width: 100%;
		height: clamp(34px, 7vw, 90px);
		margin-bottom: -1px;
	}

	.flip {
		transform: scaleY(-1);
		margin-bottom: 0;
		margin-top: -1px;
	}
</style>
