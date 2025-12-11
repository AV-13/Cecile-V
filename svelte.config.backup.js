// Configuration alternative pour SSR (si déploiement sur serveur Node.js)
// Actuellement utilise adapter-static pour GitHub Pages

import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true,
			envPrefix: 'PUBLIC_'
		})
	}
};

// Pour revenir à cette config si vous déployez sur Vercel/Heroku :
// 1. Décommenter ci-dessus
// 2. Changer svelte.config.js
// 3. npm install @sveltejs/adapter-node
// 4. npm run build
