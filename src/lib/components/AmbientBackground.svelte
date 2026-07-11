<!--
	Fond ambiant : trois formes organiques très diluées qui dérivent
	en permanence, à peine perceptibles. C'est la respiration du site.
-->
<div class="ambient" aria-hidden="true">
	<div class="drift drift-sage"></div>
	<div class="drift drift-mist"></div>
	<div class="drift drift-blush"></div>
</div>
<div class="grain" aria-hidden="true"></div>

<style>
	.ambient {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		pointer-events: none;
		background-color: var(--paper);
	}

	.drift {
		position: absolute;
		width: 55vmax;
		height: 55vmax;
		border-radius: 50%;
		filter: blur(90px);
		opacity: 0.5;
	}

	.drift-sage {
		background: radial-gradient(circle, var(--sage-tint) 0%, transparent 65%);
		top: -18vmax;
		left: -12vmax;
		animation: drift-a 38s ease-in-out infinite alternate;
	}

	.drift-mist {
		background: radial-gradient(circle, var(--mist-tint) 0%, transparent 65%);
		bottom: -20vmax;
		right: -14vmax;
		animation: drift-b 46s ease-in-out infinite alternate;
	}

	.drift-blush {
		background: radial-gradient(circle, rgba(217, 200, 184, 0.55) 0%, transparent 65%);
		top: 30%;
		left: 45%;
		width: 40vmax;
		height: 40vmax;
		animation: drift-c 52s ease-in-out infinite alternate;
	}

	@keyframes drift-a {
		to {
			transform: translate(9vmax, 7vmax) scale(1.15);
		}
	}

	@keyframes drift-b {
		to {
			transform: translate(-8vmax, -6vmax) scale(1.1);
		}
	}

	@keyframes drift-c {
		to {
			transform: translate(-10vmax, 5vmax) scale(0.9);
		}
	}

	/* Grain photographique très léger sur tout le site */
	.grain {
		position: fixed;
		inset: 0;
		z-index: 90;
		pointer-events: none;
		opacity: 0.05;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		background-size: 240px 240px;
	}
</style>
