<svelte:head>
	<title>Aurora Coffee — small-batch roasts</title>
	<meta name="description" content="Small-batch coffee roasted under the northern lights." />
</svelte:head>

<section class="hero">
	<h1>Coffee, roasted<br />under the aurora.</h1>
	<p>Small-batch beans from a tiny roastery at the edge of the Arctic Circle.</p>
	<a class="cta" href="/menu">See the menu</a>
</section>

<style>
	.hero {
		padding: 6rem 2.4rem 7rem;
		max-width: 60rem;
		margin: 0 auto;
	}
	h1 {
		font-size: 3.4rem;
		line-height: 1.08;
		margin: 0 0 1rem;
		background: linear-gradient(100deg, #fff 30%, #ff7a3d 85%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	p {
		color: #b9b9c3;
		font-size: 1.15rem;
		max-width: 32rem;
	}
	.cta {
		display: inline-block;
		margin-top: 1.6rem;
		padding: 0.75rem 1.5rem;
		border-radius: 999px;
		background: #ff3e00;
		color: #fff;
		text-decoration: none;
		font-weight: 600;
	}
</style>
