<script lang="ts">
	/** Balises SEO par page : title, description, canonical, Open Graph, Twitter Card. */
	export let title: string;
	export let description: string;
	/** Chemin de la page, avec le / initial (ex. '/about-me') */
	export let path: string;
	export let image = '/images/og-image.jpg';

	const SITE_URL = 'https://www.cecilevathonne.fr';

	$: canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
	$: imageUrl = `${SITE_URL}${image}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Cécile Vathonne — Psychothérapeute" />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
