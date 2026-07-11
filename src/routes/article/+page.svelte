<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { reveal } from '$lib/actions/reveal';

	const articleUrl =
		'https://www.santemagazine.fr/sante/maladies/maladies-mentales/phobies/cibophobie-comment-vaincre-la-peur-de-manger-1115064';
</script>

<Seo
	title="Articles — Cécile Vathonne, psychothérapeute à Paris"
	description="Articles de vulgarisation scientifique co-écrits par Cécile Vathonne, psychothérapeute à Paris : la cibophobie, ou comment vaincre la peur de manger (Santé Magazine)."
	path="/article"
/>

<main>
	<h1 class="sr-only">Articles de vulgarisation scientifique</h1>
	<div class="content section-shell">
		<p class="article-intro" use:reveal>
			Cécile Vathonne a collaboré à l'écriture de plusieurs articles de vulgarisation scientifique.
		</p>

		<!-- Aperçu de l'article (Santé Magazine interdit l'iframe : frame-ancestors 'self') -->
		<a
			class="article-preview"
			href={articleUrl}
			target="_blank"
			rel="noopener"
			use:reveal={{ delay: 0.15 }}
		>
			<div class="preview-visual">
				<div class="photo-veil preview-frame">
					<img
						src="/images/article-cibophobie-preview.jpg"
						alt="Illustration de l'article : la cibophobie, la peur de manger"
						loading="lazy"
					/>
				</div>
			</div>
			<div class="preview-text">
				<span class="preview-source">Santé Magazine</span>
				<h2 class="preview-title">
					Voici pourquoi certaines personnes paniquent à l'idée de manger...
				</h2>
				<span class="btn preview-btn" aria-hidden="true">
					Consulter l'article
					<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
						<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
					</svg>
				</span>
			</div>
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
		gap: clamp(2.5rem, 6vw, 4.5rem);
	}

	.article-intro {
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.15rem, 2.6vw, 1.5rem);
		line-height: 1.85;
		color: var(--ink);
		max-width: 42rem;
		text-align: center;
	}

	.article-intro::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--sage);
		margin: 0 auto 1.75rem auto;
	}

	/* --- Aperçu éditorial de l'article --- */
	.article-preview {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		width: 100%;
		max-width: 62rem;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		padding: clamp(2.25rem, 5vw, 3.5rem) 0;
	}

	.preview-visual {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.preview-frame {
		width: min(74vw, 320px);
		aspect-ratio: 4 / 5;
	}

	.preview-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: 32rem;
	}

	.preview-source {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.24em;
		text-transform: uppercase;
		color: var(--sage-deep);
		margin-bottom: 1.1rem;
	}

	.preview-title {
		font-size: clamp(1.5rem, 3.4vw, 2.1rem);
		font-weight: 550;
		line-height: 1.3;
		color: var(--ink);
		transition: color 0.35s ease;
	}

	.article-preview:hover .preview-title {
		color: var(--sage-deep);
	}

	.preview-btn {
		margin-top: 2rem;
	}

	.article-preview:hover .preview-btn {
		background-color: var(--sage-deep);
		transform: translateY(-2px);
		box-shadow: 0 12px 28px -14px rgba(47, 64, 71, 0.45);
	}

	.ending-container {
		padding-bottom: clamp(1rem, 3vw, 2rem);
	}

	.doctolib-container {
		display: flex;
		justify-content: center;
		margin-top: clamp(2.5rem, 6vw, 4rem);
	}

	/* Tablettes et plus : l'image à gauche, le texte à droite */
	@media (min-width: 820px) {
		.article-preview {
			flex-direction: row;
			justify-content: space-between;
			gap: clamp(2.5rem, 5vw, 4.5rem);
		}

		.preview-visual {
			flex: 0 0 auto;
			width: auto;
		}

		.preview-frame {
			width: min(26vw, 300px);
		}

		.preview-text {
			flex: 1;
			align-items: flex-start;
			text-align: left;
			max-width: none;
		}
	}
</style>
