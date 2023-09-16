import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit';

export async function load({ cookies, params }) {
	const userid = cookies.get('userid');
	if (userid == undefined) {
		throw redirect(307, '/');
	}

	let { data } = await supabase.from("user").select().eq('id', params.userid);
	let user_data = data[0];
	({ data } = await supabase.from("invite").select().eq('sender_id', userid).eq('receiver_id', params.userid));
	let sent_invite_data = data[0];
	({ data } = await supabase.from("invite").select().eq('sender_id', params.userid).eq('receiver_id', userid));
	let received_invite_data = data[0];

	return {
		data: { user_data, sent_invite_data, received_invite_data }
	}
}
