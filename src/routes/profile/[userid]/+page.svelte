<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { user_data, sent_invite_data, received_invite_data } = data.data;
	let invite_enabled = sent_invite_data === undefined && received_invite_data === undefined;
	let accept_invite_enabled =
		received_invite_data !== undefined && received_invite_data.accepted === null;

	let show_contact_info =
		(sent_invite_data && sent_invite_data.accepted == true) ||
		(received_invite_data && received_invite_data.accepted == true);

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

	async function onClickSendInvite() {
		const response = await fetch('/api/invite', {
			method: 'POST',
			body: JSON.stringify({
				sender_id: getCookie('userid'),
				receiver_id: user_data.id
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
		invite_enabled = false;
	}

	async function onClickAcceptInvite() {
		const response = await fetch('/api/accept', {
			method: 'POST',
			body: JSON.stringify({
				sender_id: user_data.id,
				receiver_id: getCookie('userid')
			}),
			headers: {
				'content-type': 'application/json'
			}
		});
		accept_invite_enabled = false;
		show_contact_info = true;
	}
</script>

<div class="flex flex-col items-center pt-16">
	<div class="card card-compact w-96 bg-base-100 shadow-xl">
		<figure><img src={user_data.profile_pic} alt="Profile Picture" /></figure>
		<div class="card-body">
			<h2 class="card-title">{user_data.username}</h2>
			<p>Major: {user_data.major}</p>
			<hr style="border: 1px solid tan" />
			<p>{user_data.description}</p>
			{#if show_contact_info}
				<p>Phone number: {user_data.phone}</p>
				<p>Email address: {user_data.email}</p>
			{:else}
				<p>(Contact info not yet available.)</p>
			{/if}
			<div class="card-actions justify-end">
				<button
					class={`btn btn-primary ` + (invite_enabled ? '' : 'btn-disabled')}
					on:click={onClickSendInvite}>Send Invite</button
				>
				<button
					class={`btn btn-primary ` + (accept_invite_enabled ? '' : 'btn-disabled')}
					on:click={onClickAcceptInvite}>Accept Invite</button
				>
			</div>
		</div>
	</div>
</div>
