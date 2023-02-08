<script lang="ts">
	import type { race } from '$lib/scripts/types';

	export let data: {
		props: {
			race: race;
		};
	};
</script>

<section>
	<div>
		<h1>{data.props.race.name}</h1>
		{#if data.props.race.distance.includes('track')}
			<p>{data.props.race.distance}</p>
		{:else if data.props.race.distances}
        <h2>Distances</h2>
			<ul>
                {#each data.props.race.distances as distance}
				<li>
					<p>{distance}</p>
				</li>
			{/each}
            </ul>
		{/if}

		<p>{data.props.race.location}</p>
	</div>
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
