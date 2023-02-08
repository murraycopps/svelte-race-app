<script>
	import { races } from '$lib/scripts/races';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Find and " />
</svelte:head>

<section>
	{#if races.length > 0}
		<h1>Races</h1>
		<ul>
			{#each races as race}
				<li>
					<a href="/races/{race.id}">
						<h2>{race.name}</h2>
						<p>{race.distance}</p>
						<p>{race.location}</p>
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<h1>No races found</h1>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		margin: 1rem 0;
	}
	a {
		color: #1f2937;
		text-decoration: none;
		font-weight: bold;
	}

	h1 {
		font-size: 4rem;
		font-weight: 400;
		margin: 0;
	}
</style>
