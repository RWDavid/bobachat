import { supabase } from "$lib/supabaseClient";
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const userid = cookies.get('userid');
	if (userid == undefined) {
		throw redirect(307, '/');
	}
  const { data } = await supabase.from("user").select().neq("id", userid);
  return {
    users: data ?? [],
  };
}
