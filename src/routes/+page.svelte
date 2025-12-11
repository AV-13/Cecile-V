<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_DOCTOLIB_URL } from '$env/static/public';

	let showMenu = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	onMount(() => {
		// Intersection Observer for fade-in effects
		const sections = document.querySelectorAll('.fade-in-section');
		const options = {
			threshold: 0.1
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, options);

		sections.forEach((section) => {
			observer.observe(section);
		});
	});
</script>

<svelte:head>
	<title>Cécile Vathonne - Psychothérapeute</title>
	<meta name="description" content="Psychothérapeute spécialisée en psychanalyse à Paris 9e. RV rapide au 07 62 80 25 77." />
</svelte:head>

<main>
	<img
		class="svg-wave"
		src="/images/waves/before-presentation-wave.svg"
		alt="Présentation"
	/>

	<div class="presentation-container">
		<h1>Psychothérapeute</h1>
		<img
			class="portrait"
			src="/images/accueil_psy.jpg"
			alt="portrait"
		/>
		<p class="psychology-explanation">
			Je propose de recevoir toute personne qui souffre.
			Au cours de sa vie, il est courant de rencontrer un moment difficile, un accident, de sentir en soi une
			tristesse ou un blocage depuis longtemps. Toute souffrance est légitime et mérite d'être écoutée.
			Si vous avez le désir d'en parler pour avancer, faites le premier pas et appelez au <a
				href="tel:07 62 80 25 77">07 62 80 25 77</a>.
		</p>
	</div>

	<img
		class="svg-wave"
		src="/images/waves/before-take-appointment-wave.svg"
		alt="Prendre rendez-vous"
	/>

	<div id="takeAppointment" class="take-appointment">
		<h2>Prendre rendez-vous</h2>
		<div class="take-appointment-subcontainer">
			<p style="text-align: center">
				Les prises de rendez-vous se font <b>par téléphone</b> au <b>07 62 80 25 77</b>, par <b>mail</b> à
				l'adresse <b>cecile.vathonne@gmail.com</b> ou via Doctolib.
			</p>

			<div class="phone-illustration-container">
				<img
					class="telephone-illustration"
					src="/images/telephone-illustration.jpg"
					alt="telephone-illustration"
				/>
				<img
					class="phone-illustration-blob"
					src="/images/blob/telephone-blob.svg"
					alt="Blob"
				/>
			</div>

			<a class="take-appointment-button" href="tel:762802577">
				<img
					width="15"
					height="15"
					src="/images/telephone.svg"
					alt="telephone"
				/>
				07 62 80 25 77
			</a>
			<a href="https://www.doctolib.fr/psychologue/paris/cecile-vathonne/booking?bookingFunnelSource=external_referral&utm_campaign=website-button&utm_source=cecile-vathonne-website-button&utm_medium=referral&utm_content=withoutpreview-blue-floating-bottom-right&utm_term=cecile-vathonne"
				style="display:flex;text-align:center;background-color:#107ACA;color:#ffffff;font-size:14px;overflow:hidden;font-family:Roboto, sans-serif;box-sizing:border-box;align-items:center;padding:0 24px;z-index:1000;height:48px;text-decoration:none;border-radius:24px;width:fit-content;margin:28px auto 0px auto"
				target="_blank"
				rel="noopener">
				Prendre rendez-vous
				<img style="vertical-align:middle;width:auto;height:19px"
					src="https://pro.doctolib.fr/external_button/doctolib-white-transparent.png" alt="Doctolib"/>
			</a>
		</div>

		<div id="price">
			<h2>Combien ça coûte ?</h2>
			<div class="purple-warning">
				Je pratique le principe de <strong>Consultation Publique de Psychanalyse (CPP)</strong>.
				Vous êtes invités à régler vos séances <strong>en fonction de vos moyens</strong>.
				Nous pouvons donc discuter ensemble du prix des séances <strong>selon vos possibilités</strong>.
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}

	.svg-wave {
		width: 100%;
		height: 50px;
	}

	.presentation-container {
		background-color: #EDF3F6;
	}

	.presentation-container h1 {
		font-size: 7vw;
		text-align: center;
		padding: 20px 0;
		font-weight: 800;
	}

	.portrait {
		margin: 20px auto;
		width: 250px;
		height: 320px;
		border-radius: 5px;
	}

	.psychology-explanation {
		padding: 30px;
		text-align: justify;
	}

	.take-appointment {
			background-color: white;
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.take-appointment h2 {
		font-size: 28px;
		padding: 35px 10px;
		font-weight: 800;
	}

	.take-appointment p {
		padding: 0 20px 0 10px;
	}

	.phone-illustration-container {
		position: relative;
		width: 100%;
		max-width: 400px;
		height: 300px;
		margin: 0 auto 30px auto;
		overflow: hidden;
	}

	.phone-illustration-blob {
		position: absolute;
		top: 0;
		left: 0;
		width: 95%;
		height: 100%;
		z-index: 1;
	}

	.phone-illustration-container .telephone-illustration {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 38%;
		height: auto;
		border-radius: 20px;
		z-index: 2;
	}

	.take-appointment-button {
		display: flex;
		font-size: 14px;
		font-weight: 700;
		gap: 12px;
		align-items: center;
		border-radius: 5px;
		padding: 0.8rem;
		background-color: #ffec2d;
		width: fit-content;
		margin: auto;
		cursor: pointer;
	}

	.take-appointment-button img {
		width: 15px;
		height: 15px;
	}

	.purple-warning {
		text-align: center;
		margin: 2rem 1rem;
		line-height: 1.6;
		background-color: #faedfc;
		padding: 1rem 2rem;
		border-radius: 9999px;
		font-size: 14px;
	}

	/* Tablets */
	@media (min-width: 640px) {
		.svg-wave {
			height: 100px;
		}

		.presentation-container h1 {
			padding: 30px 0;
			font-size: 8vw;
		}

		.portrait {
			width: 50%;
			height: auto;
			max-width: 350px;
		}

		.psychology-explanation {
			padding: 40px;
		}

		.take-appointment h2 {
			font-size: 35px;
		}

		.take-appointment-button {
			font-size: 16px;
			padding: 1rem 1.5rem;
		}

		.take-appointment-button img {
			width: 18px;
			height: 18px;
		}

		.purple-warning {
			margin: 2rem 4rem;
			font-size: 16px;
		}

		.phone-illustration-container {
			max-width: 500px;
			height: 350px;
		}
	}

	/* Small Laptops */
	@media (min-width: 1024px) {
		.presentation-container h1 {
			font-size: 6vw;
		}

		.portrait {
			width: 40%;
		}

		.psychology-explanation {
			padding: 50px 80px;
		}

		.take-appointment h2 {
			font-size: 38px;
		}
	}

	/* Large screens */
	@media (min-width: 1291px) {
		.svg-wave {
			height: 200px;
		}

		.presentation-container h1 {
			font-size: 5vw;
			text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3),
				0px 0px 5px rgba(192, 192, 180, 0.5);
		}

		.portrait {
			width: 35%;
			max-width: 400px;
		}

		.psychology-explanation {
			padding: 60px 100px 80px 100px;
		}

		.take-appointment h2 {
			font-size: 42px;
		}

		.phone-illustration-container {
			max-width: 600px;
			height: 400px;
		}
	}

	/* Extra large screens */
	@media (min-width: 1920px) {
		.presentation-container h1 {
			font-size: 4.5vw;
		}

		.psychology-explanation {
			padding: 80px 150px 100px 150px;
			max-width: 1600px;
			margin: 0 auto;
		}
	}
</style>
