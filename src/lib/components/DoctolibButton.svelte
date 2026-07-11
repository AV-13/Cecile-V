<script lang="ts">
	/** Bouton Doctolib unifié, au style apaisé du site. */
	export let label = 'Prendre rendez-vous';
	/** 'solid' sur fond clair, 'outline-light' sur fond sombre ou image */
	export let variant: 'solid' | 'outline-light' = 'solid';
</script>

<a
	class="doctolib-btn {variant}"
	href="https://www.doctolib.fr/psychologue/paris/cecile-vathonne/booking?bookingFunnelSource=external_referral&utm_campaign=website-button&utm_source=cecile-vathonne-website-button&utm_medium=referral&utm_content=withoutpreview-blue-floating-bottom-right&utm_term=cecile-vathonne"
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
	.doctolib-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.7rem;
		padding: 0.85rem 1.9rem;
		min-height: 48px;
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		transition:
			background-color 0.35s var(--ease-out-soft),
			border-color 0.35s var(--ease-out-soft),
			transform 0.35s var(--ease-out-soft),
			box-shadow 0.35s var(--ease-out-soft);
	}

	.solid {
		background-color: var(--ink);
		color: var(--paper);
	}

	.solid:hover {
		background-color: var(--sage-deep);
		transform: translateY(-2px);
		box-shadow: 0 12px 28px -14px rgba(47, 64, 71, 0.45);
	}

	.outline-light {
		background-color: rgba(245, 242, 236, 0.08);
		border: 1px solid rgba(245, 242, 236, 0.75);
		color: var(--paper);
		backdrop-filter: blur(2px);
	}

	.outline-light:hover {
		background-color: rgba(245, 242, 236, 0.22);
		border-color: var(--paper);
		transform: translateY(-2px);
	}

	.label {
		white-space: nowrap;
	}

	.doctolib-btn img {
		height: 16px;
		width: auto;
	}
</style>
