import { animate, inView } from 'motion';

interface RevealOptions {
	/** Délai en secondes avant l'apparition (pour les cascades) */
	delay?: number;
	/** Distance de remontée en pixels */
	y?: number;
}

/**
 * Action Svelte : révèle doucement un élément quand il entre dans le viewport.
 * Fondu + légère remontée, une seule fois, au rythme lent du site.
 * Respecte prefers-reduced-motion.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { delay = 0, y = 26 } = options;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return {};
	}

	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.willChange = 'opacity, transform';

	const stop = inView(
		node,
		() => {
			animate(
				node,
				{ opacity: 1, transform: 'translateY(0px)' },
				{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }
			);
			return () => {};
		},
		{ amount: 0.15 }
	);

	return {
		destroy() {
			stop();
		}
	};
}
