<script>
	import LandingImg from '$lib/images/landing.jpg';
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- generate a landing page for a race finder website -->

	<span class="image">
		<picture>
			<source srcset={LandingImg} type="image/jpg" />
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={LandingImg} alt="Landing image" width="100%" />
		</picture>
	</span>
	<h1> 
		Race Finder
	</h1>
	<p>
		
	</p>

	
</section>

<style>
	.image{
		position: fixed;
		z-index: -1;
		inset: 0;
		overflow: hidden;
	}

</style>
