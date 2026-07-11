<script lang="ts">
	import '../lib/styles/global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PhoneBubbles from '$lib/components/PhoneBubbles.svelte';
	import AmbientBackground from '$lib/components/AmbientBackground.svelte';
</script>

<AmbientBackground />
<Header />
<main>
	<slot />
</main>
<PhoneBubbles />
<Footer />

<style>
	main {
		position: relative;
		z-index: 1;
	}
</style>
