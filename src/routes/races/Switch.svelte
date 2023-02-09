<script lang="ts">
	export let state: boolean;
	export let left: string;
	export let right: string;
	export let setState: (state: boolean) => void;
</script>

<button class={`switch ${state ? 'left' : 'right'}`} on:click={() => setState(!state)}>
	{state ? left : right}
	<span class="switch-item" />
</button>

<style>
	.switch {
		width: 100%;
		height: 6rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		color: black;
		border: 4px solid var(--dark);
		border-radius: 3rem;
		position: relative;
		user-select: none;
		padding: 0.5rem;
        font-size: 2rem;
	}

	.switch.left {
		flex-direction: row-reverse;
	}

	.switch-item {
		height: 5rem;
		aspect-ratio: 1/1;
		display: flex;
		background-color: var(--dark);
		border-radius: 50vh;
		outline: none;
		box-sizing: border-box;
	}
</style>
