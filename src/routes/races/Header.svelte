<script>
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/races">Races</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		font-size: x-large;
	}

	nav {
		--slant-amount: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		flex: 0.4;
		padding: 1rem 2rem;
		background: var(--bright-orange);
		clip-path: polygon(0 0, 100% 0, calc(100% - var(--slant-amount)) 100%, var(--slant-amount) 100%);
	}

	nav a {
		color: var(--off-white);
		text-decoration: none;
	}

	nav a:hover {
		color: var(--off-white);
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		nav {
			--slant-amount: 1.5rem;
			flex: 0.8;
		}
	}
	@media (max-width: 900px) {
		nav {
			--slant-amount: 2rem;
			flex: 0.6;
		}
	}
	


</style>
