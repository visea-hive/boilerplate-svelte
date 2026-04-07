<script lang="ts">
	import { 
		LayoutTemplate, 
		Palette, 
		Component, 
		Box, 
		MousePointerClick, 
		PanelTop, 
		ToggleLeft,
		CheckSquare,
		FormInput,
		MessageSquare,
		Layers
	} from 'lucide-svelte';

	const componentCategories = [
		{
			title: 'Foundations',
			description: 'Basis visual dari design system, mengatur struktur dasar, warna, dan tipografi.',
			icon: Palette,
			color: 'text-fuchsia-600',
			bgColor: 'bg-fuchsia-50',
			borderColor: 'border-fuchsia-100',
			components: [
				{ name: 'Colors Palette', path: '/colors' }
			]
		},
		{
			title: 'Form & Input',
			description: 'Komponen interaktif untuk pengumpulan data dari pengguna dengan validasi dan feedback.',
			icon: FormInput,
			color: 'text-blue-600',
			bgColor: 'bg-blue-50',
			borderColor: 'border-blue-100',
			components: [
				{ name: 'Input', path: '/input' },
				{ name: 'Select', path: '/select' },
				{ name: 'Textarea', path: '/textarea' },
				{ name: 'Checkbox', path: '/checkbox' },
				{ name: 'Radio Button', path: '/radio-button' },
				{ name: 'Switch', path: '/switch' },
				{ name: 'Datepicker', path: '/datepicker' },
				{ name: 'Form & Supervalidate', path: '/form' }
			]
		},
		{
			title: 'Navigation & Layout',
			description: 'Struktur rangka untuk menavigasi aplikasi dan mengorganisir hierarki visual layar.',
			icon: LayoutTemplate,
			color: 'text-emerald-600',
			bgColor: 'bg-emerald-50',
			borderColor: 'border-emerald-100',
			components: [
				{ name: 'Sidebar', path: '/sidebar' },
				{ name: 'Navbar', path: '/navbar' },
				{ name: 'Breadcrumbs', path: '/breadcrumbs' },
				{ name: 'Tab', path: '/tab' },
				{ name: 'Stepper', path: '/stepper' }
			]
		},
		{
			title: 'UI Actions & Data',
			description: 'Elemen antarmuka untuk aksi, pengelompokkan informasi, dan interaksi data sekunder.',
			icon: Box,
			color: 'text-orange-600',
			bgColor: 'bg-orange-50',
			borderColor: 'border-orange-100',
			components: [
				{ name: 'Button', path: '/button' },
				{ name: 'Dropdown', path: '/dropdown' },
				{ name: 'Accordion', path: '/accordion' },
				{ name: 'Badge', path: '/badge' }
			]
		},
		{
			title: 'Feedback',
			description: 'Mekanisme sistem untuk mengkomunikasikan hasil operasi atau pesan sistem ke pengguna.',
			icon: MessageSquare,
			color: 'text-rose-600',
			bgColor: 'bg-rose-50',
			borderColor: 'border-rose-100',
			components: [
				{ name: 'Toast', path: '/toast' }
			]
		}
	];
</script>

<svelte:head>
	<title>Dashboard | Design System Al-Azhar</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50/50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Hero Section -->
		<div class="relative overflow-hidden rounded-[32px] bg-white border border-neutral-100 shadow-xl shadow-neutral-200/40 p-10 md:p-16">
			<div class="absolute -right-24 -top-24 opacity-5 pointer-events-none rotate-12">
				<Component class="w-96 h-96 text-blue-900" />
			</div>
			
			<div class="relative z-10 max-w-3xl space-y-6">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest border border-blue-100">
					<Layers class="w-4 h-4" /> Visea Design System
				</div>
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
					Design System Component <br/>
					<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">School System Al-Azhar</span>
				</h1>
				<p class="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium text-pretty max-w-2xl">
					Koleksi lengkap komponen antarmuka premium, interaktif, dan fully accessible yang dirancang khusus untuk membangun ekosistem aplikasi School System Al-Azhar dengan konsistensi dan efisiensi tinggi.
				</p>
			</div>
		</div>

		<!-- Component Categories Matrix -->
		<div class="space-y-8">
			<div class="flex items-center gap-3 px-2">
				<PanelTop class="w-6 h-6 text-neutral-400" />
				<h2 class="text-2xl font-bold text-neutral-800 tracking-tight">Katalog Komponen</h2>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{#each componentCategories as category}
					<div class="bg-white rounded-3xl p-8 border border-neutral-100 shadow-lg shadow-neutral-200/40 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
						<div class="flex items-start gap-5 mb-8">
							<div class="w-14 h-14 rounded-2xl flex items-center justify-center border {category.bgColor} {category.borderColor} {category.color} shrink-0 group-hover:scale-110 transition-transform duration-300">
								<category.icon class="w-7 h-7" />
							</div>
							<div class="space-y-1.5 pt-1">
								<h3 class="text-xl font-bold text-neutral-900 tracking-tight">{category.title}</h3>
								<p class="text-sm text-neutral-500 font-medium leading-relaxed">{category.description}</p>
							</div>
						</div>

						<div class="mt-auto pt-6 border-t border-neutral-100 grid grid-cols-2 gap-3">
							{#each category.components as component}
								<a 
									href={component.path}
									class="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-transparent hover:border-neutral-200 transition-all font-semibold text-neutral-700 hover:text-neutral-900 group/item"
								>
									<span class="text-[14px] truncate">{component.name}</span>
									<MousePointerClick class="w-4 h-4 text-neutral-400 group-hover/item:text-blue-500 opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Summary Details Info Footer -->
		<div class="rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12 text-center text-pretty relative overflow-hidden">
			<div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
			<div class="relative z-10 flex flex-col items-center gap-4">
				<h3 class="text-white font-black text-2xl tracking-tighter">Stack &amp; Teknologi</h3>
				<p class="text-neutral-400 font-medium max-w-xl mx-auto text-sm leading-relaxed">
					Design system ini di-build di atas <strong class="text-neutral-200">Svelte 5</strong> dengan abstraksi komponen reusability berbasis <strong class="text-neutral-200">Shadcn Svelte / Bits UI</strong>, menggunakan <strong class="text-neutral-200">Tailwind CSS v4</strong> untuk custom styles yang efisien, dan <strong class="text-neutral-200">Lucide Svelte</strong> untuk standard ikonografi yang elegan.
				</p>
			</div>
		</div>

	</div>
</div>

<style>
	:global(body) {
		background-color: #f9fafb;
	}
</style>
