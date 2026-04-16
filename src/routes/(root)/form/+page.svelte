<script lang="ts">
	import { superForm } from "sveltekit-superforms";
	import { toast } from "svelte-sonner";
	import { 
		LayoutGrid, 
		Layers, 
		Settings, 
		Database, 
		ShieldAlert, 
		CircleCheck, 
		AtSign, 
		ChevronDown, 
		Copy, 
		Info,
		Mail,
		Terminal,
		Code,
		Save,
		Eraser,
		FileCode,
		Globe,
		Bell,
		User
	} from "lucide-svelte";
	import Input from "$lib/components/shared/Input/Input.svelte";
	import { Select } from "$lib/components/shared/Select";
	import { Checkbox } from "$lib/components/shared/Checkbox";
	import Switch from "$lib/components/shared/Switch/Switch.svelte";
	import { RadioButtonGroup, RadioButtonItem } from "$lib/components/shared/RadioButton";
	import Textarea from "$lib/components/shared/Textarea/Textarea.svelte";
	import Badge from "$lib/components/shared/Badge/Badge.svelte";
	import { Accordion } from "$lib/components/shared/Accordion";
	import * as AccordionPrimitive from "$lib/components/ui/accordion";
	
	let { data } = $props();

	// 1. Inisialisasi superForm
	const { form, errors, constraints, message, enhance, delayed, reset } = superForm(data.form, {
		onUpdated: ({ form }) => {
			if (form.valid) {
				toast.success("Data berhasil disimpan!", {
					description: "Semua validasi telah terpenuhi.",
					duration: 5000
				});
			} else {
				toast.error("Gagal menyimpan data", {
					description: "Harap periksa kembali inputan Anda.",
					duration: 5000
				});
			}
		}
	});

	const frameworks = [
		{ value: "svelte", label: "Svelte 5", icon: Layers },
		{ value: "react", label: "React", icon: Layers },
		{ value: "vue", label: "Vue", icon: Layers },
		{ value: "angular", label: "Angular", icon: ShieldAlert, disabled: true },
	];

	const features = [
		{ value: "form", label: "Form Management", icon: Database },
		{ value: "auth", label: "Authentication", icon: Database },
		{ value: "api", label: "API Integration", icon: Database },
		{ value: "i18n", label: "Internationalization", icon: Database }
	];

	const serverCode = `<` + `script lang="ts">
  import { z } from "zod";
  import { superValidate } from "sveltekit-superforms";
  import { zod4 as zod } from "sveltekit-superforms/adapters";
  import { fail } from "@sveltejs/kit";

  const schema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email().max(100),
    bio: z.string().min(10).max(200)
  });

  export const load = async () => {
    const form = await superValidate(zod(schema));
    return { form };
  };

  export const actions = {
    default: async ({ request }) => {
      const form = await superValidate(request, zod(schema));
      if (!form.valid) return fail(400, { form });
      return { form };
    }
  };
</` + `script>`;

	const clientCode = `<` + `script lang="ts">
  import { superForm } from "sveltekit-superforms";
  import { Input } from "$lib/components/shared/Input";
  
  let { data } = $props();
  const { form, errors, enhance } = superForm(data.form);
</` + `script>

<form method="POST" use:enhance>
  <Input 
    label="Full Name" 
    bind:value={$form.name} 
    error={$errors.name} 
  />
  <button type="submit">Submit</button>
</form>`;
</script>

