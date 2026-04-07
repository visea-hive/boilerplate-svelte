<script lang="ts">
	import Modal from "$lib/components/shared/Modal/Modal.svelte";
	import Button from "$lib/components/shared/button/Button.svelte";
	import { Input } from "$lib/components/ui/input/index";
	import { Label } from "$lib/components/ui/label/index";
	import { 
		LayoutTemplate, 
		Layers,
		MousePointer2,
		Settings,
		Mail,
		Lock
	} from "lucide-svelte";
	
	let openBasic = $state(false);
	let openForm = $state(false);
	let openCustom = $state(false);
</script>

<svelte:head>
	<title>Modal | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Modal dengan dukungan kustomisasi header, body, dan footer." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<LayoutTemplate class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Modal / Dialog</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen jendela dialog interaktif. Terdiri dari <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">Header</code>, <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">Body (content)</code>, dan <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">Footer</code> yang sepenuhnya dapat dikustomisasi dengan Svelte 5 Snippets.
			</p>
		</div>

		<!-- Main Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<!-- Basic Usage -->
			<div class="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Basic Modal
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Penggunaan dasar dengan judul dan deskripsi</p>
					</div>
				</div>
				<div class="p-10 flex justify-center items-center h-48 bg-neutral-50/50">
					<Modal 
						bind:open={openBasic} 
						title="Konfirmasi Tindakan" 
						description="Apakah Anda yakin ingin melanjutkan proses ini? Data yang sudah tersimpan tidak bisa dibatalkan."
					>
						{#snippet trigger()}
							<Button variantStyle="soft" variantColor="primary">Buka Modal Dasar</Button>
						{/snippet}
						{#snippet footer()}
							<Button variantStyle="ghost" variantColor="gray" onclick={() => openBasic = false}>Batal</Button>
							<Button variantStyle="solid" variantColor="primary" onclick={() => openBasic = false}>Lanjutkan</Button>
						{/snippet}
					</Modal>
				</div>
			</div>

			<!-- With Form (Custom Body) -->
			<div class="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Kustomisasi Body (Form)
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Modal dengan form login di dalam content</p>
					</div>
				</div>
				<div class="p-10 flex justify-center items-center h-48 bg-neutral-50/50">
					<Modal 
						bind:open={openForm}
						title="Masuk ke Akun"
						description="Masukkan email dan password Anda untuk melanjutkan."
					>
						{#snippet trigger()}
							<Button variantStyle="solid" variantColor="dark">Tampilkan Form Modal</Button>
						{/snippet}
						{#snippet content()}
							<div class="space-y-4 py-2">
								<div class="space-y-2">
									<Label for="email">Email</Label>
									<Input id="email" type="email" placeholder="nama@email.com" />
								</div>
								<div class="space-y-2">
									<Label for="password">Password</Label>
									<Input id="password" type="password" placeholder="••••••••" />
								</div>
							</div>
						{/snippet}
						{#snippet footer()}
							<Button class="w-full" variantStyle="solid" variantColor="primary" onclick={() => openForm = false}>Masuk Sekarang</Button>
						{/snippet}
					</Modal>
				</div>
			</div>

			<!-- Advanced Customization -->
			<div class="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Advanced Customization
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Kustomisasi header, content state, dan elemen footer secara menyeluruh</p>
					</div>
				</div>
				<div class="p-10 flex justify-center items-center h-48 bg-[#CDD0D4]">
					<Modal 
						bind:open={openCustom}
						contentClass="sm:max-w-lg"
					>
						{#snippet trigger()}
							<Button variantStyle="white" variantColor="primary" icon={Settings} iconPosition="left">
								Pengaturan Lanjutan
							</Button>
						{/snippet}
						
						<!-- Karena props title & description tidak diisi, kita bebas mengisi header/isi dari awal di dalam content -->
						{#snippet content()}
							<div class="text-center pt-8 pb-4">
								<div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Settings class="w-8 h-8 text-blue-600" />
								</div>
								<h3 class="text-2xl font-black text-slate-800">Sistem Terintegrasi</h3>
								<p class="text-slate-500 mt-2 text-sm max-w-sm mx-auto">
									Anda dapat mengatur integrasi sistem secara langsung dari panel ini tanpa harus meninggalkan aplikasi.
								</p>
							</div>
							<div class="p-4 bg-slate-50 rounded-xl mt-2 mx-2 border border-slate-100">
								<div class="flex items-center justify-between py-2 border-b border-slate-200">
									<span class="text-sm font-semibold text-slate-600">Notifikasi Email</span>
									<div class="w-10 h-5 bg-blue-500 rounded-full relative"><div class="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
								</div>
								<div class="flex items-center justify-between py-2">
									<span class="text-sm font-semibold text-slate-600">Autentikasi 2 Langkah</span>
									<div class="w-10 h-5 bg-slate-300 rounded-full relative"><div class="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div></div>
								</div>
							</div>
						{/snippet}

						{#snippet footer()}
							<div class="w-full flex items-center justify-between">
								<span class="text-xs text-slate-400">ID: #SYS-899120</span>
								<div class="flex gap-2">
									<Button variantStyle="soft" variantColor="gray" onclick={() => openCustom = false}>Tutup</Button>
									<Button variantStyle="solid" variantColor="primary" onclick={() => openCustom = false}>Simpan Perubahan</Button>
								</div>
							</div>
						{/snippet}
					</Modal>
				</div>
			</div>
		</div>

		<!-- API Reference Table -->
		<div class="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
			<div class="p-6 border-b border-neutral-100 bg-neutral-50/50 flex items-center gap-3">
				<Layers class="w-5 h-5 text-neutral-400" />
				<h2 class="text-lg font-bold text-neutral-800 tracking-tight italic">API Reference Props</h2>
			</div>
			
			<div class="overflow-x-auto">
				<table class="w-full text-left border-collapse">
					<thead class="bg-neutral-50/50">
						<tr>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100 italic">Prop / Snippet</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Type</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-50 font-medium">
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline">bind:open</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">boolean</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Status terbuka atau tertutupnya modal.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">title</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">string</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Teks judul pada header modal.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">description</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">string</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Teks deskripsi di bawah judul pada header modal.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">trigger</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">Snippet</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Elemen pemicu (contoh: tombol) yang akan membuka modal saat di-klik.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">content</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">Snippet</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Isi bagian utama (body) dari modal.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">footer</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">Snippet</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Bagian kaki (footer) modal, umumnya berisi tombol aksi.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

	</div>
</div>

<style>
	:global(body) {
		background-color: #f9fafb;
	}
</style>
