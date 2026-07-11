<svelte:head>
	<title>Mentions légales — Cécile Vathonne, psychothérapeute à Paris 9e</title>
	<meta name="description" content="Mentions légales du site de Cécile Vathonne, psychothérapeute et psychologue clinicienne à Paris 9e." />
	<link rel="canonical" href="https://www.cecilevathonne.fr/legal-information" />
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
		padding: clamp(2.5rem, 6vw, 5rem) var(--gutter) 0 var(--gutter);
	}

	.container {
		max-width: 44rem;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		font-size: clamp(2rem, 4.5vw, 3rem);
		font-weight: 500;
		margin-bottom: clamp(2.5rem, 6vw, 4rem);
	}

	h1::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--sage);
		margin: 0 auto 1.6rem auto;
	}

	section {
		border-top: 1px solid var(--line);
		padding: 1.9rem 0;
	}

	section:last-of-type {
		border-bottom: 1px solid var(--line);
	}

	h2 {
		font-size: 1.4rem;
		font-weight: 550;
		margin-bottom: 0.9rem;
	}

	p {
		line-height: 1.9;
		margin-bottom: 1rem;
		color: var(--ink-soft);
	}

	p:last-child {
		margin-bottom: 0;
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
