import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { loginSchema } from '$lib/schema/auth';
import { zod4 } from 'sveltekit-superforms/adapters';
import { redirect } from '@sveltejs/kit';
import { authService } from '$lib/api/services/auth-service';

export const load = (async ({ cookies }) => {
	const accessToken = cookies.get('accessToken');

	if (accessToken) {
		throw redirect(302, '/');
	}

	return {
		form: await superValidate(zod4(loginSchema))
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod4(loginSchema));
		if (!form.valid) {
			return form;
		}

		try {
			const loginData = await authService.login({
				username: form.data.username,
				password: form.data.password
			});

			if (!loginData.accessToken) {
				form.errors.username = ['Login failed'];
				return form;
			}

			cookies.set('accessToken', loginData.accessToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: import.meta.env.PROD,
				maxAge: 60 * 60 * 24 * 30
			});

			console.log('Login success');
			throw redirect(302, '/');
		} catch (err) {
			if (err instanceof Error && err.name === 'Redirect') throw err;
			console.error('Server side login error:', err);
			return form;
		}
	}
};
