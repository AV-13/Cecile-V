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
		background-color: #edf3f6;
		color: #053f5f;
		min-height: 100vh;
		padding: 2rem 1rem;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(5, 63, 95, 0.1);
	}

	h1 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 2rem;
		color: #053f5f;
		font-weight: 800;
	}

	section {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #053f5f;
		font-weight: 700;
		border-bottom: 2px solid #ffec2d;
		padding-bottom: 0.5rem;
		width: fit-content;
	}

	p {
		line-height: 1.8;
		margin-bottom: 1rem;
		text-align: justify;
	}

	a {
		color: #053f5f;
		text-decoration: underline;
		font-weight: 600;
	}

	a:hover {
		color: #107aca;
	}

	/* Responsive */
	@media (min-width: 640px) {
		main {
			padding: 3rem 2rem;
		}

		.container {
			padding: 3rem 4rem;
		}

		h1 {
			font-size: 2.5rem;
			margin-bottom: 3rem;
		}

		h2 {
			font-size: 1.75rem;
		}
	}

	@media (min-width: 1024px) {
		main {
			padding: 4rem 2rem;
		}

		h1 {
			font-size: 3rem;
		}
	}
</style>
