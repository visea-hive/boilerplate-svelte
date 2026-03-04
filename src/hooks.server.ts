import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getTextDirection } from '$lib/paraglide/runtime';
import { paraglideMiddleware } from '$lib/paraglide/server';

const userList = [
	{
		id: '1',
		email: 'super@mail.com',
		password: 'Paspot2026',
		name: 'Super Admin'
	}
];

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
	const userId = event.cookies.get('userId');

	if (userId && !event.locals.user) {
		event.locals.user = userList.find((u) => u.id === userId) || null;
	}

	return resolve(event);
};

export const handle: Handle = sequence(handleAuth, handleParaglide);
