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
