<script lang="ts">
	import { showToast } from "$lib/components/shared/Toast/toast.svelte";
	import iconCheck from "$lib/assets/icons/toast/icon-check.svg?url";
	import iconClose from "$lib/assets/icons/toast/icon-close.svg?url";
	import iconInfo from "$lib/assets/icons/toast/icon-info.svg?url";
	import iconQuestion from "$lib/assets/icons/toast/icon-question.svg?url";
	import { 
		Play, 
		CircleCheck, 
		ShieldAlert, 
		Info, 
		HelpCircle,
		LayoutGrid,
		Settings,
		Code,
		Layers,
		Type,
		MousePointerClick,
		Bell
	} from "lucide-svelte";
	
	function triggerSuccess() {
		showToast({
			type: 'success',
			title: 'Berhasil Disimpan',
			message: 'Perubahan data sistem telah berhasil disimpan ke dalam database Anda.',
			duration: 4000
		});
	}

	function triggerDanger() {
		showToast({
			type: 'danger',
			title: 'Akses Ditolak',
			message: 'Anda tidak memiliki kredensial yang valid untuk melakukan aksi ini.',
			duration: 4000
		});
	}

	function triggerInfo() {
		showToast({
			type: 'info',
			title: 'Pembaruan Tersedia',
			message: 'Versi terbaru Visea Dashboard (v2.4.1) telah siap dipasang. Mohon muat ulang.',
			duration: 4000
		});
	}

	function triggerQuestion() {
		showToast({
			type: 'question',
			title: 'Hapus Data Permanen?',
			message: 'Tindakan ini tidak bisa dibatalkan apakah Anda yakin ingin melanjutkan?',
			duration: 5000
		});
	}

	const toastVariants = [
		{ label: "Success Toast", action: triggerSuccess, color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100", icon: CircleCheck },
		{ label: "Danger Toast", action: triggerDanger, color: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100", icon: ShieldAlert },
		{ label: "Info Toast", action: triggerInfo, color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100", icon: Info },
		{ label: "Question Toast", action: triggerQuestion, color: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100", icon: HelpCircle }
	];
</script>

<svelte:head>
	<title>Toast | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Toast premium untuk notifikasi global yang elegan dan informatif." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Bell class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Toast Notifications</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Sistem notifikasi global yang mengutamakan kecepatan dan kejelasan informasi. Diadaptasi penuh dari <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">svelte-sonner</code> dengan visualisasi brand yang kuat.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden relative group">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight italic underline underline-offset-4 decoration-blue-100">
							Live Alert Playground
						</h2>
						<p class="text-sm text-neutral-500 mt-1 italic">Uji coba instan transmisi notifikasi ke lapisan UI.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black flex items-center gap-2 border border-blue-100 italic">
						<Play class="w-4 h-4 ml-1 animate-pulse" /> Click to Trigger
					</div>
				</div>

				<div class="p-10 bg-white">
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{#each toastVariants as variant (variant.label)}
							<button 
								class="group flex flex-col items-center justify-center p-8 border rounded-[32px] transition-all duration-300 shadow-sm active:scale-95 {variant.color}"
								onclick={variant.action}
							>
								<div class="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500">
									<variant.icon class="w-8 h-8 opacity-80" />
								</div>
								<span class="font-black text-[15px] uppercase tracking-tighter italic">{variant.label}</span>
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Local Asset Showcase -->
		<div class="bg-white p-10 rounded-3xl shadow-sm border border-neutral-200 space-y-10">
			<h2 class="text-2xl font-black text-neutral-900 mb-8 pb-4 border-b border-neutral-100 italic underline decoration-blue-200 underline-offset-8">Custom Local Assets</h2>
			
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{#each [{ ic: iconCheck, n: 'Check', f: 'icon-check.svg' }, { ic: iconClose, n: 'Close', f: 'icon-close.svg' }, { ic: iconInfo, n: 'Info', f: 'icon-info.svg' }, { ic: iconQuestion, n: 'Question', f: 'icon-question.svg' }] as item}
					<div class="flex items-center gap-5 p-6 border border-neutral-50 bg-neutral-50 rounded-2xl group hover:border-blue-200 transition-colors">
						<div class="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center p-3 transition-all group-hover:rotate-6">
							<img src={item.ic} alt={item.n} class="w-full h-full object-contain" />
						</div>
						<div>
							<p class="font-black text-neutral-800 text-sm uppercase tracking-widest">{item.n}</p>
							<p class="text-[10px] text-neutral-400 font-mono italic">{item.f}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Bell class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Implementation
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium italic">
						Picu notifikasi dari mana saja (Script atau Logic). Toast akan secara otomatis menyelaraskan ikon, judul, dan durasi sesuai konfigurasi Anda.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed font-mono">{`import { showToast } from "$lib/components/shared/Toast/toast.svelte";

showToast({
  type: 'success',
  title: 'Data Saved',
  message: 'Operational database updated successfully.'
});`}</code></pre>
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
