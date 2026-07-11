<script lang="ts">
	/** Bouton Doctolib unifié, au style apaisé du site. */
	export let label = 'Prendre rendez-vous';
</script>

<a
	class="doctolib-btn"
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
		background-color: var(--ink);
		color: var(--paper);
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		transition:
			background-color 0.35s var(--ease-out-soft),
			transform 0.35s var(--ease-out-soft),
			box-shadow 0.35s var(--ease-out-soft);
	}

	.doctolib-btn:hover {
		background-color: var(--sage-deep);
		transform: translateY(-2px);
		box-shadow: 0 12px 28px -14px rgba(47, 64, 71, 0.45);
	}

	.label {
		white-space: nowrap;
	}

	.doctolib-btn img {
		height: 17px;
		width: auto;
	}
</style>
