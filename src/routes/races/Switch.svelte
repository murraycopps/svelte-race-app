<script lang="ts">
	export let state: boolean;
	export let left: string;
	export let right: string;
	export let setState: (state: boolean) => void;
</script>

<button class={`${state && 'left'}`} on:click={() => setState(!state)}>
	{state ? left : right}
	<span />
</button>

<style>
	button {
		color: var(--controls-color);
		width: 100%;
		height: 4rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: var(--off-white);
		border: 4px solid var(--controls-color);
		border-radius: 3rem;
		position: relative;
		user-select: none;
		padding: 0.25rem;
		font-size: 2rem;
	}

	.left {
		flex-direction: row-reverse;
	}

	span {
		height: 3.375rem;
		aspect-ratio: 1/1;
		display: flex;
		background-color: var(--controls-color);
		border-radius: 50vh;
		outline: none;
		box-sizing: border-box;
	}
</style>
