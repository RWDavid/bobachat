import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	const userid = cookies.get('userid');
	if (userid == undefined) {
		throw redirect(307, '/');
	}
}
