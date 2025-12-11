<script lang="ts">
	import '../lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="background-image"></div>
<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}

	.background-image {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		background: url('/images/arbre2.jpg') center center / cover no-repeat;
		filter: blur(1px) brightness(0.7);
		pointer-events: none;
	}

	main {
		position: relative;
		z-index: 1;
	}
</style>
