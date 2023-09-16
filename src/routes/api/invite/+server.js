import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { sender_id, receiver_id } = await request.json();
  const { error } = await supabase
    .from('invite')
    .insert([{ sender_id: sender_id, receiver_id: receiver_id }])
    .select();

  return json({});
}
