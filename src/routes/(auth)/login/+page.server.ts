import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from '../$types';
import { loginSchema } from '$lib/schema/auth';
import { zod4 } from 'sveltekit-superforms/adapters';
import { redirect } from '@sveltejs/kit';

const userList = [
	{
		id: '1',
		email: 'super@mail.com',
		password: 'Paspot2026',
		name: 'Super Admin'
	}
];

export const load = (async () => {
	return {
		form: await superValidate(zod4(loginSchema))
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod4(loginSchema));
		if (!form.valid) {
			return form;
		}

		const user = userList.find(
			(u) => u.email === form.data.email && u.password === form.data.password
		);
		if (!user) {
			form.errors.email = ['Invalid email or password'];
			return form;
		}

		// Store the user ID in a cookie
		cookies.set('userId', user.id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		console.log('Login success');

		redirect(302, '/');

		return form;
	}
};
