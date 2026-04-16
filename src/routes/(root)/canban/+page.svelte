<script lang="ts">
	import { Canban, type CanbanColumnData } from "$lib/components/shared/Canban";
	import {
		Columns,
		MousePointerClick,
		Layers,
		Code,
		UserCircle,
		PenTool
	} from "lucide-svelte";

	let initialColumns: CanbanColumnData[] = [
		{
			id: "col-new",
			title: "New",
			colorClass: "bg-blue-800",
			items: [
				{
					id: "item-1",
					title: "Alya Putri Widya",
					subtitle: "Budi Santoso",
					badge: "SMP",
					statusLabel: "New Lead",
					statusVariant: "default",
					messages: 2,
					taskStatus: "Incomplete",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
				},
				{
					id: "item-2",
					title: "Robby Putra Siregar",
					subtitle: "Markus Kurniawan",
					badge: "SMP",
					statusLabel: "Awaiting Contact",
					statusVariant: "default",
					messages: 1,
					taskStatus: "Completed",
					lastUpdated: "15 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
				},
				{
					id: "item-3",
					title: "Raffi Achmad Teguh",
					subtitle: "Siska Meriska Puguh",
					badge: "SD",
					statusLabel: "Unassigned",
					statusVariant: "default",
					messages: 0,
					taskStatus: "Incomplete",
					lastUpdated: "16 Apr"
				},
				{
					id: "item-4",
					title: "Fauzan Azima",
					subtitle: "Beby Putri Aninda",
					badge: "SMP"
				}
			]
		},
		{
			id: "col-contacted",
			title: "Contacted",
			colorClass: "bg-blue-500",
			items: [
				{
					id: "item-5",
					title: "Reskia Bobby",
					subtitle: "Mochi Oreoska Putri",
					badge: "SMP",
					statusLabel: "First Contact",
					statusVariant: "default",
					messages: 1,
					taskStatus: "Completed",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
				},
				{
					id: "item-6",
					title: "Kozimo Muzlimat",
					subtitle: "Ahmad Soebardjo Nashihan",
					badge: "SD",
					statusLabel: "Follow-up 2",
					statusVariant: "default",
					messages: 2,
					taskStatus: "Completed",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
				}
			]
		},
		{
			id: "col-interested",
			title: "Interested",
			colorClass: "bg-blue-600",
			items: [
				{
					id: "item-7",
					title: "Nobita Doriaka",
					subtitle: "Ki Jong Woon",
					badge: "SMP",
					statusLabel: "Interested",
					statusVariant: "success",
					messages: 1,
					taskStatus: "Completed",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
				}
			]
		},
		{
			id: "col-enrollment",
			title: "Enrollment",
			colorClass: "bg-neutral-400",
			items: [
				{
					id: "item-8",
					title: "Robby Darwis",
					subtitle: "Mariana Sigunggung",
					badge: "SD",
					statusLabel: "Registration",
					statusVariant: "default",
					messages: 1,
					taskStatus: "Completed",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=male"
				}
			]
		},
		{
			id: "col-lost",
			title: "Lost",
			colorClass: "bg-red-500",
			items: [
				{
					id: "item-9",
					title: "Mawardika Cantika",
					subtitle: "Lusiana Mawardika",
					badge: "SD",
					statusLabel: "No Response",
					statusVariant: "danger",
					messages: 1,
					taskStatus: "Completed",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
				},
				{
					id: "item-10",
					title: "Serinn Salsabila",
					subtitle: "Ridho Gumelar",
					badge: "Sd",
					statusLabel: "Price Issue",
					statusVariant: "danger",
					messages: 1,
					taskStatus: "Completed",
					lastUpdated: "17 Apr",
					avatar: "https://xsgames.co/randomusers/avatar.php?g=female"
				}
			]
		}
	];

	// Duplicate to avoid mutations across showcases
	let demoColumns1 = $state(JSON.parse(JSON.stringify(initialColumns)));
	let demoColumns2 = $state(JSON.parse(JSON.stringify(initialColumns.slice(0, 2)))); // for custom snippet demo
</script>

<svelte:head>
	<title>Canban | Visea Design System</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12 text-pretty leading-relaxed">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Columns class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Canban Board</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen manajemen proyek berorientasi papan kanban. Dilengkapi fungsional drag-and-drop dinamis dengan memanfaatkan <code>svelte-dnd-action</code> dan kapabilitas slot/snippet untuk kustomisasi tingkat lanjut.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Interactive Board Reference
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Implementasi replika visual persis seperti referensi desain UI.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100 italic">
						<MousePointerClick class="w-4 h-4" /> Drag to Move
					</div>
				</div>

				<div class="p-10 bg-neutral-100/50">
					<!-- Area Kanban -->
					<div class="h-[600px] bg-[#f8f9fa] rounded-3xl p-6 border border-neutral-200/60 shadow-inner overflow-hidden">
						<Canban bind:columns={demoColumns1} />
					</div>
				</div>
			</div>
		</div>

		<!-- Custom Snippet Demo -->
		<div class="bg-white rounded-3xl shadow-sm border border-neutral-200 overflow-hidden mt-8">
			<div class="p-6 border-b border-neutral-100 bg-neutral-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
				<div class="flex items-center gap-3">
					<PenTool class="w-5 h-5 text-neutral-400" />
					<h2 class="text-lg font-bold text-neutral-800 tracking-tight italic">Custom Snippet (Svelte 5)</h2>
				</div>
				<p class="text-xs font-medium text-neutral-500">Kustomisasi rendering card</p>
			</div>
			
			<div class="p-8 bg-neutral-50/30 h-[400px]">
				<Canban bind:columns={demoColumns2}>
					{#snippet cardSnippet(item)}
						<!-- Custom Design Minimalis -->
						<div class="p-3 bg-white border border-neutral-200 shadow-sm rounded-xl cursor-grab hover:border-blue-300 transition-colors">
							<div class="flex justify-between items-center">
								<h4 class="font-bold text-sm text-blue-900">{item.title}</h4>
								<span class="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">{item.badge}</span>
							</div>
							<p class="text-xs text-neutral-500 mt-1 flex items-center gap-2">
								<UserCircle class="w-3.5 h-3.5"/> {item.subtitle}
							</p>
						</div>
					{/snippet}
				</Canban>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">columns</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">CanbanColumnData[]</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">[]</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Array object yang berisi definisi kolom beserta `items` di dalamnya. Direkomendasikan memakai <code class="bg-white text-blue-600 px-1 py-0.5 rounded border border-blue-100">bind:columns</code></td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">cardSnippet</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">Snippet&lt;[any]&gt;</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100">Custom UI renderer. Abaikan prop ini untuk menggunakan default layout bawaan Al-Azhar.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">dragDuration</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">number</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">200</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Durasi animasi drag &amp; drop (MS).</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Code class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Gunakan <code class="text-white bg-black px-1 py-0.5 rounded">bind:columns</code> agar data akan langsung ter-update di parent state secara otomatis ketika kartu dipindahkan.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`<script>
  import { Canban } from "$lib/components/shared/Canban";
  
  let myColumns = $state([{
    id: "todo",
    title: "To Do",
    items: [
      { id: "1", title: "Task 1", subtitle: "User A" }
    ]
  }]);
</script>

<Canban bind:columns={myColumns} />`}</code></pre>
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
