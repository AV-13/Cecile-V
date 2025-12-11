<script>
</script>

<svelte:head>
	<title>Articles - Cécile Vathonne</title>
	<meta name="description" content="Articles de vulgarisation scientifique auxquels Cécile Vathonne a collaboré." />
</svelte:head>
<img
	class="svg-wave"
	src="/images/waves/before-presentation-wave.svg"
	alt="Présentation"
/>
<main>
	<div class="content">
		<div class="white-warning">
			Cécile Vathonne a collaboré à l'écriture de plusieurs articles de vulgarisation scientifique.
		</div>
		<a
			href="https://www.santemagazine.fr/sante/maladies/maladies-mentales/phobies/cibophobie-comment-vaincre-la-peur-de-manger-1115064"
			target="_blank"
			rel="noopener"
			class="take-appointment-button"
		>
			Consulter l'article
			<span>
				<img src="/images/icons/external-link.svg" alt="(lien externe)" />
			</span>
		</a>
	</div>

	<img
		class="bottom-wave"
		src="/images/waves/before-take-appointment-wave.svg"
		alt="wave"
	/>
</main>
<div class="doctolib-container">
	<a
		href="https://www.doctolib.fr/psychologue/paris/cecile-vathonne/booking?bookingFunnelSource=external_referral&utm_campaign=website-button&utm_source=cecile-vathonne-website-button&utm_medium=referral&utm_content=withoutpreview-blue-floating-bottom-right&utm_term=cecile-vathonne"
		class="doctolib-button-main"
		target="_blank"
		rel="noopener"
	>
		Prendre rendez-vous
		<img
			style="vertical-align:middle;width:auto;height:19px;margin-left:8px"
			src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png"
			alt="Doctolib"
		/>
	</a>
</div>

<style>
		.doctolib-container {
				background-color: white;
				margin: unset !important;
		}
	main {
		min-height: 60vh;
		background-color: #edf3f6;
	}
	.bottom-wave {
		width: 100%;
		display: block;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		padding: 40px 20px;
	}
  .white-warning {
      text-align: center;
      margin: 2rem 1rem;
      line-height: 1.6;
      background-color: #fff;
      padding: 1rem 2rem;
      border-radius: 9999px;
      font-size: 16px;
  }

	.take-appointment-button {
		display: flex;
		font-size: 16px;
		font-weight: 700;
		gap: 12px;
		align-items: center;
		border-radius: 5px;
		padding: 1rem 1.5rem;
		background-color: #ffec2d;
		width: fit-content;
		cursor: pointer;
		text-decoration: none;
		color: #000;
		transition: transform 0.2s;
	}

	.take-appointment-button:hover {
		transform: translateY(-2px);
	}

	.take-appointment-button img {
		width: 18px;
		height: 18px;
	}
</style>
