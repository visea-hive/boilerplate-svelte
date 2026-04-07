<script lang="ts">
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
		CircleCheck
	} from "lucide-svelte";

</script>

<svelte:head>
	<title>Sidebar | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Sidebar premium dengan arsitektur data-driven dan desain modern." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<LayoutDashboard class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Navigation System</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Sidebar (Dinamis)</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Sistem navigasi utama yang ditenagai oleh data-driven architecture. Sidebar ini menggunakan <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">Svelte Snippets</code> untuk fleksibilitas rendering yang luar biasa.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight flex items-center gap-3 italic underline underline-offset-4 decoration-blue-100">
							Live Production Preview
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Lihat sidebar di sebelah kiri sebagai representasi nyata.</p>
					</div>
					<div class="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black flex items-center gap-2 border border-emerald-100 italic">
						<CircleCheck class="w-4 h-4 ml-1" /> Fully Operational
					</div>
				</div>

				<div class="p-10 bg-neutral-50/20">
					<div class="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 shadow-sm text-blue-900 leading-relaxed max-w-3xl">
						<p class="font-medium text-lg leading-relaxed">
							Sidebar yang aktif di antarmuka ini <strong>adalah hasil nyata</strong> dari pemuatan <code class="bg-white/50 px-2 rounded italic">Sidebar.svelte</code>. 
							Arsitektur kami memungkinkan Anda untuk memetakan menu kompleks langsung dari data API tanpa perulangan HTML yang membingungkan.
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Implementation Guide -->
		<div class="bg-white p-10 rounded-3xl shadow-sm border border-neutral-200 space-y-10">
			<h2 class="text-2xl font-black text-neutral-900 mb-8 pb-4 border-b border-neutral-100 italic underline decoration-blue-200 underline-offset-8">Implementation Guide</h2>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div class="space-y-4">
					<div class="flex items-center gap-3 text-blue-600">
						<Settings class="size-5" />
						<span class="text-sm font-black uppercase tracking-widest italic">Data Mapping</span>
					</div>
					<div class="bg-neutral-900 p-6 rounded-[32px] shadow-2xl overflow-x-auto text-xs border border-neutral-800">
						<pre class="text-blue-100"><code>{`<script>
  const navItems = [
    { title: "Home", icon: Home, url: "/" },
    { isSeparator: true },
    { 
       title: "Admin", 
       icon: Users,
       subItems: [{ title: "Roles" }] 
    }
  ];
</script>

<Sidebar items={navItems} />`}</code></pre>
					</div>
					<p class="text-xs text-neutral-500 italic font-medium">Ubah array navItems untuk merubah struktur menu secara instan.</p>
				</div>

				<div class="space-y-4">
					<div class="flex items-center gap-3 text-amber-600">
						<Component class="size-5" />
						<span class="text-sm font-black uppercase tracking-widest italic">Custom Footer</span>
					</div>
					<div class="bg-neutral-900 p-6 rounded-[32px] shadow-2xl overflow-x-auto text-xs border border-neutral-800">
						<pre class="text-amber-100"><code>{`<Sidebar {items}>
  {#snippet footerSnippet()}
    <div class="p-4 bg-blue-50 text-blue-800 rounded">
       <span class="text-xs font-bold text-center">Settings</span>
    </div>
  {/snippet}
</Sidebar>`}</code></pre>
					</div>
					<p class="text-xs text-neutral-500 italic font-medium">Gunakan snippet footerSnippet untuk kustomisasi area footer.</p>
				</div>
			</div>
		</div>

		<!-- Sidebar Sizing -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<LayoutDashboard class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Global Width Config
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Sesuaikan lebar sidebar di seluruh sistem melalui file konfigurasi tunggal. Konfigurasi ini mengatur variabel CSS kustom untuk konsistensi di versi desktop dan mobile.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`// src/lib/components/ui/sidebar/constants.ts

export const SIDEBAR_WIDTH = "16rem";      // Saat terbuka
export const SIDEBAR_WIDTH_ICON = "4rem";  // Saat kolaps`}</code></pre>
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
