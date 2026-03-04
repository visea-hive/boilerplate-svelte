// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

type User = {
	id: string;
	name: string;
	email: string;
};

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
