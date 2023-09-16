<script>
	let username = '';
	function onClick(event) {
		document.cookie = `username=${username}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
		window.location.href = '/search';
	}
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl">Enter username:</h1>
	<textarea bind:value={username} />
	<button on:click={onClick}>Login</button>
</div>
