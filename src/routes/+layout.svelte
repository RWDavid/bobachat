<script>
	import '../app.css';

	import { browser } from '$app/environment';

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

	let loggedIn = browser && getCookie('username') !== null;

	function onClick(event) {
		document.cookie = 'username=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		window.location.href = '/';
	}
</script>

<body>
	<div class="header p-2 flex flex-row">
		<a href="/" class="font-bold">BOBACHAT</a>
		<span class="grow" />
		{#if loggedIn}
			<a href="/inbox">Inbox</a>
			<a on:click={onClick} href="#">Log Out</a>
		{/if}
	</div>

	<slot />
</body>

<style>
	.header {
		background: #d4ae6c;
		font-size: 30px;
	}

	body {
		background: #ffdb9e;
	}
</style>