<svelte:head>
	<title>Form & Supervalidate | Visea Design System</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<ShieldAlert class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Architecture</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">Form & Supervalidate</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed text-pretty text-balance">
				Pelajari cara membangun formulir yang kuat, aman, dan aksesibel dengan mengintegrasikan komponen UI premium kami dengan <span class="bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-black italic">Superforms</span> dan <span class="bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-black italic">Zod</span>.
			</p>
		</div>

		<!-- Documentation Content -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
			
			<!-- Guide Section (Left) -->
			<div class="lg:col-span-12 space-y-12">
				
				<Accordion type="single" value="how-it-works" class="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
					<AccordionPrimitive.Item value="how-it-works" class="border-none">
						<AccordionPrimitive.Trigger class="px-8 py-6 hover:no-underline group [&[data-state=open]]:bg-neutral-50">
							<div class="flex items-center gap-4 text-left">
								<div class="p-3 bg-neutral-900 text-white rounded-2xl shadow-lg">
									<Terminal class="w-6 h-6" />
								</div>
								<div>
									<h3 class="text-xl font-black text-neutral-900 italic uppercase tracking-tighter">Cara Kerja & Setup</h3>
									<p class="text-sm font-medium text-neutral-500">Alur sinkronisasi data antar server dan klien.</p>
								</div>
							</div>
						</AccordionPrimitive.Trigger>
						<AccordionPrimitive.Content class="p-8 border-t border-neutral-100">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
								<div class="space-y-6">
									<h4 class="font-bold text-neutral-800 flex items-center gap-2">
										<FileCode class="w-4 h-4 text-blue-600" /> Server Side (+page.server.ts)
									</h4>
									<p class="text-sm text-neutral-600 leading-relaxed font-medium">
										Definisikan skema validasi menggunakan <span class="text-neutral-900 font-bold italic">Zod</span>. Gunakan <code class="text-blue-600 font-bold italic underline">superValidate</code> untuk membersihkan dan menstandarisasi data yang masuk.
									</p>
									<pre class="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 overflow-x-auto text-[13px] leading-relaxed shadow-xl"><code class="text-blue-300">{serverCode}</code></pre>
								</div>
								<div class="space-y-6">
									<h4 class="font-bold text-neutral-800 flex items-center gap-2">
										<Code class="w-4 h-4 text-blue-600" /> Client Side (+page.svelte)
									</h4>
									<p class="text-sm text-neutral-600 leading-relaxed font-medium">
										Hubungkan data form ke komponen UI menggunakan <code class="text-blue-600 font-bold italic underline">bind:value</code>. Tangkap error secara dinamis untuk feedback instan kepada pengguna.
									</p>
									<pre class="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 overflow-x-auto text-[13px] leading-relaxed shadow-xl"><code class="text-blue-300">{clientCode}</code></pre>
								</div>
							</div>
						</AccordionPrimitive.Content>
					</AccordionPrimitive.Item>
				</Accordion>

				<!-- Interactive Form Matrix (Showcase) -->
				<div class="bg-white rounded-[40px] shadow-2xl shadow-neutral-200/40 border border-neutral-100 overflow-hidden relative">
					<div class="p-10 border-b border-neutral-50 bg-neutral-50/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div class="flex items-center gap-5">
							<div class="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3">
								<Save class="w-7 h-7" />
							</div>
							<div>
								<h3 class="text-2xl font-black text-neutral-900 italic uppercase underline tracking-widest">Master Form Preview</h3>
								<p class="text-sm font-bold text-neutral-400 mt-0.5">Kitchen sink formulir menggunakan semua shared components.</p>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<div class="px-5 py-2.5 bg-green-50 text-green-600 rounded-2xl font-black text-xs border border-green-100 flex items-center gap-2">
								<CircleCheck class="w-4 h-4" /> Ready for API
							</div>
							<Badge variantColor="primary" badgeSize="large">Interactive Mode</Badge>
						</div>
					</div>

					<form method="POST" use:enhance class="p-10 lg:p-16">
						<!-- Form Info Banner -->
						<div class="mb-10 space-y-1 p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50 flex items-start gap-4">
							<div class="p-2 bg-blue-600 text-white rounded-xl shadow-lg mt-1">
								<ShieldAlert class="w-5 h-5" />
							</div>
							<div>
								<p class="text-base font-black text-blue-900 uppercase italic tracking-tight">Aturan Validasi Aktif</p>
								<p class="text-[13px] text-blue-700 font-medium leading-relaxed italic">Seluruh field di bawah ini adalah <span class="underline decoration-2">WAJIB</span>. Kami menerapkan batas karakter maksimal (Name: 50, Email: 100, Bio: 200) untuk mendemonstrasikan validasi Zod yang ketat.</p>
							</div>
						</div>

						<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
							
							<!-- Column 1: Personal Data -->
							<div class="space-y-10 group/section">
								<div class="flex items-center gap-3 border-b border-neutral-100 pb-4">
									<LayoutGrid class="w-5 h-5 text-neutral-300 group-hover/section:text-blue-600 transition-colors" />
									<span class="text-xs font-black uppercase tracking-[3px] text-neutral-400">Personal Information</span>
								</div>

								<div class="space-y-8">
									<Input 
										label="Nama Lengkap (Wajib)" 
										placeholder="Masukkan nama Anda (Maks. 50)..."
										bind:value={$form.name}
										error={$errors.name}
									>
										{#snippet prefix()}
											<User class="w-4 h-4 text-neutral-400" />
										{/snippet}
									</Input>

									<Input 
										label="Email Bisnis (Wajib)" 
										type="email"
										placeholder="contoh@perusahaan.com"
										bind:value={$form.email}
										error={$errors.email}
									>
										{#snippet prefix()}
											<Mail class="w-4 h-4 text-neutral-400" />
										{/snippet}
									</Input>

									<Textarea 
										label="Bio Singkat (Wajib)" 
										placeholder="Ceritakan tentang diri Anda (10 - 200 karakter)..."
										bind:value={$form.bio}
										error={$errors.bio}
									/>
								</div>
							</div>

							<!-- Column 2: Selections & Preferences -->
							<div class="space-y-10 group/section">
								<div class="flex items-center gap-3 border-b border-neutral-100 pb-4">
									<Settings class="w-5 h-5 text-neutral-300 group-hover/section:text-blue-600 transition-colors" />
									<span class="text-xs font-black uppercase tracking-[3px] text-neutral-400">Preferences & Settings</span>
								</div>

								<div class="space-y-8">
									<Select 
										label="Framework Utama (Wajib)"
										placeholder="Pilih teknologi favorit"
										items={frameworks}
										bind:value={$form.framework}
										error={$errors.framework}
									>
										{#snippet prefix()}
											<Code class="w-4 h-4 text-neutral-400 shrink-0" />
										{/snippet}
									</Select>

									<Select 
										label="Fitur yang Dibutuhkan (Minimal 1)"
										type="multiple"
										placeholder="Pilih minimal satu fitur"
										items={features}
										bind:value={$form.features}
										error={$errors.features?._errors}
									/>

									<RadioButtonGroup 
										label="Metode Marketing Preferensi"
										orientation="horizontal"
										bind:value={$form.marketing}
										error={$errors.marketing}
									>
										<RadioButtonItem value="email" label="Email" />
										<RadioButtonItem value="social" label="Social" />
										<RadioButtonItem value="ads" label="Ads" />
									</RadioButtonGroup>

									<div class="space-y-6 pt-4 bg-neutral-50/50 p-8 rounded-[32px] border border-neutral-100/50">
										<Switch 
											label="Notifikasi Real-time" 
											description="Dapatkan notifikasi langsung di dashboard."
											bind:checked={$form.notifications}
										/>

										<Checkbox 
											label="Langganan Newsletter Mingguan" 
											description="Update fitur terbaru langsung ke email Anda."
											bind:checked={$form.newsletter}
										/>

										<div class="pt-4 border-t border-neutral-200">
											<Checkbox 
												label="Saya menyetujui Syarat & Ketentuan (Wajib)" 
												bind:checked={$form.terms}
												error={$errors.terms}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Form Actions -->
						<div class="mt-20 pt-10 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8 bg-neutral-900 p-12 rounded-[32px] shadow-2xl">
							<div class="flex items-center gap-6">
								<div class="flex flex-col">
									<span class="text-xs font-black text-blue-400 uppercase tracking-widest italic mb-1">Status Validasi</span>
									<div class="flex items-center gap-3">
										<div class="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
										<span class="text-xl font-bold text-white tracking-tight italic">Ready to Sync</span>
									</div>
								</div>
								<div class="h-10 w-px bg-white/10 hidden md:block"></div>
								<p class="text-neutral-400 text-xs font-medium max-w-[200px] leading-relaxed italic uppercase">Data akan diamankan dengan validasi server-side otomatis.</p>
							</div>

							<div class="flex items-center gap-4 w-full md:w-auto">
								<button 
									type="button" 
									onclick={() => reset()}
									class="flex-1 md:flex-none px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-sm tracking-tight transition-all border border-white/10 flex items-center justify-center gap-2"
								>
									<Eraser class="w-4 h-4" /> Reset
								</button>
								<button 
									type="submit" 
									disabled={$delayed}
									class="flex-1 md:flex-none px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm tracking-widest uppercase italic transition-all group flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 active:scale-95 disabled:opacity-50"
								>
									{#if $delayed}
										<Database class="w-5 h-5 animate-spin" /> Sedang Mengirim...
									{:else}
										<Save class="w-5 h-5 group-hover:scale-110 transition-transform" /> Simpan Data
									{/if}
								</button>
							</div>
						</div>
					</form>
				</div>

			</div>
		</div>

		<!-- Footer Tips -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-blue-600 p-8 rounded-[32px] text-white shadow-xl space-y-4">
				<div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
					<AtSign class="w-6 h-6" />
				</div>
				<h4 class="text-lg font-black italic uppercase tracking-tight">Binding State</h4>
				<p class="text-blue-100 text-[13px] font-medium leading-relaxed italic uppercase">
					Gunakan <code class="bg-blue-700/50 px-1 rounded">$form.field</code> untuk menyambungkan state form secara efisien dengan prop bind:value pada komponen kami.
				</p>
			</div>

			<div class="bg-neutral-900 p-8 rounded-[32px] text-white shadow-xl space-y-4">
				<div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
					<ShieldAlert class="w-6 h-6" />
				</div>
				<h4 class="text-lg font-black italic uppercase tracking-tight italic">Error Handling</h4>
				<p class="text-neutral-400 text-[13px] font-medium leading-relaxed italic uppercase">
					Komponen kami telah dioptimasi untuk mendeteksi prop <code class="bg-white/5 px-1 rounded">$errors.field</code> dan menampilkan pesan error dengan layout yang presisi.
				</p>
			</div>

			<div class="bg-white p-8 rounded-[32px] border border-neutral-200 shadow-xl space-y-4">
				<div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
					<CircleCheck class="w-6 h-6" />
				</div>
				<h4 class="text-lg font-black italic uppercase tracking-tight text-neutral-900 italic">Success Messaging</h4>
				<p class="text-neutral-500 text-[13px] font-medium leading-relaxed italic uppercase">
					Integrasikan dengan <code class="bg-neutral-50 px-1 rounded font-black italic uppercase">Toast</code> shared component untuk memberikan konfirmasi keberhasilan submit kepada pengguna.
				</p>
			</div>
		</div>

	</div>
</div>

<style>
	:global(body) {
		background-color: #f9fafb;
	}
</style>
