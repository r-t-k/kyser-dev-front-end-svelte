<script context="module">
	import {getPosts, getSinglePost} from '../api/posts';
	export async function preload({ params, query }) {
		const posts = await getPosts();
		const homePost = await getSinglePost('welcome');
		return {
			posts: posts,
			homePost: homePost
		}
	}
</script>
<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Home from "../components/Home.svelte";
	export let homePost;
</script>
<style>
	.outer {
		/*margin-top: 20px;*/
	}
	.inner {
		max-width: 1032px !important;
		min-height: 100%;
		background: #ffffff;
		padding: 60px 40px ;
	}
</style>
<svelte:head>
	<title>KYSER.DEV</title>
</svelte:head>
<div class="outer container flex justify-center content-center">
	<div class="inner">
		<Home content={homePost} />
	</div>

</div>




