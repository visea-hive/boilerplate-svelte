<script lang="ts">
	import Textarea from "$lib/components/shared/Textarea/Textarea.svelte";
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
		User,
		MessageSquare
	} from "lucide-svelte";
	
	const sizes = [
		{ name: "Large", value: "large" as const, prefixChar: "lg" },
		{ name: "Medium", value: "default" as const, prefixChar: "md" },
		{ name: "Small", value: "small" as const, prefixChar: "sm" }
	];

	const colTypes = [
		{ id: "default", type: "default" as const, title: "Default", suffix: "-default", feedback: "This is a feedback message" },
		{ id: "hover", type: "default" as const, title: "Hover", suffix: "-hover", feedback: "This is a feedback message", simulateClass: "border-blue-400" },
		{ id: "focus", type: "default" as const, title: "Focus/Active", suffix: "Writing...", feedback: "This is a feedback message", simulateClass: "border-blue-500 ring-2 ring-blue-100" },
		{ id: "error", type: "error" as const, title: "Error", suffix: "Writing...", feedback: "This is error!", overrideVal: "" },
		{ id: "filled", type: "default" as const, title: "Filled", suffix: "Input - filled", feedback: "This is a feedback message", overrideVal: "Input - filled" },
		{ id: "success", type: "success" as const, title: "Success", suffix: "Input - filled", feedback: "Success!", overrideVal: "Input - filled" },
		{ id: "disabled", type: "default" as const, title: "Disabled", suffix: "Input - filled", feedback: "This is a feedback message", disabled: true, overrideVal: "Input - filled" }
	];

</script>

{#snippet PrefixSnippet()}
	<div class="flex flex-col items-center gap-1.5 text-neutral-500">
		<AtSign class="w-3.5 h-3.5" />
		<span class="font-medium text-[11px] vertical-text">Email</span>
		<ChevronDown class="w-3.5 h-3.5 mt-0.5" />
	</div>
{/snippet}

{#snippet SuffixSnippet()}
	<div class="flex flex-col items-center gap-1.5 text-neutral-500">
		<Copy class="w-3.5 h-3.5" />
		<Info class="w-3.5 h-3.5 mt-0.5 text-neutral-400" />
	</div>
{/snippet}

<svelte:head>
	<title>Textarea | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Textarea premium dengan fungsionalitas add-ons ganda dan validasi dinamis." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10 text-pretty leading-relaxed">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<MessageSquare class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Textarea Components</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen Penginputan Teks Area (Multi-line) kustom dengan skalabilitas Shadcn. Mendukung fitur reaktif seperti `character count`, `multi-labeling`, dan add-ons `prefix/suffix` yang terintegrasi penuh.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Interactive Matrix Layout</h2>
						<p class="text-sm text-neutral-500 mt-1">Simulasi utuh untuk status Hover, Focus, dan Peringatan pada 3 skala ukuran yang berbeda.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100 italic">
						<MousePointerClick class="w-4 h-4" /> Visual Audit
					</div>
				</div>

				<div class="p-10 overflow-x-auto">
					<table class="w-max border-separate border-spacing-y-10 border-spacing-x-8">
						<thead>
							<tr>
								{#each colTypes as col (col.id)}
									<th class="text-[11px] font-black text-neutral-400 uppercase tracking-widest text-left italic underline underline-offset-4 decoration-neutral-200">{col.title}</th>
								{/each}
							</tr>
						</thead>
						<tbody>
							{#each sizes as size (size.value)}
								<tr>
									{#each colTypes as col (col.id)}
										<td class="align-top w-[340px]">
											<div class={col.simulateClass ? "[&>div>div]:!" + col.simulateClass.split(' ').join(" [&>div>div]:!") : ""}>
												<Textarea
													label="Label"
													secondaryLabel="Secondary"
													feedbackMsg={col.feedback}
													status={col.type}
													disabled={col.disabled}
													textareaSize={size.value}
													maxLength={150}
													placeholder={col.suffix.startsWith("-") ? size.prefixChar + col.suffix : col.suffix}
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline italic">label / secondaryLabel</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">""</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Teks pelabelan di barisan atas input area teks.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">maxLength</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">number</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100">Gunakan untuk membatasi karakter dan menampilkan counter secara reaktif.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<MessageSquare class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Implementasikan penginputan teks panjang dengan batas karakter yang dinamis dan terintegrasi dengan desain premium.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Textarea } from "$lib/components/shared/Textarea";
  let userBio = $state("");
</script>

<Textarea
  label="Biografi Singkat"
  maxLength={250}
  placeholder="Tuliskan pengalaman Anda..."
  bind:value={userBio}
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

	:global(.vertical-text) {
		writing-mode: vertical-lr;
		text-orientation: mixed;
	}
</style>
