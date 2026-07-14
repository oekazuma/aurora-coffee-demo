<script>
	const drinks = [
		{ id: 1, name: 'Polar Espresso', price: '¥520', img: '/espresso.svg' },
		{ id: 2, name: 'Aurora Latte', price: '¥640', img: '/latte.svg' },
		{ id: 3, name: 'Midnight Cold Brew', price: '¥590', img: '/coldbrew.svg' }
	];
</script>

<svelte:head>
	<title>Menu — Aurora Coffee</title>
	<meta name="description" content="Espresso, lattes and cold brew from our small-batch roastery." />
</svelte:head>

<section>
	<h1>Menu</h1>
	<ul>
		{#each drinks as drink (drink.id)}
			<li>
				<img src={drink.img} alt={drink.name} width="56" height="56" loading="lazy" />
				<span class="name">{drink.name}</span>
				<span class="price">{drink.price}</span>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		max-width: 44rem;
		margin: 0 auto;
		padding: 3rem 2.4rem;
	}
	h1 {
		font-size: 2.2rem;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 0;
		border-bottom: 1px solid #26262e;
	}
	img {
		width: 56px;
		height: 56px;
	}
	.name {
		flex: 1;
		font-weight: 600;
	}
	.price {
		color: #ff7a3d;
	}
</style>
