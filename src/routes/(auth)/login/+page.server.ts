import { message, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from '../$types';
import { loginSchema } from '$lib/schema/auth';
import { zod4 } from 'sveltekit-superforms/adapters';
import { redirect } from '@sveltejs/kit';
import axios, { HttpStatusCode } from 'axios';
import type { User } from '$lib/types';

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

		console.log(form.data);

		const { status, data }: { status: HttpStatusCode; data: User } = await axios.post(
			'https://dummyjson.com/auth/login',
			{
				username: 'emilys',
				password: form.data.password,
				expiresInMins: 300
			},
			{ headers: { 'Content-Type': 'application/json' }, withCredentials: true }
		);

		console.log(status);
		console.log(data);

		if (status !== HttpStatusCode.Ok) {
			return message(form, 'Login gagal! Email atau password salah');
		}

		// Store the user ID in a cookie
		cookies.set('accessToken', data.accessToken, {
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
