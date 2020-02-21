<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>
<style global>
	body {
		background: rgba(107, 70, 193, 0.1);
	}
	main {
		height: 100%;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
