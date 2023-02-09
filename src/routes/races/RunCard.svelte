<script lang="ts">
	import type { Race } from '$lib/scripts/types';

	export let race: Race;
</script>

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
        <p class="distance-away">{race.distanceAway} {race.distanceAway === 1 ? "Mile" : "Miles"} Away</p>
	</a>
</li>

<style>
    h2{
        margin: 0;
        margin-bottom: 1rem;
        font-size: 2rem;
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
		border: 2px solid var(--dark-blue);
		border-radius: 0.5rem;
		box-shadow: 0 0 0.25rem 0.25rem var(--dark-blue);
		/* box-shadow: 0 0 0.25rem 0.25rem var(--bright-orange); */
	}
	a {
		color: black;
		text-decoration: none;
		font-weight: bold;
	}
	.details {
		--slant-amount: 2.5rem;
		background-color: var(--dark-blue);
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
    .distance-away {
        font-size: 1.5rem;
        margin-top: 1rem;
        text-align: center;
    }
</style>
