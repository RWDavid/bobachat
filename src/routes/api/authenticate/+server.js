import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { username } = await request.json();
  const { data } = await supabase
    .from('user')
    .select('id')
    .eq('username', username);
  

  if (data.length == 0) {
		throw error(404, {
			message: 'Not found'
		});
  }
  
	return json({ userid: data[0].id }); 
}
