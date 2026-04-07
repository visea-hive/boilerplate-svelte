<script lang="ts">
	import { Select } from "$lib/components/shared/Select";
	import { 
		MousePointerClick, 
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
		Globe,
		Bell,
		User,
		LayoutGrid
	} from "lucide-svelte";

	let selectedValue = $state("");
	let framework = $state("svelte");
	let statusValue = $state("success");
	let multiValue = $state(["svelte", "react"]);

	const frameworks = [
		{ value: "svelte", label: "Svelte 5", icon: Layers },
		{ value: "react", label: "React", icon: Layers },
		{ value: "vue", label: "Vue", icon: Layers },
		{ value: "angular", label: "Angular", icon: ShieldAlert, disabled: true },
	];

	const statusOptions = [
		{ value: "success", label: "Diterima", icon: CircleCheck },
		{ value: "error", label: "Ditolak", icon: ShieldAlert },
		{ value: "pending", label: "Menunggu", icon: Info },
	];

	const multiItems = [
		{ value: "svelte", label: "Svelte 5", icon: Layers },
		{ value: "react", label: "React", icon: Layers },
		{ value: "vue", label: "Vue", icon: Layers },
		{ value: "next", label: "Next.js", icon: Globe },
		{ value: "vite", label: "Vite", icon: Settings },
		{ value: "bun", label: "Bun", icon: Database }
	];

	const sampleCode = '<script' + '>\n  import { Select } from "$lib/components/shared/Select";\n  import { Layers } from "lucide-svelte";\n  \n  let value = $state(["svelte", "react"]);\n  const items = [\n    { value: "svelte", label: "Svelte 5", icon: Layers },\n    { value: "react", label: "React", icon: Layers },\n    { value: "vue", label: "Vue", icon: Layers }\n  ];\n</script' + '>\n\n<Select \n  label="Pilih Framework"\n  type="multiple"\n  maxDisplay={2}\n  items={items} \n  bind:value={value} \n/>';
</script>

<svelte:head>
	<title>Select | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Select premium untuk pemilihan data dinamis dengan desain yang bersih dan responsif." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<ChevronDown class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">Select</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed text-pretty text-balance">
				Komponen pemilihan dropdown premium yang bersih, aksesibel, dan sangat kustom. 
				Mendukung pemilihan tunggal maupun ganda (*multi-select*), ikon di setiap item, dan status validasi dinamis.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Visual Matrix Select</h2>
						<p class="text-sm text-neutral-500 mt-1">Eksplorasi berbagai status, ukuran, dan variasi visual komponen select.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Click to Test
					</div>
				</div>

				<div class="p-10">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
						
						<!-- Size Variant -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-neutral-400 mb-4">
								<Settings class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider text-black">Control Sizes</span>
							</div>
							<div class="flex flex-col gap-8">
								<Select 
									size="small"
									label="Small Select" 
									items={frameworks} 
									bind:value={framework} 
									placeholder="Pilih kecil..."
								/>
								<Select 
									size="default"
									label="Default Select" 
									items={frameworks} 
									bind:value={framework} 
								/>
								<Select 
									size="large"
									label="Large Select" 
									items={frameworks} 
									bind:value={framework} 
								/>
							</div>
						</div>

						<!-- Multi Selection & Display -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<LayoutGrid class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider text-black">Multi-Selection Display</span>
							</div>
							<div class="flex flex-col gap-8 text-black">
								<Select 
									label="Framework Terpilih" 
									type="multiple"
									maxDisplay={2}
									items={multiItems} 
									bind:value={multiValue} 
								/>
								<Select 
									label="Display Limit: 1" 
									type="multiple"
									maxDisplay={1}
									items={multiItems} 
									bind:value={multiValue} 
								/>
								<div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
									<p class="text-xs font-bold text-blue-400 uppercase mb-4 tracking-widest italic">Multi Value Preview</p>
									<div class="flex flex-wrap gap-2">
										{#each multiValue as val (val)}
											<span class="text-[10px] font-bold bg-white px-2 py-1 rounded border border-blue-200 text-blue-700 font-mono italic uppercase">{val}</span>
										{/each}
									</div>
								</div>
							</div>
						</div>

						<!-- Special States -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-red-500 mb-4">
								<ShieldAlert class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider text-black">Special States</span>
							</div>
							<div class="flex flex-col gap-8">
								<Select 
									label="Disabled State" 
									disabled
									items={frameworks} 
									placeholder="Anda tidak bisa memilih ini"
								/>
								<Select 
									label="With Placeholder Icon" 
									items={frameworks} 
									bind:value={selectedValue}
									placeholder="Tentukan pilihanmu..."
								>
									{#snippet prefix()}
										<AtSign class="w-4 h-4 text-neutral-400" />
									{/snippet}
								</Select>
								<Select 
									label="Status Error" 
									status="error"
									feedbackMsg="Wajib memilih satu opsi"
									items={frameworks} 
								/>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<!-- API Reference Table -->
		<div class="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
			<div class="p-6 border-b border-neutral-100 bg-neutral-50/50 flex items-center gap-3">
				<Layers class="w-5 h-5 text-neutral-400" />
				<h2 class="text-lg font-bold text-neutral-800 tracking-tight">API Reference Props</h2>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 italic">type</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">"single" | "multiple"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"single"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Menentukan mode pemilihan tunggal atau banyak sekaligus.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline">value</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 font-bold italic underline">string | string[]</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic underline">Nilai terpilih. Menjadi array string jika `type="multiple"`.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">maxDisplay</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">number</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">2</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Limit badge item yang terlihat pada trigger sebelum diganti "+N more".</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">status</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">"default" | "error" | "success"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"default"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Mengubah gaya visual berdasarkan konteks validasi formulir.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<ChevronDown class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm text-black">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Gunakan tipe `multiple` untuk memungkinkan pengguna memilih lebih dari satu opsi sekaligus dengan representasi badge yang rapi.
					</p>
					<button class="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border border-white/10 group/btn">
						<Copy class="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Copy Snippet
					</button>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{sampleCode}</code></pre>
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
