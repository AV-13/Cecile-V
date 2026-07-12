<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import '$lib/styles/legal.css';
</script>

<Seo
	title="Mentions légales - Cécile Vathonne"
	description="Mentions légales du site de Cécile Vathonne, psychothérapeute et psychologue clinicienne à Paris 9e."
	path="/legal-information"
/>

<main class="legal-page">
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
