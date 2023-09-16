<script>
	import Pic from '$lib/assets/Asset 1.png';
	export let data;
	function onClick(userid) {
		return (event) => {
			window.location.href = '/profile/' + userid;
		};
	}
</script>

<img style="margin: auto;" class="w-1/4" src={Pic} />

<div class="flex flex-col items-center">
	<ul class="container" style="position: absolute; top:500px">
		{#each data.users as user}
			<div class="px-4">
				<div
					on:click={onClick(user.id)}
					class="btn btn-primary rounded-full h-20 w-20 avatar p-0 border-solid border-4 border-black"
				>
					<div class="w-20 rounded-full">
						<img style="pointer-events: none;" src={user.profile_pic} />
					</div>
				</div>
			</div>
		{/each}
	</ul>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 25%;
	}
</style>
