import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getTextDirection } from '$lib/paraglide/runtime';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { authService } from '$lib/api/services/auth-service';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html
					.replace('%paraglide.lang%', locale)
					.replace('%paraglide.dir%', getTextDirection(locale))
		});
	});

const handleAuth: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('accessToken');

	if (accessToken && !event.locals.user) {
		try {
			const userProfile = await authService.getUserProfile(accessToken);
			event.locals.user = userProfile;
		} catch (error) {
			console.error('Failed to resolve user profile from token:', error);
			event.locals.user = null;
			// Optional: delete invalid cookie
			event.cookies.delete('accessToken', { path: '/' });
		}
	} else if (!accessToken) {
		event.locals.user = null;
	}

	return resolve(event);
};

export const handle: Handle = sequence(handleAuth, handleParaglide);
