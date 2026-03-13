<script lang="ts">
	import { Mail, Phone, MessageCircle } from '@lucide/svelte';
	import { Input } from '$lib/components/ui/input/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import * as Form from '$lib/components/ui/form/index';
	import { superForm, defaults } from 'sveltekit-superforms';
	import { zod4Client, zod4 } from 'sveltekit-superforms/adapters';
	import { z } from 'zod';

	const contactSchema = z.object({
		name: z.string().min(1, 'Nama wajib diisi'),
		email: z.string().email('Format email tidak valid'),
		subject: z.string().min(1, 'Subjek wajib diisi'),
		message: z.string().min(1, 'Pesan wajib diisi').max(150, 'Maksimal 150 karakter')
	});

	interface Props {
		title?: string;
		email?: string;
		phone?: string;
		whatsapp?: string;
		locationName?: string;
		locationAddress?: string;
		mapEmbedUrl?: string;
	}

	let {
		title = 'Hubungi Tim Kami',
		email = 'Email@alazhar.com',
		phone = '021-XXXXXX',
		whatsapp = '0813xxxxxxxx',
		locationName = 'Al Azhar Regol Bandung',
		locationAddress = 'Jalan Pasirluyu Selatan, RT 07/RW 05, Kel. Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat',
		mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5471413813813!2d107.60833331535492!3d-6.944641994982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e89ebd9287c9%3A0xcb06f54c9ea91147!2sAl%20Azhar%20Regol%20Bandung!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid'
	}: Props = $props();

	const form = superForm(defaults(zod4(contactSchema)), {
		SPA: true,
		validators: zod4Client(contactSchema),
		onUpdate({ form }) {
			if (form.valid) {
				console.log('Pesan terkirim:', form.data);
				// Logika pengiriman pesan diletakkan di sini
			}
		}
	});

	const { form: formData, enhance } = form;

	let maxChars = 150;
</script>

<div class="mx-auto w-full px-4 md:px-6">
	<h2 class="mb-6 text-3xl font-extrabold text-[#4A4A4A] md:text-[32px]">{title}</h2>

	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<!-- Form Container -->
		<div class="flex flex-col rounded-[20px] border border-[#F0F0F0] bg-[#FAFAFA] p-6 text-left lg:p-8">
			<form method="POST" use:enhance class="flex flex-col gap-4">
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-[14px] font-bold text-[#4A4A4A]">Nama Anda</Form.Label>
							<Input
								{...props}
								bind:value={$formData.name}
								placeholder="Nama lengkap anda"
								class="rounded-xl border-[#E5E5E5] bg-white px-4 py-6 text-[14px] text-gray-700 placeholder:text-[#A0A0A0] focus-visible:ring-1 focus-visible:ring-[#8A8470]"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="email">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-[14px] font-bold text-[#4A4A4A]">Email</Form.Label>
							<Input
								{...props}
								bind:value={$formData.email}
								placeholder="Email aktif anda"
								type="email"
								class="rounded-xl border-[#E5E5E5] bg-white px-4 py-6 text-[14px] text-gray-700 placeholder:text-[#A0A0A0] focus-visible:ring-1 focus-visible:ring-[#8A8470]"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="subject">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-[14px] font-bold text-[#4A4A4A]">Subjek</Form.Label>
							<Input
								{...props}
								bind:value={$formData.subject}
								placeholder="Tujuan pesan anda"
								class="rounded-xl border-[#E5E5E5] bg-white px-4 py-6 text-[14px] text-gray-700 placeholder:text-[#A0A0A0] focus-visible:ring-1 focus-visible:ring-[#8A8470]"
							/>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="message">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label class="text-[14px] font-bold text-[#4A4A4A]">Pesan</Form.Label>
							<div class="relative">
								<Textarea
									{...props}
									bind:value={$formData.message}
									placeholder="Tuliskan pesan anda di sini"
									rows={4}
									maxlength={maxChars}
									class="min-h-[120px] resize-none rounded-xl border-[#E5E5E5] bg-white px-4 py-4 pb-10 text-[14px] text-gray-700 placeholder:text-[#A0A0A0] focus-visible:ring-1 focus-visible:ring-[#8A8470]"
								/>
								<span class="absolute bottom-3 right-4 text-[13px] font-medium text-[#A0A0A0]">
									{($formData.message || '').length}/{maxChars}
								</span>
							</div>
						{/snippet}
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Button
					type="submit"
					class="mt-2 w-full rounded-full bg-[#8D8671] px-6 py-6 text-[15px] font-semibold text-white transition-all hover:bg-[#787260] active:scale-[0.98]"
				>
					Kirim Pesan Sekarang
				</Form.Button>
			</form>
		</div>

		<!-- Contact Info Container -->
		<div class="flex flex-col rounded-[20px] border border-[#F0F0F0] bg-[#FAFAFA] p-6 lg:p-8">
			<h3 class="mb-5 text-[18px] font-bold text-[#4A4A4A]">Kontak Lainnya</h3>

			<div class="mb-8 flex flex-col gap-3.5">
				<div class="flex items-center gap-2.5 text-[#666666]">
					<Mail class="h-4 w-4 shrink-0 opacity-80" />
					<span class="text-[14px] font-medium">{email}</span>
				</div>
				<div class="flex items-center gap-2.5 text-[#666666]">
					<Phone class="h-4 w-4 shrink-0 opacity-80" />
					<span class="text-[14px] font-medium">{phone}</span>
				</div>
				<div class="flex items-center gap-2.5 text-[#666666]">
					<MessageCircle class="h-4 w-4 shrink-0 opacity-80" />
					<span class="text-[14px] font-medium">{whatsapp}</span>
				</div>
			</div>

			<!-- Map Container -->
			<div class="relative mt-auto h-[260px] w-full min-h-[260px] overflow-hidden rounded-[16px] md:h-full md:min-h-[300px]">
				<!-- Background Map -->
				<iframe
					src={mapEmbedUrl}
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen={false}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Location Map"
					class="absolute inset-0 object-cover"
				></iframe>

				<!-- Floating Location Card -->
				<div class="pointer-events-none relative z-10 flex h-full items-end p-4 lg:p-5">
					<div class="w-full rounded-[14px] bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-5">
						<h4 class="mb-1.5 text-[15px] font-bold text-[#4A4A4A]">{locationName}</h4>
						<p class="text-[13px] leading-relaxed text-[#666666]">
							{locationAddress}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
