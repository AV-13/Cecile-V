<script lang="ts">
	import PsychologistCard from '$lib/components/PsychologistCard.svelte';
	import CurveDivider from '$lib/components/CurveDivider.svelte';

	interface Psychologist {
		name: string;
		address: string;
		phone: string;
		phone2?: string;
		email: string;
		website?: string;
	}

	let searchQuery = '';

	function filterPsychologists(psychologists: Psychologist[], query: string): Psychologist[] {
		if (!query.trim()) return psychologists;

		const lowerQuery = query.toLowerCase().trim();
		return psychologists.filter(p =>
			p.name.toLowerCase().includes(lowerQuery) ||
			p.address.toLowerCase().includes(lowerQuery) ||
			p.phone.includes(lowerQuery) ||
			(p.phone2 && p.phone2.includes(lowerQuery)) ||
			p.email.toLowerCase().includes(lowerQuery)
		);
	}

	const parisContacts: Psychologist[] = [
		{
			name: 'Laure BAUDIMENT',
			address: '14 rue de Birague – 75004 Paris',
			phone: '06 03 65 16 39',
			email: 'laureb@alphablend.fr',
			website: 'https://www.baudimentpsy.fr'
		},
		{
			name: 'Nazyk FAUGERAS',
			address: "8 rue de l'Isly – 75008 Paris",
			phone: '06 15 30 40 40',
			email: 'faugeras.na@gmail.com',
			website: 'https://www.nazykfaugeras.fr'
		},
		{
			name: 'Édith de AMORIM',
			address: '24 avenue Trudaine – 75009 Paris',
			phone: '06 82 91 37 91',
			email: 'edith.de-amorim@orange.fr'
		},
		{
			name: 'Fernando de AMORIM',
			address: '1 rue Lentonnet – 75009 Paris',
			phone: '06 89 15 61 84',
			phone2: '01 47 70 56 02',
			email: 'f.dea@wanadoo.fr',
			website: 'https://www.fernandodeamorim.com'
		},
		{
			name: 'Élodie CHOPARD',
			address: '10 rue Alfred Stevens – 75009 Paris',
			phone: '06 87 22 53 40',
			email: 'elodie.chopard@gmail.com',
			website: 'https://www.souffrance-psychologique-paris.com'
		},
		{
			name: 'Julien FAUGERAS',
			address: '58 rue de Maubeuge – 75009 Paris',
			phone: '06 03 15 94 12',
			phone2: '01 44 79 00 01',
			email: 'jfaugeras@gmail.com',
			website: 'https://www.psychanalyseparisfaugeras.fr'
		},
		{
			name: 'Erwann GOUADON',
			address: '33 rue Jean-Baptiste Pigalle – 75009 Paris',
			phone: '06 85 19 20 74',
			email: 'gouadon.erwann@hotmail.fr',
			website: 'https://www.erwanngouadon.fr/'
		},
		{
			name: 'Magali MESLEM',
			address: '14 passage Briare – 75009 Paris',
			phone: '06 45 94 38 35',
			email: 'magalimeslem@gmail.com',
			website: 'https://www.magalimeslem.fr/'
		},
		{
			name: 'Marine BONTEMPS',
			address: '93 Rue de Maubeuge – 75010 Paris',
			phone: '06 32 24 89 50',
			email: 'marine.l.bontemps@gmail.com',
			website: 'https://www.marinebontemps.fr'
		},
		{
			name: 'Sara DANGRÉAUX',
			address: '93 Rue de Maubeuge – 75010 Paris',
			phone: '06 74 14 57 00',
			email: 'saradangreaux@gmail.com',
			website: 'https://www.saradangreaux.fr'
		},
		{
			name: 'Jean-Baptiste LEGOUIS',
			address: '8 rue de Belzunce – 75010 Paris',
			phone: '06 11 89 51 81',
			phone2: '01 42 23 32 08',
			email: 'jblegouis@yahoo.fr'
		},
		{
			name: 'Sabrina BERDEDOUCH',
			address: '4 Cité Joly – 75011 Paris',
			phone: '06 52 76 94 73',
			email: 'sabrinaberdedouch@gmail.com',
			website: 'https://www.sabrinaberdedouch.fr'
		},
		{
			name: 'Diane MERAKEB',
			address: '26 rue Daubigny – 75017 Paris',
			phone: '06 26 90 13 67',
			email: 'diane.merakeb@gmail.com',
			website: 'https://www.diane-merakeb.fr'
		},
		{
			name: 'Chloé BLACHÈRE',
			address: '71 bis rue Damrémont – 75018 Paris',
			phone: '06 98 06 77 15',
			email: 'chlo.blachere@gmail.com',
			website: 'https://www.chloeblachere.com'
		},
		{
			name: 'Jeanne CHAYET',
			address: '10 rue Charles Nodier – 75018 Paris',
			phone: '06 26 54 11 60',
			email: 'jeanne.chayet@hotmail.fr',
			website: 'http://jeannechayet.fr'
		},
		{
			name: 'Sophie BOURGUIGNON',
			address: '8 rue de Buzenval – 75020 Paris',
			phone: '06 21 36 83 89',
			email: 'bourguignonsophie8@gmail.com',
			website: 'https://sophiebourguignon.fr/'
		},
		{
			name: 'Chloé Chantre',
			address: '33 Rue Jean Baptiste Pigalle, 75009 PARIS',
			phone: '06 14 51 00 44',
			email: 'chloe.chantre@hotmail.fr',
			website: 'https://www.cchantre-psychotherapeute.com/'
		}
	];

	const ileDeFramceContacts = {
		'Seine et Marne (77)': [
			{
				name: 'Laure BAUDIMENT',
				address: '6 Rue Vacheresse – 77400 Lagny-sur-Marne',
				phone: '06 03 65 16 39',
				email: 'laureb@alphablend.fr',
				website: 'https://www.baudimentpsy.fr'
			}
		],
		'Essonne (91)': [
			{
				name: 'Dr Lucille MIHOUBI',
				address: '25 rue des Trembles – 91390 Morsang-sur-Orge',
				phone: '07 83 82 03 79',
				email: 'lucille.mihoubi@gmail.com',
				website: 'https://www.lucillemihoubi.fr'
			}
		],
		'Hauts-de-Seine (92)': [
			{
				name: 'Dr Ouarda FERLICOT',
				address: '44 avenue Pasteur - 92400 Courbevoie',
				phone: '06 22 79 39 34',
				email: 'ouardanm@gmail.com',
				website: 'https://www.ouardaferlicot.fr'
			}
		],
		'Val-de-Marne (94)': [
			{
				name: 'Ranida BONAMY',
				address: '125 avenue Pierre Sémard – 94210 Saint-Maur-des-Fossés',
				phone: '06 17 87 49 71',
				email: 'ranidabonamy@gmail.com',
				website: 'https://www.ranidabonamy-psychotherapeute.fr'
			},
			{
				name: 'Paul BONAMY',
				address: '125 avenue Pierre Sémard – 94210 Saint-Maur-des-Fossés',
				phone: '06 85 98 55 22',
				email: 'paul.mh.bonamy@gmail.com',
				website: 'https://paulbonamy-psychotherapeute.fr/'
			}
		],
		"Val-d'Oise (95)": [
			{
				name: 'Léa-Lou RAKOTOASITERA',
				address: '25 rue du Clos de Paris – 95170 Deuil-La-Barre',
				phone: '06 43 94 22 19',
				email: 'lealou.rakotoasitera@gmail.com',
				website: 'https://www.lealourakotoasitera.fr'
			},
			{
				name: 'Aubène TRAORÉ',
				address: '13 rue du Crochet – 95170 Deuil-la-Barre',
				phone: '06 58 74 10 39',
				email: 'aubenetraore@gmail.com',
				website: 'https://www.aubenetraore.fr/'
			}
		]
	};

	const horsIleDeFrance: Psychologist[] = [
		{
			name: 'Carmen BLANC',
			address: '7 rue Eric Tabarly, 56700 Hennebont (Bretagne)',
			phone: '06 23 89 75 45',
			email: 'carmenblanc.psychotherapeute@gmail.com',
			website: 'https://www.psychotherapiemorbihan.fr/'
		}
	];
