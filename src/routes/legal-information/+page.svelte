<svelte:head>
	<title>Mentions légales - Cécile Vathonne</title>
	<meta name="description" content="Mentions légales du site de Cécile Vathonne, psychothérapeute." />
</svelte:head>

<main>
	<div class="container">
		<h1>Mentions légales</h1>

		<section>
			<h2>Éditeur du site</h2>
			<p>
				<strong>Cécile Vathonne</strong><br />
				Psychothérapeute - Psychologue clinicienne<br />
				33 Rue Jean-Baptiste Pigalle<br />
				75009 Paris<br />
				Téléphone : 07 62 80 25 77<br />
				Email : cecile.vathonne@gmail.com<br />
				RPPS : 10009020818
			</p>
		</section>

		<section>
			<h2>Hébergement</h2>
			<p>
				Ce site est hébergé sur GitHub Pages.<br />
				Adresse : github.com
			</p>
		</section>

		<section>
			<h2>Responsabilité</h2>
			<p>
				L'éditeur du site s'efforce de garantir l'exactitude et la mise à jour des informations
				publiées, mais ne peut en aucun cas être tenu responsable des erreurs, omissions ou
				utilisation inappropriée du contenu.
			</p>
		</section>

		<section>
			<h2>Propriété intellectuelle</h2>
			<p>
				Tous les contenus du site (textes, images, vidéos) sont la propriété exclusive de Cécile
				Vathonne ou utilisés avec autorisation. Toute reproduction, même partielle, sans
				consentement préalable est interdite.
			</p>
		</section>

		<section>
			<h2>Données personnelles</h2>
			<p>
				Pour toute question concernant le traitement de vos données personnelles, consultez notre
				<a href="/data-protection">politique de confidentialité</a>.
			</p>
		</section>

		<section>
			<h2>Liens externes</h2>
			<p>
				Le site peut contenir des liens vers d'autres sites. Cécile Vathonne n'est pas
				responsable du contenu de ces sites externes.
			</p>
		</section>
	</div>
</main>

<style>
	main {
		min-height: 60vh;
		padding: clamp(2rem, 6vw, 4rem) var(--gutter) 0 var(--gutter);
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: clamp(2rem, 5vw, 3.5rem);
		background-color: rgba(255, 255, 255, 0.6);
		border: 1px solid var(--line);
		border-radius: calc(var(--radius-soft) * 1.5);
		backdrop-filter: blur(4px);
	}

	h1 {
		text-align: center;
		font-size: clamp(1.9rem, 4.5vw, 2.8rem);
		font-weight: 500;
		margin-bottom: 2.5rem;
	}

	section {
		margin-bottom: 2.25rem;
	}

	h2 {
		font-size: 1.35rem;
		font-weight: 550;
		margin-bottom: 0.9rem;
		padding-bottom: 0.5rem;
		width: fit-content;
		position: relative;
	}

	h2::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 36px;
		height: 1.5px;
		background-color: var(--sage);
	}

	p {
		line-height: 1.85;
		margin-bottom: 1rem;
		color: var(--ink-soft);
	}

	a {
		color: var(--ink);
		text-decoration: underline;
		text-decoration-color: var(--sage);
		text-underline-offset: 4px;
		font-weight: 600;
		transition: color 0.3s ease;
	}

	a:hover {
		color: var(--sage-deep);
	}
</style>
