<script lang="ts">
	import { Dropdown } from "$lib/components/shared/Dropdown";
	import { 
		LayoutGrid, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Layers,
		Type,
		MousePointerClick,
		User,
		LogOut,
		Mail,
		PlusCircle,
		Trash2,
		Share2,
		Copy,
		MoreHorizontal,
		Archive,
		Pencil,
		Heart
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";

	const basicSections = [
		{
			items: [
				{ label: "Profil Pengguna", icon: User },
				{ label: "Pengaturan Akun", icon: Settings },
				{ label: "Undang Teman", icon: PlusCircle, shortcut: "⌘U" },
			]
		}
	];

	const complexSections = [
		{
			label: "Manajemen File",
			items: [
				{ label: "Salin Tautan", icon: Copy, onClick: () => console.log("Copied") },
				{ label: "Bagikan Ke...", icon: Share2 },
				{ label: "Ubah Nama", icon: Pencil, shortcut: "F2" }
			]
		},
		{
			items: [
				{ label: "Simpan ke Arsip", icon: Archive },
				{ label: "Tambahkan ke Favorit", icon: Heart },
			]
		},

	];

	const imageReferenceSections = [
		{
			items: Array.from({ length: 7 }, (_, i) => ({
				label: "Label",
				icon: Trash2,
				rightIcon: Trash2,
				onClick: () => console.log(`Deleted item ${i + 1}`)
			}))
		}
	];
</script>

<svelte:head>
	<title>Dropdown | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Dropdown premium untuk pilihan menu kontekstual dengan desain interaktif dan dinamis." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12 text-pretty leading-relaxed">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<ShieldAlert class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Dropdown</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Dropdown premium yang sangat fungsional dan estetis. Dirancang untuk menyediakan aksi kontekstual dengan hierarki visual yang jelas melalui penggunaan ikon, shortcut, dan pemisah seksi.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Dropdown Showroom</h2>
						<p class="text-sm text-neutral-500 mt-1">Eksplorasi fungsionalitas menu drop-down yang dinamis dalam berbagai skenario.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Click to Toggle
					</div>
				</div>

				<div class="p-10">
					<div class="flex flex-wrap items-center gap-10">
						
						<!-- Basic Setup -->
						<div class="space-y-4">
							<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Default Trigger</p>
							<Dropdown sections={basicSections} />
						</div>

						<!-- With Sections & Danger -->
						<div class="space-y-4">
							<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Complex Sections (⌘)</p>
							<Dropdown 
								sections={complexSections} 
								triggerLabel="Aksi File"
								align="start"
							/>
						</div>

						<!-- Image Match -->
						<div class="space-y-4">
							<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Reference Image Match</p>
							<Dropdown 
								sections={imageReferenceSections}
								triggerLabel="Daftar List"
								contentClass="w-80"
							/>
						</div>

						<!-- Custom Trigger -->
						<div class="space-y-4">
							<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Snippet Trigger</p>
							<Dropdown sections={basicSections}>
								{#snippet trigger()}
									<Button variant="ghost" size="icon" class="rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600">
										<MoreHorizontal class="w-5 h-5" />
									</Button>
								{/snippet}
							</Dropdown>
						</div>

					</div>
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
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Prop</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Type</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Default</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-50 font-medium">
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 italic underline">sections</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">DropdownSection[]</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">[]</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Struktur item dalam dropdown, dikelompokkan per seksi (opsional label seksi).</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">triggerLabel</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"Pilih Opsi"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Label tombol jika menggunakan trigger bawaan.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">align</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">"start" | "center" | "end"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"end"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Penyelarasan horizontal menu terhadap tombol trigger.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<ShieldAlert class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Implementasi dropdown berbasis struktur data di Svelte 5. Mendukung pemisahan seksi yang elegan untuk pengaturan fungsional.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Dropdown } from "$lib/components/shared/Dropdown";
  import { Trash2, User } from "lucide-svelte";
  
  let sections = [{
    items: [
      { label: "Profile", icon: User },
      { label: "Delete Account", icon: Trash2, variant: "danger" }
    ]
  }];
</script>

<Dropdown {sections} align="start" />`}</code></pre>
				</div>
			</div>
		</div>

	</div>
</div>

<style>
	:global(body) {
		background-color: #f9fafb;
	}
</style>