</script>

<svelte:head>
	<title>Annuaire - Cécile Vathonne</title>
	<meta name="description" content="Annuaire des psychologues partenaires de Cécile Vathonne." />
</svelte:head>

<main class="network-container">
	<!-- L'annuaire s'ouvre sur une bande immersive : l'intro et la recherche -->
	<CurveDivider fill="var(--forest)" />
	<section class="directory-hero">
		<p class="directory-intro">
			Voici la liste des psychothérapeutes et psychanalystes de ma confiance, qui exercent à Paris, en Ile-de-France ou au-delà. Tous ces collègues pratiquent la Consultation Publique de Psychanalyse (CPP).
		</p>

		<div class="search-container">
			<div class="search-wrapper">
				<svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Rechercher par nom, code postal, arrondissement..."
					class="search-input"
				/>
				{#if searchQuery}
					<button class="clear-button" on:click={() => searchQuery = ''} aria-label="Effacer la recherche">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
						</svg>
					</button>
				{/if}
			</div>
			{#if searchQuery}
				<div class="search-results-count" aria-live="polite">
					{filterPsychologists([...parisContacts, ...Object.values(ileDeFramceContacts).flat(), ...horsIleDeFrance], searchQuery).length} résultat(s) trouvé(s)
				</div>
			{/if}
		</div>
	</section>
	<CurveDivider fill="var(--forest)" flip />

	<section class="directory">
		<!-- Paris -->
		{#if filterPsychologists(parisContacts, searchQuery).length > 0}
			<div class="section">
				<h2 class="section-title"><span>Consultations à Paris (75)</span></h2>
				<ul class="psychologist-list">
					{#each filterPsychologists(parisContacts, searchQuery) as psychologist, i}
						<PsychologistCard {...psychologist} delay={(i % 3) * 0.08} />
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Île-de-France -->
		{#if Object.entries(ileDeFramceContacts).some(([_, contacts]) => filterPsychologists(contacts, searchQuery).length > 0)}
			<div class="section">
				<h2 class="section-title"><span>Consultations en Île-de-France</span></h2>
				{#each Object.entries(ileDeFramceContacts) as [region, contacts]}
					{@const filteredContacts = filterPsychologists(contacts, searchQuery)}
					{#if filteredContacts.length > 0}
						<h3 class="region-title">{region}</h3>
						<ul class="psychologist-list">
							{#each filteredContacts as psychologist, i}
								<PsychologistCard {...psychologist} delay={(i % 3) * 0.08} />
							{/each}
						</ul>
					{/if}
				{/each}
			</div>
		{/if}

		<!-- Hors Île-de-France -->
		{#if filterPsychologists(horsIleDeFrance, searchQuery).length > 0}
			<div class="section">
				<h2 class="section-title"><span>Consultations hors d'Île-de-France</span></h2>
				<ul class="psychologist-list">
					{#each filterPsychologists(horsIleDeFrance, searchQuery) as psychologist, i}
						<PsychologistCard {...psychologist} delay={(i % 3) * 0.08} />
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Message si aucun résultat -->
		{#if searchQuery && filterPsychologists([...parisContacts, ...Object.values(ileDeFramceContacts).flat(), ...horsIleDeFrance], searchQuery).length === 0}
			<div class="no-results">
				<p>Aucun psychologue ne correspond à votre recherche.</p>
				<button class="btn" on:click={() => searchQuery = ''}>
					Réinitialiser la recherche
				</button>
			</div>
		{/if}
	</section>
</main>

<style>
	.network-container {
		min-height: 60vh;
		margin-top: clamp(1.5rem, 4vw, 3rem);
	}

	/* --- Bande immersive : intro + recherche --- */
	.directory-hero {
		background-color: var(--forest);
		padding: clamp(1.5rem, 4vw, 3rem) var(--gutter) clamp(2rem, 5vw, 3.5rem) var(--gutter);
	}

	.directory-intro {
		font-family: var(--font-display);
		font-style: italic;
		font-size: clamp(1.05rem, 2.2vw, 1.35rem);
		line-height: 1.85;
		color: var(--paper);
		text-align: center;
		max-width: 46rem;
		margin: 0 auto 2.5rem auto;
	}

	.directory-intro::before {
		content: '';
		display: block;
		width: 44px;
		height: 1.5px;
		background-color: var(--paper);
		opacity: 0.7;
		margin: 0 auto 1.5rem auto;
	}

	.search-container {
		max-width: 620px;
		margin: 0 auto;
	}

	.search-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		background-color: rgba(245, 242, 236, 0.1);
		border: 1px solid rgba(245, 242, 236, 0.45);
		border-radius: 999px;
		padding: 0.85rem 1.6rem;
		color: rgba(245, 242, 236, 0.75);
		backdrop-filter: blur(4px);
		transition:
			border-color 0.35s ease,
			background-color 0.35s ease,
			box-shadow 0.35s ease;
	}

	.search-wrapper:focus-within {
		border-color: var(--paper);
		background-color: rgba(245, 242, 236, 0.16);
		box-shadow: 0 18px 36px -24px rgba(15, 22, 25, 0.8);
	}

	.search-icon {
		flex-shrink: 0;
		margin-right: 0.75rem;
		opacity: 0.75;
	}

	.search-input {
		flex: 1;
		border: none;
		outline: none;
		font-size: 16px;
		color: var(--paper);
		background: transparent;
		min-width: 0;
	}

	.search-input::placeholder {
		color: rgba(245, 242, 236, 0.55);
	}

	.clear-button {
		flex-shrink: 0;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		color: var(--paper);
		transition: background-color 0.25s ease;
	}

	.clear-button:hover {
		background-color: rgba(245, 242, 236, 0.15);
	}

	.search-results-count {
		text-align: center;
		margin-top: 1.1rem;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		color: rgba(245, 242, 236, 0.85);
	}

	/* --- L'annuaire --- */
	.directory {
		max-width: 1400px;
		margin: 0 auto;
		padding: clamp(2.5rem, 6vw, 4.5rem) var(--gutter);
	}

	.section {
		margin-bottom: clamp(3.5rem, 7vw, 5.5rem);
	}

	.section:last-child {
		margin-bottom: 0;
	}

	/* Titre de section éditorial : le filet court jusqu'au bord */
	.section-title {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		font-size: clamp(1.5rem, 3.2vw, 2.1rem);
		font-weight: 550;
		color: var(--ink);
		margin-bottom: 2.25rem;
	}

	.section-title span {
		flex-shrink: 1;
		min-width: 0;
	}

	.section-title::after {
		content: '';
		height: 1px;
		flex: 1;
		min-width: 2.5rem;
		background-color: var(--line);
	}

	.region-title {
		font-family: var(--font-body);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--sage-deep);
		margin: 2.5rem 0 1.5rem 0;
	}

	.psychologist-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.75rem;
		padding: 0;
		list-style: none;
	}

	/* --- Aucun résultat --- */
	.no-results {
		text-align: center;
		padding: 3rem 2rem;
		color: var(--ink);
	}

	.no-results p {
		font-family: var(--font-display);
		font-style: italic;
		font-size: 1.25rem;
		margin-bottom: 1.75rem;
		color: var(--ink-soft);
	}

	/* Tablettes */
	@media (min-width: 640px) {
		.psychologist-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Grands écrans */
	@media (min-width: 1100px) {
		.psychologist-list {
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
		}
	}

	@media (min-width: 1700px) {
		.psychologist-list {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
