import { z } from "zod";
import { superValidate } from "sveltekit-superforms";
import { zod4 as zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

// 1. Definisikan Schema Validasi menggunakan Zod
const formSchema = z.object({
	name: z.string()
		.min(2, "Nama minimal 2 karakter")
		.max(50, "Nama maksimal 50 karakter"),
	email: z.string()
		.email("Format email tidak valid")
		.max(100, "Email terlalu panjang"),
	bio: z.string()
		.min(10, "Bio minimal 10 karakter")
		.max(200, "Bio maksimal 200 karakter"),
	framework: z.string().min(1, "Harap pilih framework"),
	features: z.array(z.string()).min(1, "Pilih minimal satu fitur"),
	notifications: z.boolean().default(false),
	marketing: z.string().min(1, "Harap pilih salah satu"),
	newsletter: z.boolean().default(true),
	terms: z.boolean().refine((v) => v === true, {
		message: "Anda harus menyetujui syarat dan ketentuan"
	})
});

export const load: PageServerLoad = async () => {
	// 2. Inisialisasi Form dengan superValidate
	const form = await superValidate(zod(formSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		// 3. Validasi data form yang dikirim
		const form = await superValidate(request, zod(formSchema));

		// 4. Periksa apakah form valid
		if (!form.valid) {
			return fail(400, { form });
		}

		// 5. Simulasi pemrosesan data (misal simpan ke database)
		console.log("Form Data Success:", form.data);

		// 6. Kembalikan pesan sukses
		return { form };
	}
};
