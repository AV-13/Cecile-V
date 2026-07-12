<script lang="ts">
	import { DOCTOLIB_URL } from '$lib/constants';

	/** Bouton Doctolib unifié, au style apaisé du site. */
	export let label = 'Prendre rendez-vous';
	/** 'solid' sur fond clair, 'outline-light' sur fond sombre ou image */
	export let variant: 'solid' | 'outline-light' = 'solid';
</script>

<a
	class="btn doctolib-btn"
	class:btn-light={variant === 'outline-light'}
	href={DOCTOLIB_URL}
	target="_blank"
	rel="noopener"
>
	<span class="label">{label}</span>
	<img
		src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
		alt="Doctolib"
	/>
</a>

<style>
	/* Le style commun vient de .btn / .btn-light (global.css) ;
	   ne restent ici que les écarts propres au bouton Doctolib. */
	.doctolib-btn {
		gap: 0.7rem; /* .btn : 0.65rem */
		/* Redéclarée localement (sélecteur scopé, spécificité supérieure) pour
		   que « .footer-container a { transition: color … } » ne l'écrase pas */
		transition:
			background-color 0.35s var(--ease-out-soft),
			border-color 0.35s var(--ease-out-soft),
			transform 0.35s var(--ease-out-soft),
			box-shadow 0.35s var(--ease-out-soft);
	}

	.label {
		white-space: nowrap;
	}

	/* Le logo Doctolib garde son ratio naturel (.btn img force 16 × 16) */
	.doctolib-btn img {
		width: auto;
		height: 16px;
	}
</style>
