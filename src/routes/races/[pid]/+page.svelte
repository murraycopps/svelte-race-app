<script lang="ts">
	import type { race } from '$lib/scripts/types';

	export let data: {
		props: {
			race: race;
		};
	};
</script>

<section>
	<h1>{data.props.race.name}</h1>
	<div class="details">
		{#if !data.props.race.distance.toLowerCase().includes('track')}
			<p>{data.props.race.distance}</p>
		{:else}
			<p>Track Meet</p>
		{/if}

		<p>{data.props.race.location}</p>
		<p>{data.props.race.date}</p>
	</div>

	<p class="description">{data.props.race.description}</p>
	{#if data.props.race.distances}
		<div class="distances">
			<h2>Distances</h2>
			<ul>
				{#each data.props.race.distances as distance}
					<li>
						<p>{distance}</p>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
        text-align: center;
	}

	ul {
		list-style: none;
		padding: 0;
        margin: 0;
        font-size: 1.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1rem;
	}

	p {
		margin: 0;
	}

	h1 {
		font-size: 4rem;
		font-weight: 400;
		margin: 0;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 400;
		margin: 0;
        margin-bottom: 2rem;
	}
	.details {
		--slant-amount: 2.5rem;
		background-color: var(--bright-orange);
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
        font-size: 1.5rem;
        flex-wrap: wrap;
        gap: .5rem;
	}

	.description {
        margin-bottom: 1rem;
        font-size: 1.125rem;
	}
    /* breakpoint */
    @media (max-width: 600px) {
        h1 {
            font-size: 3rem;
        }
        h2 {
            font-size: 2rem;
        }
        .details {
            --slant-amount: 1.5rem;
            font-size: 1.25rem;
        }
        .description {
            font-size: 1rem;
        }
        ul{
            flex-direction: column;
        }
    }
</style>
