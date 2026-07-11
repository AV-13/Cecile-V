import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below for more info
			pages: 'build',
			assets: 'build',
			// 404.html : GitHub Pages sert les pages prérendues (SEO) et
			// ce fichier pour les routes inconnues — index.html ne doit
			// jamais être écrasé par la coquille SPA vide.
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			crawl: true,
			entries: ['/', '/about-me', '/why-consult', '/psychoanalysis', '/network', '/data-protection', '/legal-information', '/article']
		}
	}
};

export default config;
