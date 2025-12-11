<svelte:head>
	<title>Politique de confidentialité - Cécile Vathonne</title>
	<meta name="description" content="Politique de confidentialité et protection des données." />
</svelte:head>

<main>
	<div class="container">
		<h1>Protection des données</h1>

		<section>
			<p class="intro">
				Votre vie privée est importante pour nous. Cette page décrit comment nous recueillons et
				traitons vos données personnelles.
			</p>
		</section>

		<section>
			<h2>Collecte de données</h2>
			<p>
				Les données personnelles que vous nous confiez lors de votre consultation sont utilisées
				uniquement pour les besoins de votre suivi thérapeutique et de votre facturation.
			</p>
		</section>

		<section>
			<h2>Confidentialité</h2>
			<p>
				Toutes les informations échangées lors de vos consultations sont couvertes par le secret
				professionnel. Elles ne sont jamais partagées avec des tiers sans votre consentement
				explicite, sauf obligation légale.
			</p>
		</section>

		<section>
			<h2>Stockage sécurisé</h2>
			<p>
				Vos données sont conservées de façon sécurisée et conforme aux réglementations en vigueur
				(RGPD).
			</p>
		</section>

		<section>
			<h2>Droits</h2>
			<p>
				Vous disposez du droit d'accès, de rectification, et de suppression de vos données
				personnelles. Pour exercer ces droits, veuillez nous contacter directement.
			</p>
		</section>

		<section class="contact-section">
			<p><strong>Contact :</strong> cecile.vathonne@gmail.com</p>
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

	.intro {
		font-size: 1.1rem;
		font-weight: 500;
	}

	.contact-section {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #b8cfda;
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
