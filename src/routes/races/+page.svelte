<script lang="ts">
	import RunCard from './RunCard.svelte';
	import { races } from '$lib/scripts/races';
	import Switch from './Switch.svelte';

	let selectedRaces = races;

	let state = false;

	const setState = (value: boolean) => {
		state = value;
	};

	const sortDistances = () => {
		// sort selected races
		if (state) {
			// sort by date from soonest to latest
			selectedRaces = selectedRaces.sort((a, b) => {
				return new Date(a.date).getTime() - new Date(b.date).getTime();
			});
		} else {
			// sort by distance away
			selectedRaces = selectedRaces.sort((a, b) => {
				return a.distanceAway - b.distanceAway;
			});
		}
	};

	sortDistances();

	const changeDistance = (e: { currentTarget: HTMLSelectElement }) => {
		// set selected races to races.filter
		if (!e?.currentTarget?.value) return;

		if (e.currentTarget.value === 'all') {
			selectedRaces = races;
		} else if (e.currentTarget.value === 'marathon') {
			selectedRaces = races.filter(
				(race) =>
					race.distance.toLowerCase().includes('marathon') &&
					!race.distance.toLowerCase().includes('half')
			);
		} else {
			selectedRaces = races.filter((race) =>
				race.distance.toLowerCase().includes(e.currentTarget.value)
			);
		}
		sortDistances();
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
		<div class="switch-field">
			<h2>Sort By</h2>
			<Switch {state} {setState} left="Date" right="Distance" />
		</div>
		<ul>
			{#each selectedRaces as race}
				<RunCard {race} />
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

	h1 {
		font-size: 4rem;
		font-weight: 400;
		margin: 0;
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

	.switch-field {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: clamp(500px, 50%, 800px);
		max-width: 100%;
	}
</style>
