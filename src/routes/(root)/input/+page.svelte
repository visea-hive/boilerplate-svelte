<script lang="ts">
	import Input from "$lib/components/shared/Input/Input.svelte";
	import { 
		AtSign, 
		ChevronDown, 
		Copy, 
		Info,
		LayoutGrid,
		Settings,
		Code,
		CircleCheck,
		ShieldAlert,
		Layers,
		Type,
		MousePointerClick,
		Search,
		User
	} from "lucide-svelte";
	
	const sizes = [
		{ name: "Large", value: "large" as const, placeholderTpl: "lg" },
		{ name: "Default", value: "default" as const, placeholderTpl: "md" },
		{ name: "Small", value: "small" as const, placeholderTpl: "sm" }
	];

	const colTypes = [
		{ id: "default", type: "default", title: "Default", placeholderSuffix: "-default", feedback: "This is a feedback message" },
		{ id: "hover", type: "default", title: "Hover", placeholderSuffix: "-hover", feedback: "This is a feedback message", simulateClass: "border-blue-400" },
		{ id: "focus", type: "default", title: "Focus/Active", placeholderSuffix: "Writing...", feedback: "This is a feedback message", simulateClass: "border-blue-500 ring-2 ring-blue-100" },
		{ id: "error", type: "error" as const, title: "Error", placeholderSuffix: "Writing...", feedback: "This is error!", overrideVal: "" },
		{ id: "filled", type: "default", title: "Filled", placeholderSuffix: "Input - filled", feedback: "This is a feedback message", overrideVal: "Input - filled" },
		{ id: "success", type: "success" as const, title: "Success", placeholderSuffix: "Input - filled", feedback: "Success!", overrideVal: "Input - filled" },
		{ id: "disabled", type: "disabled", title: "Disabled", placeholderSuffix: "Input - filled", feedback: "This is a feedback message", disabled: true, overrideVal: "Input - filled" }
	];

</script>

{#snippet PrefixSnippet()}
	<div class="flex items-center gap-1.5 text-neutral-500">
		<AtSign class="w-4 h-4" />
		<span class="font-medium text-[13px]">Email</span>
		<ChevronDown class="w-4 h-4 ml-0.5" />
	</div>
{/snippet}

{#snippet SuffixSnippet()}
	<div class="flex items-center gap-1.5 text-neutral-500">
		<Copy class="w-4 h-4" />
		<span class="font-medium text-[13px]">Copy</span>
		<Info class="w-4 h-4 ml-0.5 text-neutral-400" />
	</div>
{/snippet}

<svelte:head>
	<title>Input | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Input premium dengan fungsionalitas add-ons ganda dan validasi dinamis." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Type class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">Input Field</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed text-pretty">
				Komponen Input form terpadu, direkayasa dari abstraksi basis Shadcn UI. Mengusung fungsionalitas komprehensif mulai dari `add-ons` ganda (*prefix* & *suffix*), transisi *border feedback* dinamis, serta skalabilitas responsif.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Interactive Matrix Layout</h2>
						<p class="text-sm text-neutral-500 mt-1">Eksplorasi semua status visual dan ukuran dalam satu grid peninjauan.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Visual Audit
					</div>
				</div>

				<div class="p-10 overflow-x-auto">
					<table class="w-max border-separate border-spacing-y-8 border-spacing-x-8">
						<thead>
							<tr>
								{#each colTypes as col (col.id)}
									<th class="text-[11px] font-black text-neutral-400 uppercase tracking-widest text-left italic">{col.title}</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each sizes as size (size.value)}
								<tr>
									{#each colTypes as col (col.id)}
										<td class="align-top w-[320px]">
											<div class={col.simulateClass ? "[&>div>div]:!" + col.simulateClass.split(' ').join(" [&>div>div]:!") : ""}>
												<Input
													label="Label"
													secondaryLabel="Secondary"
													feedbackMsg={col.feedback}
													status={col.type === "disabled" ? "default" : (col.type as any)}
													disabled={col.disabled}
													inputSize={size.value}
													placeholder={col.placeholderSuffix.startsWith("-") ? size.placeholderTpl + col.placeholderSuffix : col.placeholderSuffix}
													value={col.overrideVal ?? ""}
													prefix={PrefixSnippet}
													suffix={SuffixSnippet}
												/>
											</div>
										</td>
									{/each}
								</tr>
							{/each}
						</tbody>
					</table>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">label</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Teks label utama yang akan muncul di atas input pojok kiri.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100 italic underline-offset-4">status</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic text-black underline">"default" | "error" | "success"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"default"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty italic font-medium">Merubah status peringatan (*error = merah, success = hijau*).</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Type class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Daripada menyusun Flexbox kustom tiap memanggil Input dengan label dan feedback, Anda dapat memanfaatkan komponen terpadu ini.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{'<script' + '>\n  import Input from "$lib/components/shared/Input/Input.svelte";\n  import { Search } from "lucide-svelte";\n  let val = $state("");\n</script' + '>\n\n{#snippet icon()}\n  <Search class="w-4 h-4 text-neutral-400" />\n{/snippet}\n\n<Input \n  label="Search" \n  prefix={icon}\n  bind:value={val}\n/>'}</code></pre>
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
