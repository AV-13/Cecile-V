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

	.intro {
		font-family: var(--font-display);
		font-style: italic;
		font-size: 1.1rem;
		color: var(--ink);
	}

	.contact-section {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--line);
	}
</style>
