import { isRedirect, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { authService } from '$lib/api/services/auth-service';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const accessToken = cookies.get('accessToken');

	if (accessToken) {
		try {
			// On the server, we need to pass the token to the service since js-cookie doesn't work here
			const user = await authService.getUserProfile(accessToken);

			if (user) {
				throw redirect(302, '/');
			}
		} catch (err) {
			if (isRedirect(err)) throw err;

			// If error (invalid token), clear it
			cookies.delete('accessToken', { path: '/' });
			console.error('Failed to verify token in layout:', err);
		}
	}

	return {};
};
