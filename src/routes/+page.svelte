<script>
	import LandingImg from '$lib/images/landing.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Find and " />
</svelte:head>

<section>
	<!-- generate a landing page for a race finder website -->

	<span class="image">
		<picture>
			<source srcset={LandingImg} type="image/jpg" />
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={LandingImg} alt="Landing image" />
		</picture>
	</span>
	<div class="text">
		<h1>Race Finder</h1>
		<p>This website finds and displays data about nearby races.</p>
	</div>

	<!--    add a link to view races-->
	<a href="/races">View Races</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		color: var(--off-white);
		background-color: #1f2937;
		z-index: 1;
		width: 100vw;
		position: fixed;
		inset: 0;
		gap: 2rem;
	}

	.image {
		position: fixed;
		z-index: -1;
		inset: 0;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.2;
	}

	h1 {
		font-size: 8rem;
		font-weight: 700;
		margin: 0;
	}

	.text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		text-align: center;
		/* background: -webkit-radial-gradient( #FFFF00, #FF3B00); */
		background: -webkit-linear-gradient(180deg, #cc2b5e, #ab26d7);
		/* do the same thing but a circle */
		/* background: -webkit-radial-gradient(#cc2b5e, #ab26d7); */
		/* background: -webkit-radial-gradient(#ab26d7, #cc2b5e); */
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	p {
		font-size: 2rem;
		font-weight: 400;
		margin: 0;
	}
	a {
		font-size: 2rem;
		font-weight: 400;
		color: var(--off-white);
		text-decoration: none;
		/* background-color: #3b82f6; */
		/* background: -webkit-linear-gradient(180deg, #cc2b5e, #ab26d7); */
		background-color: var(--bright-orange);
		padding: 0.5rem 5rem;
		border-radius: 10rem;
		margin: 2rem 0 0;
	}
	a:hover {
		/* background-color: #2563eb; */
		/* bright orange is #f65900  make it a little darker then that to show that it is hovered */
		background-color: #ce4800;
	}
	@media (max-width: 600px) {
		h1 {
			font-size: 4rem;
		}
		p {
			font-size: 1.5rem;
		}
		a {
			font-size: 1.5rem;
			padding: 0.5rem 3rem;
		}
	}

	/* larger breakpoint */
	@media (max-width: 900px) {
		h1 {
			font-size: 6rem;
		}
		p {
			font-size: 2rem;
		}
		a {
			font-size: 2rem;
			padding: 0.5rem 5rem;
		}
	}
</style>
