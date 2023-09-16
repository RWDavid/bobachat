<script>
	let username = '';
	// function onClick(event) {
	// 	document.cookie = `username=${username}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
	// 	window.location.href = '/search';
	// }
	async function onClick(event) {
		const response = await fetch('/api/authenticate', {
			method: 'POST',
			body: JSON.stringify({
				username: username
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		if (response.status == 404) return;

		const userid = await response.json();
		document.cookie = `userid=${userid.userid}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;
		window.location.href = '/search';
	}
</script>

<div class="flex flex-col items-center pt-8">
	<div class="card w-96 bg-secondary shadow-xl">
		<div class="card-body items-center text-center">
			<h2 class="card-title">Enter username:</h2>
			<textarea
				class="textarea text-center h-10 overflow-hidden resize-none"
				bind:value={username}
			/>
			<div class="card-actions justify-end">
				<button class="btn btn-secondary" on:click={onClick}>Login</button>
			</div>
		</div>
	</div>
</div>
