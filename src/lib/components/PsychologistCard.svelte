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
		background: #fbfafa;
		border: 2px solid #b8cfda;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(220, 220, 180, 0.08);
		padding: 1.5rem 1.2rem;
		min-width: 270px;
		max-width: 370px;
		flex: 1 1 300px;
		transition: all 0.3s ease;
	}

	.psychologist-card:hover {
		box-shadow: 0 6px 20px rgba(219, 221, 130, 0.25);
		transform: translateY(-4px);
		border-color: #9ab8c8;
	}

	.psychologist-card h4 {
		margin-bottom: 1rem;
		color: #053f5f;
		font-size: 1.25rem;
		font-weight: 700;
		border-bottom: 2px solid #dbdd82;
		padding-bottom: 0.5rem;
	}

	.info {
		display: flex;
		align-items: flex-start;
		gap: 0.7em;
		margin-bottom: 0.6em;
		font-size: 0.95rem;
		color: #053f5f;
		line-height: 1.5;
	}

	.icon {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
		margin-top: 2px;
		opacity: 0.7;
	}

	.info a {
		color: #053f5f;
		text-decoration: none;
		word-break: break-word;
		transition: color 0.2s;
	}

	.info a:hover {
		color: #0a5f8f;
		text-decoration: underline;
	}

	.info span {
		word-break: break-word;
	}
</style>
