<script context="module">
	import { getPosts } from '../api/posts';
	export async function preload({ params, query }) {
		const posts = await getPosts();
		return { posts: posts }
	}
</script>
<script>
	export let posts;
</script>

<svelte:head>
	<title>KYSER.DEV</title>
</svelte:head>
<ul>
	{#each posts as post}
		<li>{post.title}</li>
	{/each}
</ul>

