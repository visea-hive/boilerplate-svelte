<script lang="ts">
	import Switch from "$lib/components/shared/Switch/Switch.svelte";
	import { 
		ToggleLeft, 
		ToggleRight, 
		LayoutList, 
		Settings2,
		ShieldAlert,
		Type,
		Layers,
		Code,
		MousePointerClick,
		Settings,
		LayoutGrid,
		Component,
		MessageSquare,
		Zap
	} from "lucide-svelte";
	import { Badge } from "$lib/components/ui/badge";

	let notificationsOn = $state(true);
	let themeDark = $state(false);
	let autoUpdate = $state(false);

</script>

<svelte:head>
	<title>Switch | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Switch premium untuk penggantian status biner (On/Off) dengan transisi halus." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty leading-relaxed">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Zap class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Switch Components</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen saklar (*toggle*) kustom untuk merubah status biner secara elegan. Dirancang dengan transisi halus dan dukungan aksesibilitas label penuh yang menunjang interaksi modern.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Switch Showroom
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Audit fase visual On, Off, dan Disabled.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100 italic">
						<MousePointerClick class="w-4 h-4 ml-1" /> Interactive Toggle
					</div>
				</div>

				<div class="p-10 bg-white">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						
						<!-- Visual States Matrix -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-neutral-400 mb-4">
								<Settings class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Visual Phase Matrix</span>
							</div>
							<div class="bg-neutral-50/50 p-8 rounded-[32px] border border-neutral-100 space-y-6">
								<div class="flex items-center justify-between p-4 bg-white rounded-2xl border border-neutral-50 shadow-sm transition-colors hover:border-blue-100 group">
									<span class="text-[11px] font-black uppercase text-neutral-400 tracking-widest group-hover:text-neutral-600 transition-colors">Off State</span>
									<Switch label="Disabled Option" checked={false} />
								</div>
								<div class="flex items-center justify-between p-4 bg-blue-50/30 rounded-2xl border border-blue-100/50 shadow-sm">
									<span class="text-[11px] font-black uppercase text-blue-500 tracking-widest">Active State</span>
									<Switch label="Active Option" checked={true} />
								</div>
								<div class="flex items-center justify-between p-4 bg-neutral-100/30 rounded-2xl border border-neutral-100 border-dashed opacity-60">
									<span class="text-[11px] font-black uppercase text-neutral-300 tracking-widest italic font-medium">Locked State</span>
									<Switch label="System Option" checked={true} disabled />
								</div>
							</div>
						</div>

						<!-- Live Simulator -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<Zap class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider italic">Real-time Interaction</span>
							</div>
							<div class="bg-neutral-900 p-8 rounded-[40px] shadow-2xl space-y-6 border border-neutral-800">
								<div class="flex flex-col gap-4 border-b border-neutral-800 pb-6 mb-4">
									<h4 class="text-xs font-black text-neutral-500 uppercase tracking-widest italic">System Preferences</h4>
									<div class="flex flex-col gap-5">
										<Switch label="Menerima Notifikasi" bind:checked={notificationsOn} />
										<Switch label="Gunakan Dark Mode" bind:checked={themeDark} />
										<Switch label="Sinkronisasi Otomatis" bind:checked={autoUpdate} />
									</div>
								</div>
								<div class="bg-blue-900/20 p-4 rounded-2xl border border-blue-500/10 text-center">
									<p class="text-[10px] text-blue-400 font-bold uppercase tracking-widest italic leading-relaxed">
										User Consent: {notificationsOn ? 'Confirmed' : 'Pending'}
									</p>
								</div>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100 underline-offset-4">bind:checked</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">boolean</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">false</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Gunakan bind untuk sinkronisasi status On/Off secara reaktif.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">label</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">""</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100 text-pretty italic font-medium">Teks pendamping saklar yang menyatu dengan label aksesibilitas.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Zap class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Memisahkan kontrol sistem biner dengan transisi desain yang halus. Sempurna untuk pengaturan preferensi pengguna yang membutuhkan feedback instan.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`<script>
  import { Switch } from "$lib/components/shared/Switch";
  let isActive = $state(true);
</script>

<Switch 
  label="Activate License" 
  bind:checked={isActive} 
/>`}</code></pre>
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
