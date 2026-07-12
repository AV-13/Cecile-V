<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import '$lib/styles/legal.css';
</script>

<Seo
	title="Politique de confidentialité - Cécile Vathonne"
	description="Politique de confidentialité et protection des données personnelles du cabinet de Cécile Vathonne, psychothérapeute à Paris 9e."
	path="/data-protection"
/>

<main class="legal-page">
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
