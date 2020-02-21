import GhostContentAPI from "@tryghost/content-api";
const api = new GhostContentAPI({
	url: 'http://localhost',
	key: '0a552e5b18f26f9e185767efe9',
	version: "v3"
});
export async function getPosts() {
	return await api.posts
		.browse({
			limit: "all"
		})
		.catch(err => {
			console.error(err);
		});
}
