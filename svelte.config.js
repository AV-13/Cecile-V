import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// 404.html : GitHub Pages sert les pages prérendues (SEO) et
			// ce fichier pour les routes inconnues — index.html ne doit
			// jamais être écrasé par la coquille SPA vide.
			fallback: '404.html',
			precompress: false,
			strict: true
		})
	}
};

export default config;
