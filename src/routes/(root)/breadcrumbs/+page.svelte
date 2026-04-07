<script lang="ts">
	import { Breadcrumbs } from "$lib/components/shared/Breadcrumbs";
	import { 
		LayoutGrid, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Layers,
		Type,
		ChevronRight,
		MousePointerClick
	} from "lucide-svelte";

	let items1 = [
		{ label: "Label Menu", href: "#" },
		{ label: "Menu Active" }
	];

	let items2 = [
		{ label: "Label Menu", href: "#" },
		{ label: "Label Menu", href: "#" },
		{ label: "Menu Active" }
	];

	let items3 = [
		{ label: "Label Menu", href: "#" },
		{ label: "Label Menu", href: "#" },
		{ label: "Label Menu", href: "#" },
		{ label: "Label Menu", href: "#" },
		{ label: "Menu Active" }
	];

	let manyItems = [
		{ label: "Home", href: "#" },
		{ label: "Dashboard", href: "#" },
		{ label: "Products", href: "#" },
		{ label: "Electronics", href: "#" },
		{ label: "Mobile Phones", href: "#" },
		{ label: "iPhone 15 Pro Max" }
	];
</script>

<svelte:head>
	<title>Breadcrumbs | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Breadcrumbs premium untuk navigasi hirarkis dengan desain minimalis dan logis." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12 text-pretty leading-relaxed">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<LayoutGrid class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">Breadcrumbs</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Breadcrumbs premium yang sangat fungsional dan estetis. Dirancang untuk membantu pengguna memahami lokasi mereka dalam hirarki situs tanpa distraksi visual.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight text-pretty">Breadcrumbs Showroom</h2>
						<p class="text-sm text-neutral-500 mt-1">Simulasi navigasi berbagai kedalaman hirarki sesuai dengan referensi desain.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Interactive Demo
					</div>
				</div>

				<div class="p-10">
					<div class="grid grid-cols-1 gap-16">
						
						<!-- Basic States -->
						<div class="space-y-10">
							<div class="bg-neutral-50 p-10 rounded-2xl border border-neutral-100 space-y-8">
								
								<div class="space-y-4">
									<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Default Two Items</p>
									<Breadcrumbs items={items1} />
								</div>

								<div class="space-y-4">
									<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Short Nested</p>
									<Breadcrumbs items={items2} />
								</div>

								<div class="space-y-4">
									<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Long Nested (Auto Ellipsis Off)</p>
									<Breadcrumbs items={items3} maxItems={10} />
								</div>

								<div class="space-y-4">
									<p class="text-xs font-bold text-neutral-400 uppercase tracking-widest italic">Auto Ellipsis (Default maxItems: 5)</p>
									<Breadcrumbs items={manyItems} />
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">items</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">BreadcrumbItem[]</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">[]</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Array objek {`{ label: string; href?: string; }`}. Item terakhir otomatis menjadi aktif.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">maxItems</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">number</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">5</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold font-black italic underline">Menentukan jumlah maksimum item sebelum dikompres menjadi ellipsis (...).</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<LayoutGrid class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Navigasi hirarkis yang cerdas dengan Svelte 5. Mendukung pangkasan dinamis untuk desain antarmuka yang bersih.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Breadcrumbs } from "$lib/components/shared/Breadcrumbs";
  let items = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "Profile" }
  ];
</script>

<Breadcrumbs {items} maxItems={4} />`}</code></pre>
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
