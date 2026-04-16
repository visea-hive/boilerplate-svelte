<script lang="ts">
	import Badge from "$lib/components/shared/Badge/Badge.svelte";
	import { 
		ArrowLeftCircle, 
		ArrowRightCircle,
		LayoutGrid,
		Settings,
		Code,
		CircleCheck,
		ShieldAlert,
		Layers,
		Type,
		MousePointerClick,
		Info,
		Tag
	} from "lucide-svelte";
	
	// Masing-masing baris merepresentasikan tema / kategori warna
	const designRows = [
		{ id: "row-1", color: "success" as const },
		{ id: "row-2", color: "warning" as const },
		{ id: "row-3", color: "danger" as const },
		{ id: "row-4", color: "neutral" as const },
		{ id: "row-5", color: "primary" as const }
	];

	const sizes = [
		{ name: "Large", value: "large" as const },
		{ name: "Default", value: "default" as const },
		{ name: "Small", value: "small" as const }
	];
</script>

<svelte:head>
	<title>Badge | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Badge premium dengan berbagai varian warna dan ukuran otomatis." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Tag class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Badge Components</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen Badge (Pill) interaktif yang elegan. Dibangun di atas Shadcn dengan desain bulat penuh (`rounded-full`) dan skema warna yang sangat kontras untuk informasi status yang cepat.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Design Matrix Showcase
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Audit visual untuk semua varian warna dan ukuran.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100 italic">
						<MousePointerClick class="w-4 h-4 ml-1" /> Visual Testing
					</div>
				</div>

				<!-- Simulasi Background Abu-Abu dari Gambar -->
				<div class="p-10 bg-[#CDD0D4] overflow-x-auto min-h-[500px]">
					<div class="flex flex-col items-center gap-16 min-w-max mx-auto">
						{#each designRows as row (row.id)}
							<div class="space-y-8 flex flex-col items-center w-full">
								{#each sizes as size (size.value)}
									<div class="flex items-center gap-12 border-b border-white/10 pb-4 w-full justify-center">
										<!-- Text Only -->
										<div class="w-40 flex justify-start">
											<Badge variantColor={row.color} badgeSize={size.value}>
												Label Badges
											</Badge>
										</div>
										
										<!-- Icon Left -->
										<div class="w-44 flex justify-center">
											<Badge variantColor={row.color} badgeSize={size.value} iconPosition="left" icon={ArrowLeftCircle}>
												Label Badges
											</Badge>
										</div>
										
										<!-- Icon Right -->
										<div class="w-44 flex justify-center">
											<Badge variantColor={row.color} badgeSize={size.value} iconPosition="right" icon={ArrowRightCircle}>
												Label Badges
											</Badge>
										</div>
										
										<!-- Icon Only -->
										<div class="w-20 flex justify-center">
											<Badge variantColor={row.color} badgeSize={size.value} iconPosition="only" icon={ArrowRightCircle} aria-label="Icon Only Badge" />
										</div>
									</div>
								{/each}
							</div>
						{/each}
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100">variantColor</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 text-pretty">"success" | "warning" | "danger" | "neutral" | "primary"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"success"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Merubah identitas warna Badge berdasarkan status feedback.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">badgeSize</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">"large" | "default" | "small"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"default"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100 text-pretty">Merubah proporsi font dan padding Badge secara otomatis.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Tag class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Implementasi lencana status yang sangat reaktif dengan penempatan ikon otomatis. Dirancang untuk memperjelas konteks informasi bagi pengguna.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`<script>
  import { Badge } from "$lib/components/shared/Badge";
  import { ShieldCheck } from "lucide-svelte";
</script>

<Badge 
  variantColor="success" 
  badgeSize="large" 
  icon={ShieldCheck} 
  iconPosition="left"
>
  Verified Account
</Badge>`}</code></pre>
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
