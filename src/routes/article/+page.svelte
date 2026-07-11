<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<svelte:head>
	<title>Articles - Cécile Vathonne</title>
	<meta name="description" content="Articles de vulgarisation scientifique auxquels Cécile Vathonne a collaboré." />
</svelte:head>

<main>
	<div class="content section-shell" use:reveal>
		<p class="article-intro">
			Cécile Vathonne a collaboré à l'écriture de plusieurs articles de vulgarisation scientifique.
		</p>
		<a
			href="https://www.santemagazine.fr/sante/maladies/maladies-mentales/phobies/cibophobie-comment-vaincre-la-peur-de-manger-1115064"
			target="_blank"
			rel="noopener"
			class="btn"
		>
			Consulter l'article
			<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
				<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
			</svg>
		</a>
	</div>

	<div class="ending-container" use:reveal>
		<hr class="hairline" />
		<div class="doctolib-container">
			<DoctolibButton />
		</div>
	</div>
</main>

<style>
	main {
		min-height: 50vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		text-align: center;
	}

	.article-intro {
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.15rem, 2.6vw, 1.5rem);
		line-height: 1.85;
		color: var(--ink);
		max-width: 42rem;
	}

	.article-intro::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--sage);
		margin: 0 auto 1.75rem auto;
	}

	.ending-container {
		padding-bottom: clamp(1rem, 3vw, 2rem);
	}

	.doctolib-container {
		display: flex;
		justify-content: center;
		margin-top: clamp(2.5rem, 6vw, 4rem);
	}
</style>
