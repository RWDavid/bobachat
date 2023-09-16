<script>
	import '../app.css';

	function getCookie(name) {
		var dc = document.cookie;
		var prefix = name + '=';
		var begin = dc.indexOf('; ' + prefix);
		if (begin == -1) {
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		} else {
			begin += 2;
			var end = document.cookie.indexOf(';', begin);
			if (end == -1) {
				end = dc.length;
			}
		}
		// because unescape has been deprecated, replaced with decodeURI
		//return unescape(dc.substring(begin + prefix.length, end));
		return decodeURI(dc.substring(begin + prefix.length, end));
	}

	let loggedIn = getCookie('userid') !== null;

	function onClick(event) {
		document.cookie = 'userid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		window.location.href = '/';
	}
</script>

<body data-theme="retro">
	<div class="h-16 items-center p-2 flex flex-row bg-base-300">
		<a href="/" class="font-bold btn btn-ghost text-3xl">BOBACHAT</a>
		<span class="grow" />
		{#if loggedIn}
			<!-- <a href="/inbox" class="btn btn-ghost text-lg">Inbox</a> -->
			<a on:click={onClick} href="#" class="btn btn-ghost text-lg">Log Out</a>
		{/if}
	</div>

	<slot />
</body>

<style>
	body {
		min-height: 100vh;
	}
</style>
