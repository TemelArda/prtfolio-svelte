<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
	
</script>

<!-- <Header /> -->
<main>
	<slot />
</main>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: fit-content;
		box-sizing: border-box;
	}
	@media (max-width: 767.98px){
		main {
			padding: 0;
		}
	}

</style>