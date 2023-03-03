<script lang="ts">
	import RunCard from './RunCard.svelte';
	import { races } from '$lib/scripts/races';
	import type { Race } from '$lib/scripts/types';
	import Controls from './Controls.svelte';

	let selectedRaces = races;

	const setSelectedRaces = (newRaces: Race[]) => {
		selectedRaces = newRaces;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Find nearby races" />
</svelte:head>

<section>
	{#if races.length > 0}
		<h1>Races</h1>
		<!-- add a dropdown to only show races of a certin distance -->
		<Controls {selectedRaces} {setSelectedRaces} />
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
		--dark-blue: #1c3a64;
		/*--dark-blue: #2b4b78;*/
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
</style>
