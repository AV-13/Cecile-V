<script lang="ts">
	import '../lib/styles/global.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PhoneBubbles from '$lib/components/PhoneBubbles.svelte';
	import AmbientBackground from '$lib/components/AmbientBackground.svelte';
	import Epigraph from '$lib/components/Epigraph.svelte';
</script>

<AmbientBackground />
<Header />
{#if $page.url.pathname !== '/'}
	<Epigraph />
{/if}
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
