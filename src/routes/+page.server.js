import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const username = cookies.get('username');
	if (username != undefined) {
		throw redirect(307, '/search');
	}
}
