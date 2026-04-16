<script lang="ts">
	import { Accordion, AccordionItem } from '$lib/components/shared/Accordion';
	import { 
		LayoutGrid, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Layers,
		Type,
		MousePointerClick,
		ChevronDown,
		ChevronUp,
		Plus,
		Minus,
		PanelTop
	} from "lucide-svelte";

</script>

<svelte:head>
	<title>Accordion | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Accordion premium untuk pengelompokan konten yang rapi dan interaktif." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<PanelTop class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Accordion</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen penutup konten (Collapsible) premium. Dirancang untuk mengelola tumpukan informasi besar dengan cara yang bersih, terorganisir, dan menyenangkan.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Showroom Interactive
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Eksplorasi manajemen konten multi-seksi.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100 italic">
						<MousePointerClick class="w-4 h-4 ml-1" /> Click to Expand
					</div>
				</div>

				<div class="p-10 bg-white">
					<div class="max-w-4xl mx-auto space-y-10">
						<Accordion type="single" collapsible value="item-1">
							<AccordionItem value="item-1" title="Hero Banner Configuration">
								<div class="space-y-6 pt-2">
									<div class="space-y-2">
										<label class="text-sm font-bold text-neutral-800 italic" for="headline">Headline</label>
										<input id="headline" placeholder="Masukkan headline utama..." class="w-full bg-neutral-50 border-neutral-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 outline-none transition-all placeholder:italic" />
									</div>
									<div class="grid grid-cols-2 gap-4">
										<div class="aspect-video bg-neutral-50 rounded-xl border border-dashed border-neutral-200 flex flex-col items-center justify-center gap-2 text-neutral-400">
											<div class="w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center">
												<Plus class="size-5" />
											</div>
											<span class="text-[11px] font-black uppercase tracking-widest">Upload Asset</span>
										</div>
										<div class="aspect-video bg-neutral-100 rounded-xl flex items-center justify-center text-[11px] font-bold text-neutral-300 italic uppercase">Preview Area</div>
									</div>
								</div>
							</AccordionItem>
							<AccordionItem value="item-2" title="SEO Settings & Metadata">
								<div class="p-4 bg-neutral-50 rounded-xl border border-neutral-100 text-sm text-neutral-500 italic font-medium leading-relaxed">
									Panel ini dikhususkan untuk pengaturan optimasi mesin pencari. Gunakan teks deskriptif yang kaya akan kata kunci untuk performa maksimal.
								</div>
							</AccordionItem>
							<AccordionItem value="item-3" title="Advanced Developer Mode" description="Akses kontrol JSON mentah dan log aktivitas sistem.">
								<div class="p-6 bg-neutral-900 rounded-2xl font-mono text-[11px] text-blue-300 leading-relaxed shadow-inner">
									{`{ "debug": true, "env": "production", "monitoring": "enabled" }`}
								</div>
							</AccordionItem>
						</Accordion>
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
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100 italic">Prop</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Type</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Default</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-50 font-medium">
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100">type</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">"single" | "multiple"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"single"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Menentukan kemandirian pembukaan item (tunggal atau simultan).</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">collapsible</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">boolean</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">true</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100 text-pretty">Memungkinkan item tunggal untuk ditutup kembali ke posisi nol.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<PanelTop class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Memisahkan konten kompleks ke dalam seksi interaktif. Menjadikan antarmuka lebih bersih dan berfokus pada apa yang penting bagi pengguna.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Accordion, AccordionItem } from "$lib/components/shared/Accordion";
</script>

<Accordion type="single" collapsible value="item-1">
  <AccordionItem value="item-1" title="Question 1">
    <p>This is the answer for your question.</p>
  </AccordionItem>
</Accordion>`}</code></pre>
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
