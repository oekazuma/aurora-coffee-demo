<script>
	let { children } = $props();
</script>

<nav>
	<a href="/" class="brand">Aurora Coffee</a>
	<div class="links">
		<a href="/menu">Menu</a>
		<a href="/about">About</a>
	</div>
</nav>

{@render children()}

<style>
	:global(body) {
		margin: 0;
		background: #101014;
		color: #e8e8ec;
		font-family: 'Avenir Next', 'Helvetica Neue', sans-serif;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.2rem 2.4rem;
		border-bottom: 1px solid #26262e;
	}
	.brand {
		font-weight: 700;
		font-size: 1.15rem;
		color: #ff7a3d;
		text-decoration: none;
		letter-spacing: 0.02em;
	}
	.links a {
		color: #b9b9c3;
		text-decoration: none;
		margin-left: 1.6rem;
		font-size: 0.95rem;
	}
	.links a:hover {
		color: #fff;
	}
</style>
