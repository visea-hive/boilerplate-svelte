<script lang="ts">
	import { Navbar } from '$lib/components/shared/Navbar';
	import type { BreadcrumbItem, UserProfile } from '$lib/components/shared/Navbar/Navbar.svelte';
	import { 
		LayoutDashboard,
		ShieldAlert,
		Type,
		Layers,
		Code,
		MousePointerClick,
		Settings,
		Home,
		Users,
		LayoutGrid,
		Component,
		Search,
		Bell,
		User,
		CircleCheck
	} from "lucide-svelte";

	// Contoh Data Dinamis 1: Root ke Settings
	const breadcrumbsDefault: BreadcrumbItem[] = [
		{ label: 'Label Menu', url: '#' },
		{ label: 'Menu Active', isActive: true }
	];

	// Data User
	const userData: UserProfile = {
		name: 'Richardoatkitns',
		role: 'Super Admin',
		avatar: 'https://xsgames.co/randomusers/avatar.php?g=male'
	};

	let bindSearchValue = $state('');
</script>

<svelte:head>
	<title>Navbar | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Navbar premium dengan integrasi Breadcrumb dan Global Search." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<LayoutGrid class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Navigation System</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Navbar</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Header Navigasi teratas dengan Breadcrumb, Global Search, Notification Indicator, dan Profil Dropdown yang sepenuhnya dikendalikan via Data/Props.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Live Contextual Navbar
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Representasi nyata komponen dalam layout aplikasi.</p>
					</div>
					<div class="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black flex items-center gap-2 border border-emerald-100 italic">
						<CircleCheck class="w-4 h-4 ml-1" /> Active Indicator
					</div>
				</div>

				<div class="p-10 bg-neutral-50/20">
					<div class="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm mb-10">
						<Navbar
							breadcrumbs={breadcrumbsDefault}
							user={userData}
							searchPlaceholder="Cari Sesuatu..."
							hasNotification={true}
							bind:searchValue={bindSearchValue}
						/>
						<div class="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
							<span class="text-xs font-bold text-neutral-400 uppercase tracking-widest">Search State Preview</span>
							<span class="text-[13px] font-black text-blue-600 italic">"{bindSearchValue || 'Idle'}"</span>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">breadcrumbs</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">BreadcrumbItem[]</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">[]</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Koleksi item navigasi bertahap di sisi kiri.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">user</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">UserProfile</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100 text-pretty">Informasi identitas pengguna untuk area profil dropdown.</td>
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
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Konfigurasi Navbar melalui arsitektur berbasis data. Mendukung sinkronisasi state pencarian global secara instan.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`<script>
  import { Navbar } from "$lib/components/shared/Navbar";
  
  let keyword = $state("");
  const items = [{ label: "Dashboard", isActive: true }];
  const profile = { name: "John", role: "Admin" };
</script>

<Navbar 
  breadcrumbs={items} 
  user={profile} 
  bind:searchValue={keyword} 
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
