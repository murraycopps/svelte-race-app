<script lang="ts">
	import { races } from '$lib/scripts/races';
	import type { Race } from '$lib/scripts/types';
	import Switch from './Switch.svelte';

	let state = false;
	export let selectedRaces: Race[];
	export let setSelectedRaces: (race: Race[]) => void;

	const setState = (value: boolean) => {
		state = value;
		sortDistances();
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
		setSelectedRaces(selectedRaces);
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
			selectedRaces = races.filter((race) => {
				let found;
				race.distances?.forEach((distance) => {
					if (distance.includes(e.currentTarget.value)) {
						found = true;
					}
				});
				return race.distance.toLowerCase().includes(e.currentTarget.value) || found;
			});
		}
		sortDistances();
	};
</script>

<div class="display">
	<select on:change={(e) => changeDistance(e)}>
		<option value="all">All</option>
		<option value="5k">5k</option>
		<option value="10k">10k</option>
		<option value="half">Half Marathon</option>
		<option value="marathon">Marathon</option>
		<option value="track">Track Meet</option>
	</select>
	<div>
		<Switch {state} {setState} left="Date" right="Distance" />
	</div>
</div>

<style>
	select {
		height: 4rem;
		padding: 1rem;
		border-radius: 4rem;
		background-color: var(--dark);
		font-size: 1.5rem;
		color: var(--off-white);
		width: 100%;
	}

	option {
		padding: 0.5rem;
	}

	.display {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		align-items: center;
		width: clamp(500px, 50%, 800px);
		max-width: 100%;
	}
	.display * {
		flex: 1;
	}
</style>
