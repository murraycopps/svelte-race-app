<script>
	import { races } from '$lib/scripts/races';

	let selectedRaces = races;

	const changeDistance = (/** @type {any} */ e) => {
		// set selected races to races.filter
		if (!e?.target.value) return;

		if (e.target.value === 'all') {
			selectedRaces = races;
			return;
		}

		if (e.target.value === 'marathon') {
			selectedRaces = races.filter(
				(race) =>
					race.distance.toLowerCase().includes('marathon') &&
					!race.distance.toLowerCase().includes('half')
			);
			return;
		}

		selectedRaces = races.filter((race) => race.distance.toLowerCase().includes(e.target.value));
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Find and " />
</svelte:head>

<section>
	{#if races.length > 0}
		<h1>Races</h1>
		<!-- add a dropdown to only show races of a certin distance -->
		<select on:change={(e) => changeDistance(e)}>
			<option value="all">All</option>
			<option value="5k">5k</option>
			<option value="10k">10k</option>
			<option value="half">Half Marathon</option>
			<option value="marathon">Marathon</option>
			<option value="track">Track Meet</option>
		</select>
		<ul>
			{#each selectedRaces as race}
				<li>
					<a href="/races/{race.id}">
						<h2>{race.name}</h2>
						<span class="details">
							{#if !race.distance.toLowerCase().includes('track')}
								<p>{race.distance}</p>
							{:else}
								<p>Track Meet</p>
							{/if}
							<p>{race.location}</p>
							<p>{race.date}</p>
						</span>
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
		--dark: #1c3a64;
		--dark: #2b4b78;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	ul {
		list-style: none;
		padding: 0;
		width: clamp(500px, 50vw, 800px);
		max-width: 100%;
	}
	p {
		margin: 0;
	}
	li {
		margin: 1.5rem 0;
		/* background-color: #1f2937; */
		background-color: var(--off-white);
		padding: 1.5rem;
		/* border: 1px solid var(--bright-orange); */
		border: 2px solid var(--dark);
		border-radius: 0.5rem;
		box-shadow: 0 0 0.25rem 0.25rem var(--dark);
		/* box-shadow: 0 0 0.25rem 0.25rem var(--bright-orange); */
	}
	a {
		color: black;
		text-decoration: none;
		font-weight: bold;
	}

	h1 {
		font-size: 4rem;
		font-weight: 400;
		margin: 0;
	}
	.details {
		--slant-amount: 2.5rem;
		background-color: var(--dark);
		/* background-color: var(--bright-orange); */
		padding: 1rem var(--slant-amount);
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		clip-path: polygon(
			var(--slant-amount) 0%,
			100% 0%,
			calc(100% - var(--slant-amount)) 100%,
			0% 100%
		);
		color: var(--off-white);
		flex-wrap: wrap;
	}

	select {
		text-indent: 0.5rem;
		border-radius: 0.5rem;
		background-color: var(--dark);
		font-size: 1.5rem;
		color: var(--off-white);
        height: 2.5rem;
        width: clamp(200px, 25vw, 300px);
	}

	option {
		padding: 0.5rem;
	}
</style>
