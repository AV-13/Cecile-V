<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<div class="notes-wrapper">
	<hr class="notes-rule" />
	<div class="notes-container">
		<div class="note" use:reveal>
			<h3>Consultation par téléphone</h3>
			<p>
				Si vous n'avez pas la possibilité de venir sur place ou si vous habitez loin de Paris, vous avez la possibilité de commencer une psychothérapie par téléphone. N'hésitez pas à me contacter pour en discuter.
			</p>
		</div>

		<div class="note" use:reveal={{ delay: 0.15 }}>
			<h3>Service d'Écoute Téléphonique d'Urgence (SÉTU)</h3>
			<p>
				Pour répondre aux urgences, il existe un service d'appel téléphonique accessible 24h/24 et 7j/7. Participant au SÉTU depuis quelques années, je suis formée à écouter et recevoir toute personne en urgence.
			</p>
			<p>
				<strong>En cas d'urgence :</strong><br />
				<strong>Me contacter : </strong><a href="tel:+33762802577">07 62 80 25 77</a><br />
				<strong>SÉTU : </strong><a href="tel:+33145268130">01 45 26 81 30</a>
				<p>
				<a href="https://www.rphweb.fr/service-decoute-telephonique-durgence-setu/" target="_blank" rel="noopener">
					<span class="link-text">Lien vers le site</span>
					<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
					</svg>
				</a>
				</p>
		</div>
	</div>
</div>


<style>
	.notes-wrapper {
		padding: 0 var(--gutter);
		max-width: var(--content-max);
		margin: var(--space-section) auto 0 auto;
	}

	.notes-rule {
		border: none;
		border-top: 1px solid var(--line);
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.notes-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.75rem;
	}

	.note h3 {
		font-size: 1.35rem;
		font-weight: 550;
		line-height: 1.35;
		color: var(--ink);
		margin-bottom: 1.1rem;
		padding-bottom: 0.7rem;
		position: relative;
	}

	.note h3::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 36px;
		height: 1.5px;
		background-color: var(--sage);
	}

	.note p {
		margin: 0 0 0.8rem 0;
		font-size: 0.97rem;
		line-height: 1.8;
		color: var(--ink-soft);
		max-width: 34rem;
	}

	.note p:last-child {
		margin-bottom: 0;
	}

	.note a {
		color: var(--ink);
		text-decoration: underline;
		text-decoration-color: var(--sage);
		text-decoration-thickness: 1.5px;
		text-underline-offset: 4px;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 5px;
		flex-wrap: wrap;
		transition: color 0.3s ease;
	}

	.note a:hover {
		color: var(--sage-deep);
	}

	.link-text {
		font-size: 0.88rem;
		display: inline-block;
	}

	.external-icon {
		width: 12px;
		height: 12px;
		fill: currentColor;
	}

	/* Deux colonnes séparées d'un filet vertical */
	@media (min-width: 900px) {
		.notes-container {
			grid-template-columns: 1fr 1fr;
			gap: 0;
		}

		.note {
			padding-right: clamp(2rem, 4vw, 4rem);
		}

		.note + .note {
			border-left: 1px solid var(--line);
			padding-right: 0;
			padding-left: clamp(2rem, 4vw, 4rem);
		}
	}
</style>
