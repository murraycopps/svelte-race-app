<script>
    import LandingImg from '$lib/images/landing.jpg';

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Find and "/>
</svelte:head>

<section>
    <!-- generate a landing page for a race finder website -->

    <span class="image">
		<picture>
			<source srcset={LandingImg} type="image/jpg"/>
            <!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={LandingImg} alt="Landing image"/>
		</picture>
	</span>
    <h1>Race Finder</h1>
    <p>This website finds and displays data about nearby races. </p>

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
        color: white;
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

    p {
        font-size: 2rem;
        font-weight: 400;
        margin: 0;
    }
    a{
        font-size: 2rem;
        font-weight: 400;
        color: white;
        text-decoration: none;
        background-color: #3b82f6;
        padding: .5rem 5rem;
        border-radius: 10rem;
        margin: 2rem 0 0;
    }

</style>
