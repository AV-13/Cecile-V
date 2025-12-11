<script lang="ts">
	import PsychologistCard from '$lib/components/PsychologistCard.svelte';

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
				name: 'Lucille MIHOUBI',
				address: '25 rue des Trembles – 91390 Morsang-sur-Orge',
				phone: '07 83 82 03 79',
				email: 'lucille.mihoubi@gmail.com',
				website: 'https://www.lucillemihoubi.fr'
			}
		],
		'Hauts-de-Seine (92)': [
			{
				name: 'Ouarda FERLICOT',
				address: '72 rue Maurice Thorez – 92000 Nanterre',
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
	<section class="directory">
		<div class="blue-warning">
			Voici la liste des psychothérapeutes et psychanalystes de ma confiance, qui exercent à Paris, en Ile-de-France ou au-delà. Tous ces collègues pratiquent la Consultation Publique de Psychanalyse (CPP).
		</div>

		<!-- Barre de recherche -->
		<div class="search-container">
			<div class="search-wrapper">
				<svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="#053f5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Rechercher par nom, code postal, arrondissement..."
					class="search-input"
				/>
				{#if searchQuery}
					<button class="clear-button" on:click={() => searchQuery = ''}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 4L4 12M4 4l8 8" stroke="#053f5f" stroke-width="2" stroke-linecap="round"/>
						</svg>
					</button>
				{/if}
			</div>
			{#if searchQuery}
				<div class="search-results-count">
					{filterPsychologists([...parisContacts, ...Object.values(ileDeFramceContacts).flat(), ...horsIleDeFrance], searchQuery).length} résultat(s) trouvé(s)
				</div>
			{/if}
		</div>

		<!-- Paris -->
		{#if filterPsychologists(parisContacts, searchQuery).length > 0}
			<div class="section">
				<h2 class="section-title">Consultations à Paris (75)</h2>
				<ul class="psychologist-list">
					{#each filterPsychologists(parisContacts, searchQuery) as psychologist}
						<PsychologistCard {...psychologist} />
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Île-de-France -->
		{#if Object.entries(ileDeFramceContacts).some(([_, contacts]) => filterPsychologists(contacts, searchQuery).length > 0)}
			<div class="section">
				<h2 class="section-title">Consultations en Île-de-France</h2>
				{#each Object.entries(ileDeFramceContacts) as [region, contacts]}
					{@const filteredContacts = filterPsychologists(contacts, searchQuery)}
					{#if filteredContacts.length > 0}
						<h3 class="region-title">{region}</h3>
						<ul class="psychologist-list">
							{#each filteredContacts as psychologist}
								<PsychologistCard {...psychologist} />
							{/each}
						</ul>
					{/if}
				{/each}
			</div>
		{/if}

		<!-- Hors Île-de-France -->
		{#if filterPsychologists(horsIleDeFrance, searchQuery).length > 0}
			<div class="section">
				<h2 class="section-title">Consultations hors d'Île-de-France</h2>
				<ul class="psychologist-list">
					{#each filterPsychologists(horsIleDeFrance, searchQuery) as psychologist}
						<PsychologistCard {...psychologist} />
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Message si aucun résultat -->
		{#if searchQuery && filterPsychologists([...parisContacts, ...Object.values(ileDeFramceContacts).flat(), ...horsIleDeFrance], searchQuery).length === 0}
			<div class="no-results">
				<p>Aucun psychologue ne correspond à votre recherche.</p>
				<button class="clear-search-button" on:click={() => searchQuery = ''}>
					Réinitialiser la recherche
				</button>
			</div>
		{/if}
	</section>
</main>

<style>
	.blue-warning {
			text-align: center;
			max-width: 600px;
			margin: 2rem auto;
			line-height: 1.6;
			background-color: #EDF3F6;
			padding: 1rem 2rem;
			border-radius: 9999px;
			font-size: 16px;
	}
	.network-container {
		min-height: 60vh;
		background: #fff
	}

	.directory {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	/* Barre de recherche */
	.search-container {
		max-width: 700px;
		margin: 2rem auto;
	}

	.search-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		background-color: white;
		border: 2px solid #b8cfda;
		border-radius: 50px;
		padding: 0.75rem 1.5rem;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(5, 63, 95, 0.08);
	}

	.search-wrapper:focus-within {
		border-color: #053f5f;
		box-shadow: 0 4px 16px rgba(5, 63, 95, 0.15);
		transform: translateY(-2px);
	}

	.search-icon {
		flex-shrink: 0;
		margin-right: 0.75rem;
	}

	.search-input {
		flex: 1;
		border: none;
		outline: none;
		font-size: 16px;
		color: #053f5f;
		background: transparent;
	}

	.search-input::placeholder {
		color: #b8cfda;
	}

	.clear-button {
		flex-shrink: 0;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background-color 0.2s ease;
	}

	.clear-button:hover {
		background-color: #f0f0f0;
	}

	.search-results-count {
		text-align: center;
		margin-top: 1rem;
		font-size: 14px;
		color: #053f5f;
		font-weight: 600;
	}

	/* Message aucun résultat */
	.no-results {
		text-align: center;
		padding: 3rem 2rem;
		color: #053f5f;
	}

	.no-results p {
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
		font-weight: 600;
	}

	.clear-search-button {
		background-color: #053f5f;
		color: white;
		border: none;
		padding: 0.75rem 2rem;
		border-radius: 50px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.clear-search-button:hover {
		background-color: #107aca;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(5, 63, 95, 0.2);
	}

	.main-title {
		text-align: center;
		font-size: 2.5rem;
		color: #053f5f;
		margin-bottom: 3rem;
		padding-bottom: 1rem;
		border-bottom: 3px solid #dbdd82;
		font-weight: 800;
	}

	.section {
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: 1.8rem;
		color: #053f5f;
		margin-bottom: 2rem;
		padding-left: 1rem;
		border-left: 5px solid #b8cfda;
		font-weight: 700;
	}

	.region-title {
		font-size: 1.3rem;
		color: #0a5f8f;
		margin: 2rem 0 1.5rem 0;
		padding-left: 2rem;
		font-weight: 600;
		position: relative;
	}

	.region-title::before {
		content: '›';
		position: absolute;
		left: 0.5rem;
		color: #dbdd82;
		font-size: 1.5rem;
		font-weight: bold;
	}

	.psychologist-list {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		padding: 0;
		list-style: none;
		justify-content: center;
	}

	@media (min-width: 640px) {
		.main-title {
			font-size: 3rem;
		}

		.directory {
			padding: 3rem 2rem;
		}
	}

	@media (min-width: 1024px) {
		.psychologist-list {
			justify-content: flex-start;
		}
	}
</style>
