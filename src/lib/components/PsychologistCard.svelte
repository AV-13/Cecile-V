<script lang="ts">
	export let name: string;
	export let address: string;
	export let phone: string;
	export let phone2: string | undefined = undefined;
	export let email: string;
	export let website: string | undefined = undefined;
</script>

<li class="psychologist-card">
	<h4>{name}</h4>

	<p class="info">
		<img class="icon" alt="localisation" src="/images/icons/localisation-annuaire.svg" />
		<span>{address}</span>
	</p>

	<p class="info">
		<img class="icon" alt="téléphone" src="/images/icons/telephone-empty-annuaire.svg" />
		<a href="tel:{phone.replace(/\s/g, '')}">{phone}</a>
	</p>

	{#if phone2}
		<p class="info">
			<img class="icon" alt="téléphone fixe" src="/images/icons/telephone-empty-annuaire.svg" />
			<a href="tel:{phone2.replace(/\s/g, '')}">{phone2}</a>
		</p>
	{/if}

	<p class="info">
		<img class="icon" alt="email" src="/images/icons/enveloppe-empty-annuaire.svg" />
		<a href="mailto:{email}">{email}</a>
	</p>

	{#if website}
		<p class="info">
			<img class="icon" alt="site web" src="/images/icons/globe.svg" />
			<a href={website} target="_blank" rel="noopener">{website.replace(/^https?:\/\/(www\.)?/, '')}</a>
		</p>
	{/if}
</li>

<style>
	.psychologist-card {
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid var(--line);
		border-radius: var(--radius-soft);
		padding: 1.9rem 1.7rem;
		min-width: 270px;
		max-width: 380px;
		flex: 1 1 300px;
		backdrop-filter: blur(3px);
		transition:
			box-shadow 0.4s var(--ease-out-soft),
			transform 0.4s var(--ease-out-soft),
			border-color 0.4s ease;
	}

	.psychologist-card:hover {
		box-shadow: 0 24px 44px -28px rgba(47, 64, 71, 0.35);
		transform: translateY(-4px);
		border-color: var(--sage);
	}

	.psychologist-card h4 {
		font-family: var(--font-display);
		margin-bottom: 1.1rem;
		color: var(--ink);
		font-size: 1.3rem;
		font-weight: 550;
		padding-bottom: 0.65rem;
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
	}

	.info {
		display: flex;
		align-items: flex-start;
		gap: 0.7em;
		margin-bottom: 0.6em;
		font-size: 0.92rem;
		color: var(--ink-soft);
		line-height: 1.6;
	}

	.icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		margin-top: 3px;
		opacity: 0.55;
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
</style>
