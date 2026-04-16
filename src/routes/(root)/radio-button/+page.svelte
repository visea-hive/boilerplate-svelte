<script lang="ts">
	import { RadioButtonGroup, RadioButtonItem } from "$lib/components/shared/RadioButton";
	import { 
		Circle, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Layers,
		Type,
		MousePointerClick
	} from "lucide-svelte";

	let selectedValue = $state("v1");
	let sizeValue = $state("md");
	let orientationValue = $state("vertical");

	function handleValueChange(val: string) {
		console.log("Radio value changed to:", val);
	}
</script>

<svelte:head>
	<title>RadioButton | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen RadioButton premium untuk pilihan tunggal dengan desain cerdas dan interaktif." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Circle class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">RadioButton</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed text-pretty">
				RadioButton premium yang sangat fungsional dan estetis. Dibangun di atas <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">bits-ui</code> 
				dengan transisi state yang halus dan proporsi visual yang seimbang.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight text-pretty">RadioButton Showroom</h2>
						<p class="text-sm text-neutral-500 mt-1">Eksplorasi tata letak, ukuran, dan validasi dalam satu antarmuka interaktif.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Click to Test
					</div>
				</div>

				<div class="p-10 bg-neutral-100/50">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
						
						<!-- Sizes Matrix -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-neutral-400 mb-4">
								<Settings class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Size Variants</span>
							</div>
							<RadioButtonGroup bind:value={sizeValue} label="Tingkat Kerincian">
								<RadioButtonItem value="sm" size="sm" label="Small (16px)" description="Default size for forms." />
								<RadioButtonItem value="md" size="md" label="Medium (20px)" description="Balanced choice." />
								<RadioButtonItem value="lg" size="lg" label="Large (24px)" description="Easy to tap." />
								<RadioButtonItem value="xl" size="xl" label="Extra Large (28px)" description="High accessibility." />
							</RadioButtonGroup>
						</div>

						<!-- Layout Options -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<Layers class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Layout Options</span>
							</div>
							<div class="space-y-8 bg-white/50 p-6 rounded-2xl border border-dashed border-neutral-200">
								<RadioButtonGroup 
									label="Orientasi Horizontal" 
									orientation="horizontal" 
									bind:value={orientationValue}
								>
									<RadioButtonItem value="opt1" label="Opsi A" />
									<RadioButtonItem value="opt2" label="Opsi B" />
								</RadioButtonGroup>

								<RadioButtonGroup 
									label="Dengan Deskripsi" 
									bind:value={selectedValue}
								>
									<RadioButtonItem 
										value="v1" 
										label="Email Bulanan" 
										description="Dapatkan ringkasan statistik setiap bulan." 
									/>
									<RadioButtonItem 
										value="v2" 
										label="Email Mingguan" 
										description="Dapatkan berita terbaru setiap hari senin." 
									/>
								</RadioButtonGroup>
							</div>
						</div>

						<!-- States & Validation -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-red-500 mb-4">
								<ShieldAlert class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">States & Error</span>
							</div>
							<RadioButtonGroup 
								label="Status Validasi" 
								error="Silakan pilih salah satu opsi untuk melanjutkan!"
							>
								<RadioButtonItem value="error1" label="Opsi A" />
								<RadioButtonItem value="error2" label="Opsi B" />
							</RadioButtonGroup>

							<RadioButtonGroup label="Status Terkunci">
								<RadioButtonItem value="disabled1" label="Opsi Premium" description="Upgrade untuk membuka." disabled />
								<RadioButtonItem value="disabled2" label="Opsi Standar" />
							</RadioButtonGroup>
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
			
			<!-- RadioGroup Props -->
			<div class="p-6 bg-neutral-50/30 border-b border-neutral-100">
				<h3 class="text-xs font-black text-neutral-400 uppercase tracking-widest flex items-center gap-2">
					<div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
					RadioButtonGroup Props
				</h3>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100 underline-offset-4">value</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic text-black underline">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Value grup yang terpilih. Mendukung bind:value.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">orientation</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">"vertical" | "horizontal"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"vertical"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Menentukan arah tata letak item-item di dalamnya.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- RadioButtonItem Props -->
			<div class="p-6 bg-neutral-50/30 border-b border-neutral-100">
				<h3 class="text-xs font-black text-neutral-400 uppercase tracking-widest flex items-center gap-2">
					<div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
					RadioButtonItem Props
				</h3>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">value</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold font-black italic underline">Wajib diisi. Nilai identitas unik untuk item ini.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">size</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">"sm" | "md" | "lg" | "xl"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"sm"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Mengatur besar kecilnya lingkaran RadioButton.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Circle class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Implementasi cerdas dengan Svelte 5. Group mendukung sinkronisasi state otomatis melalui prop value yang terikat.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { RadioButtonGroup, RadioButtonItem } from "$lib/components/shared/RadioButton";
  let gender = $state("male");
</script>

<RadioButtonGroup label="Jenis Kelamin" bind:value={gender}>
  <RadioButtonItem value="male" label="Laki-laki" />
  <RadioButtonItem value="female" label="Perempuan" />
</RadioButtonGroup>`}</code></pre>
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
