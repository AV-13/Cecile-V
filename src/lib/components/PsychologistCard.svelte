<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	export let name: string;
	export let address: string;
	export let phone: string;
	export let phone2: string | undefined = undefined;
	export let email: string;
	export let website: string | undefined = undefined;
	/** Décalage d'apparition dans la liste */
	export let delay = 0;
</script>

<li class="colleague" use:reveal={{ delay, y: 14 }}>
	<h4 class="colleague-name">{name}</h4>

	<p class="colleague-address">{address}</p>

	<div class="colleague-contact">
		<a href="tel:{phone.replace(/\s/g, '')}">{phone}</a>
		{#if phone2}
			<a href="tel:{phone2.replace(/\s/g, '')}">{phone2}</a>
		{/if}
		<a class="colleague-email" href="mailto:{email}">{email}</a>
	</div>

	<div class="colleague-site">
		{#if website}
			<a href={website} target="_blank" rel="noopener">
				{website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M7 17 17 7M7 7h10v10"/>
				</svg>
			</a>
		{/if}
	</div>
</li>

<style>
	/* Une ligne de registre : le nom, l'adresse, les contacts, le site */
	.colleague {
		display: grid;
		grid-template-areas:
			'name'
			'address'
			'contact'
			'site';
		gap: 0.4rem;
		padding: 1.75rem 1.25rem;
		margin: 0 -1.25rem;
		border-top: 1px solid var(--line);
		border-radius: 6px;
		transition: background-color 0.4s ease;
	}

	.colleague:hover {
		background-color: rgba(255, 255, 255, 0.55);
	}

	.colleague-name {
		grid-area: name;
		font-family: var(--font-display);
		font-size: 1.3rem;
		font-weight: 550;
		line-height: 1.3;
		color: var(--ink);
		position: relative;
		width: fit-content;
	}

	.colleague-name::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 0;
		height: 1.5px;
		background-color: var(--sage-deep);
		transition: width 0.5s var(--ease-out-soft);
	}

	.colleague:hover .colleague-name::after {
		width: 100%;
	}

	.colleague-address {
		grid-area: address;
		font-size: 0.95rem;
		color: var(--ink-soft);
		line-height: 1.65;
	}

	.colleague-contact {
		grid-area: contact;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		font-size: 0.92rem;
		line-height: 1.65;
	}

	.colleague-contact a {
		color: var(--ink-soft);
		width: fit-content;
		transition: color 0.25s ease;
		word-break: break-word;
	}

	.colleague-contact a:hover {
		color: var(--sage-deep);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.colleague-site {
		grid-area: site;
		font-size: 0.9rem;
	}

	.colleague-site a {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-weight: 600;
		color: var(--ink);
		text-decoration: underline;
		text-decoration-color: var(--sage);
		text-decoration-thickness: 1.5px;
		text-underline-offset: 4px;
		word-break: break-word;
		transition: color 0.25s ease;
	}

	.colleague-site a:hover {
		color: var(--sage-deep);
	}

	.colleague-site svg {
		width: 13px;
		height: 13px;
		flex-shrink: 0;
		opacity: 0.6;
	}

	/* Tablettes : le nom prend sa colonne, les détails la seconde */
	@media (min-width: 700px) {
		.colleague {
			grid-template-areas:
				'name address'
				'name contact'
				'name site';
			grid-template-columns: minmax(200px, 0.9fr) 1.4fr;
			column-gap: 2.5rem;
			row-gap: 0.5rem;
			align-content: start;
		}
	}

	/* Grands écrans : le registre s'étale sur quatre colonnes */
	@media (min-width: 1100px) {
		.colleague {
			grid-template-areas: 'name address contact site';
			grid-template-columns: 1.1fr 1.25fr 1.05fr minmax(180px, 0.9fr);
			column-gap: 2.5rem;
			align-items: start;
		}

		.colleague-site {
			justify-self: end;
			text-align: right;
		}
	}
</style>
