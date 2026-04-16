<script lang="ts">
	import { Tab, TabList, TabTrigger, TabContent } from '$lib/components/shared/Tab';
	import { 
		LayoutDashboard, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Layers,
		Type,
		MousePointerClick,
		LayoutGrid,
		PanelTop,
		ListFilter,
		Settings2,
		MessageSquare,
		Zap
	} from "lucide-svelte";

</script>

<svelte:head>
	<title>Tab | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Tab premium dengan desain underline yang elegan dan arsitektur modular." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<ListFilter class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Tab System</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Sistem tab navigasi premium dengan desain garis bawah (*underline*) yang subtil. Menghadirkan pengelompokan konten yang teratur dengan transisi status yang sangat halus.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Tab Showroom
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Audit visual navigasi konten berbasis seksi.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100 italic">
						<MousePointerClick class="w-4 h-4 ml-1" /> Multi-Content
					</div>
				</div>

				<div class="p-10 bg-white">
					<div class="max-w-4xl mx-auto space-y-10">
						<Tab value="active" class="w-full">
							<TabList class="gap-10">
								<TabTrigger value="active" class="gap-2">
									<CircleCheck class="size-5" />
									Active List (5.204)
								</TabTrigger>
								<TabTrigger value="inactive" class="gap-2">
									<ShieldAlert class="size-5" />
									Pending Review (24)
								</TabTrigger>
								<TabTrigger value="settings" class="gap-2">
									<Settings2 class="size-5" />
									Tab Config
								</TabTrigger>
							</TabList>

							<TabContent value="active" class="mt-8">
								<div class="p-8 rounded-[32px] bg-neutral-900 shadow-2xl border border-neutral-800 space-y-6">
									<div class="flex items-center justify-between border-b border-neutral-800 pb-4">
										<h3 class="text-lg font-black text-white italic uppercase tracking-tighter">Production Overview</h3>
										<div class="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest italic">Live Status</div>
									</div>
									<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
										Berisi informasi terkini mengenai data aset yang aktif. Seluruh list ini diperbarui secara otomatis melalui transmisi websocket real-time.
									</p>
								</div>
							</TabContent>

							<TabContent value="inactive" class="mt-8">
								<div class="p-8 rounded-[32px] bg-red-50/50 border border-red-100/50 space-y-4">
									<h3 class="text-lg font-black text-red-600 italic">Audit Log</h3>
									<p class="text-red-700/70 text-sm italic font-semibold leading-relaxed">
										Daftar entri yang membutuhkan perhatian khusus dari administrator. Harap verifikasi ulang dokumen sebelum melanjutkan status ke tahap aktif.
									</p>
								</div>
							</TabContent>
						</Tab>
					</div>
				</div>
			</div>
		</div>

		<!-- API Reference Table -->
		<div class="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden">
			<div class="p-6 border-b border-neutral-100 bg-neutral-50/50 flex items-center gap-3">
				<Layers class="w-5 h-5 text-neutral-400" />
				<h2 class="text-lg font-bold text-neutral-800 tracking-tight italic">API Reference Structure</h2>
			</div>
			
			<div class="overflow-x-auto">
				<table class="w-full text-left border-collapse">
					<thead class="bg-neutral-50/50">
						<tr>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100 italic">Element</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Prop</th>
							<th class="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-neutral-100">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-neutral-50 font-medium">
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-[13px] font-black text-neutral-800 italic">Tab (Root)</td>
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">value</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Nilai default tab mana yang aktif saat inisialisasi awal.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-[13px] font-black text-neutral-800 italic text-pretty italic font-medium">TabTrigger</td>
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100">value</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100 text-pretty">Identifier unik yang menghubungkan pemicu dengan panel konten.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<ListFilter class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Memisahkan lapisan konten secara modular. Memastikan navigasi yang jelas antar grup data dalam satu tampilan tanpa membebani muatan kognitif pengguna.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`<script>
  import { Tab, TabList, TabTrigger, TabContent } from "$lib/components/shared/Tab";
</script>

<Tab value="pribadi">
  <TabList>
    <TabTrigger value="pribadi">Personal</TabTrigger>
    <TabTrigger value="pekerjaan">Company</TabTrigger>
  </TabList>
  
  <TabContent value="pribadi">Content 1</TabContent>
  <TabContent value="pekerjaan">Content 2</TabContent>
</Tab>`}</code></pre>
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
