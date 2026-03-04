import type { Handle } from '@sveltejs/kit';
import type { HttpStatusCode } from 'axios';
import type { User } from './types';
import axios from 'axios';

export const handleAuth: Handle = async ({ event, resolve }) => {
	// if (event.locals.user) {
	// 	return resolve(event);
	// }

	const accessToken = event.cookies.get('accessToken');

	if (!accessToken) {
		event.locals.user = null;
		return resolve(event);
	}

	console.log(accessToken);

	const { status, data }: { status: HttpStatusCode; data: User } = await axios.get(
		'https://dummyjson.com/auth/me',
		{
			headers: { Authorization: `Bearer ${accessToken}` },
			withCredentials: true
		}
	);

	if (status !== 200) {
		console.log(status);
		console.log('no user');

		event.locals.user = null;

		return resolve(event);
	}

	console.log('user: ', data);

	event.locals.user = data;

	// const userId = event.cookies.get('userId');

	// if (userId && !event.locals.user) {
	// 	event.locals.user = userList.find((u) => u.id === userId) || null;
	// }

	return resolve(event);
};
