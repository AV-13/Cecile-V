<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	export let name: string;
	export let address: string;
	export let phone: string;
	export let phone2: string | undefined = undefined;
	export let email: string;
	export let website: string | undefined = undefined;
	/** Décalage d'apparition, pour la cascade de la grille */
	export let delay = 0;
</script>

<li class="psychologist-card" use:reveal={{ delay, y: 18 }}>
	<h4>{name}</h4>

	<p class="info">
		<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
			<circle cx="12" cy="10" r="3"/>
		</svg>
		<span>{address}</span>
	</p>

	<p class="info">
		<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
		</svg>
		<a href="tel:{phone.replace(/\s/g, '')}">{phone}</a>
	</p>

	{#if phone2}
		<p class="info">
			<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
			</svg>
			<a href="tel:{phone2.replace(/\s/g, '')}">{phone2}</a>
		</p>
	{/if}

	<p class="info">
		<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<rect x="2" y="4" width="20" height="16" rx="2"/>
			<path d="m22 7-10 5L2 7"/>
		</svg>
		<a href="mailto:{email}">{email}</a>
	</p>

	{#if website}
		<p class="info info-website">
			<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"/>
				<path d="M2 12h20"/>
				<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
			</svg>
			<a class="website-link" href={website} target="_blank" rel="noopener">{website.replace(/^https?:\/\/(www\.)?/, '')}</a>
		</p>
	{/if}
</li>

<style>
	.psychologist-card {
		position: relative;
		background: rgba(255, 255, 255, 0.62);
		border: 1px solid var(--line);
		border-radius: var(--radius-soft);
		padding: 2rem 1.8rem 1.8rem 1.8rem;
		backdrop-filter: blur(3px);
		overflow: hidden;
		transition:
			box-shadow 0.45s var(--ease-out-soft),
			transform 0.45s var(--ease-out-soft),
			border-color 0.45s ease;
	}

	/* Fine lisière sauge qui s'éveille au survol */
	.psychologist-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--sage), var(--mist));
		opacity: 0;
		transition: opacity 0.45s ease;
	}

	.psychologist-card:hover {
		box-shadow: 0 28px 48px -30px rgba(47, 64, 71, 0.4);
		transform: translateY(-5px);
		border-color: var(--sage);
	}

	.psychologist-card:hover::before {
		opacity: 1;
	}

	.psychologist-card h4 {
		font-family: var(--font-display);
		margin-bottom: 1.2rem;
		color: var(--ink);
		font-size: 1.35rem;
		font-weight: 550;
		line-height: 1.25;
		padding-bottom: 0.7rem;
		position: relative;
	}

	.psychologist-card h4::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 36px;
		height: 1.5px;
		background-color: var(--sage);
		transition: width 0.5s var(--ease-out-soft);
	}

	.psychologist-card:hover h4::after {
		width: 64px;
	}

	.info {
		display: flex;
		align-items: flex-start;
		gap: 0.7em;
		margin-bottom: 0.65em;
		font-size: 0.92rem;
		color: var(--ink-soft);
		line-height: 1.6;
	}

	.icon {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		margin-top: 4px;
		opacity: 0.5;
	}

	.info a {
		color: var(--ink-soft);
		text-decoration: none;
		word-break: break-word;
		transition: color 0.25s ease;
	}

	.info a:hover {
		color: var(--sage-deep);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.info span {
		word-break: break-word;
	}

	.info-website {
		margin-top: 1rem;
	}

	.website-link {
		font-weight: 600;
		color: var(--ink);
		text-decoration: underline;
		text-decoration-color: var(--sage);
		text-decoration-thickness: 1.5px;
		text-underline-offset: 4px;
	}
</style>
