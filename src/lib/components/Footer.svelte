<script lang="ts">
	import DoctolibButton from '$lib/components/DoctolibButton.svelte';
	import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from '$lib/constants';
	import './footer.css';

	const accessGroups = [
		{
			title: 'En métro',
			stops: [
				{ label: 'Pigalle', icons: [{ src: '/images/metro/two.svg', alt: 'Ligne 2' }] },
				{ label: 'Saint‑Georges', icons: [{ src: '/images/metro/twelve.svg', alt: 'Ligne 12' }] },
				{ label: 'Place de Clichy', icons: [{ src: '/images/metro/thirteen.svg', alt: 'Ligne 13' }] },
				{
					label: 'Saint‑Lazare',
					icons: [
						{ src: '/images/metro/three.svg', alt: 'Ligne 3' },
						{ src: '/images/metro/nine.svg', alt: 'Ligne 9' },
						{ src: '/images/metro/twelve.svg', alt: 'Ligne 12' },
						{ src: '/images/metro/fourteen.svg', alt: 'Ligne 14' }
					]
				}
			]
		},
		{
			title: 'En bus',
			stops: [
				{
					label: 'Pigalle',
					icons: [
						{ src: '/images/bus/forty.svg', alt: 'Bus 40' },
						{ src: '/images/bus/sixty-eight.svg', alt: 'Bus 68' },
						{ src: '/images/bus/seventy-four.svg', alt: 'Bus 74' }
					]
				},
				{ label: 'Gare du Nord', icons: [{ src: '/images/bus/sixty-two.svg', alt: 'Bus 62' }] }
			]
		}
	];
</script>

<footer class="footer-container">
	<div class="footer-inner">
		<div class="contact">
			<h3 class="footer-title">Contact</h3>
			<span class="information">
				<img class="footer-icon" src="/images/icons/work.svg" alt="Travail : " />
				<span>Cabinet de psychothérapie et psychanalyse</span>
			</span>
			<span class="information">
				<img class="footer-icon" src="/images/icons/localisation.svg" alt="Localisation : " />
				<span>{ADDRESS}</span>
			</span>
			<span class="information">
				<img
					class="footer-icon"
					src="/images/icons/telephone-empty.svg"
					alt="Numéro de téléphone : "
				/>
				<span><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></span>
			</span>
			<span class="information">
				<img class="footer-icon" src="/images/icons/enveloppe-empty.svg" alt="Mail : " />
				<span>{EMAIL}</span>
			</span>
			<span class="information footer-doctolib">
				<DoctolibButton />
			</span>
		</div>

		<div class="access">
			<h3 class="footer-title">Accès en transports</h3>
			<div class="access__container">
				{#each accessGroups as group}
					<div class="access__group">
						<h3 class="access__title">{group.title}</h3>
						<ul class="access__list">
							{#each group.stops as stop}
								<li class="access__item">
									<span class="access__label">{stop.label}</span>
									{#each stop.icons as icon}
										<img class="access__icon" src={icon.src} alt={icon.alt} />
									{/each}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div class="localisation">
			<h3 class="footer-title">Localisation</h3>
			<div class="map-container">
				<iframe
					title="Google Maps - Cécile Vathonne"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.8691732661623!2d2.3312595764305084!3d48.8797704992016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4892a290e1%3A0xdfe08dc2186a8332!2s33%20Rue%20Jean-Baptiste%20Pigalle%2C%2075009%20Paris!5e0!3m2!1sfr!2sfr!4v1745228456346!5m2!1sfr!2sfr"
					width="600"
					height="450"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>
</footer>

<div class="last-footer-container">
	<a href="/data-protection">Protection des données</a>
	<a href="/legal-information">Mentions légales</a>
</div>
