<script lang="ts">
	import { Checkbox } from "$lib/components/shared/Checkbox";
	import { 
		Check, 
		Info, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Layers,
		Type,
		MousePointerClick
	} from "lucide-svelte";

	let checked1 = $state(false);
	let checked2 = $state(true);
	let checked3 = $state(false);
	let checked4 = $state(true);
	let checked5 = $state(false);

	function handleCheckChange(val: any) {
		console.log("Checkbox value changed to:", val);
	}
</script>

<svelte:head>
	<title>Checkbox | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Checkbox premium untuk pilihan tunggal atau ganda dengan desain interaktif." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<CircleCheck class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">Checkbox</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed text-pretty">
				Checkbox premium yang dapat dikustomisasi sepenuhnya. Dibangun di atas <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">bits-ui</code> 
				dengan desain yang terinspirasi dari antarmuka modern yang minimalis namun berani.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Checkbox Showroom</h2>
						<p class="text-sm text-neutral-500 mt-1">Eksplorasi fungsionalitas dan representasi visual dalam satu pandangan.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Click to Test
					</div>
				</div>

				<div class="p-10">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
						
						<!-- Sizes -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-neutral-400 mb-4">
								<Settings class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Size Variants</span>
							</div>
							<div class="space-y-6 bg-neutral-50/50 p-6 rounded-2xl border border-dashed border-neutral-100">
								<Checkbox 
									size="sm"
									label="Small (16px / Default)" 
									bind:checked={checked1}
								/>
								<Checkbox 
									size="md"
									label="Medium (20px)" 
									bind:checked={checked2}
								/>
								<Checkbox 
									size="lg"
									label="Large (24px)" 
									bind:checked={checked3}
								/>
								<Checkbox 
									size="xl"
									label="Extra Large (28px)" 
									bind:checked={checked4}
								/>
							</div>
							<p class="text-[11px] text-neutral-400 font-medium italic">Empat ukuran standar untuk berbagai kepadatan antarmuka.</p>
						</div>

						<!-- Rich Labels -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<Type class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Rich Labels</span>
							</div>
							<Checkbox 
								label="Syarat & Ketentuan" 
								description="Saya setuju dengan semua peraturan yang berlaku di platform ini."
								bind:checked={checked3}
							/>
							<Checkbox 
								label="Indeterminate State" 
								indeterminate={true}
								description="Biasanya digunakan untuk root menu."
							/>
						</div>

						<!-- Validation & Status -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-red-500 mb-4">
								<ShieldAlert class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Validation & Disabled</span>
							</div>
							<Checkbox 
								label="Wajib Dicentang" 
								error="Wajib diisi!"
								size="sm"
							/>
							<Checkbox 
								label="Opsi Terkunci (Disabled)" 
								description="Hanya tersedia untuk pengguna Pro."
								disabled
								size="sm"
								bind:checked={checked2}
							/>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 underline decoration-blue-100 underline-offset-4">checked</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic text-black underline">boolean</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">false</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic text-pretty">Status keterpilihan checkbox. Mendukung bind:checked.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">indeterminate</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">boolean</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">false</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Status "tidak menentu" (garis minus). Mendukung bind:indeterminate.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">size</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">"sm" | "md" | "lg" | "xl"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"sm"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Mengatur dimensi fisik checkbox (sm: 16px, md: 20px, lg: 24px, xl: 28px).</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">label</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Teks utama yang ditampilkan di sebelah kanan checkbox.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">description</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Teks bantuan tambahan di bawah label utama.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">error</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Pesan kesalahan yang merubah warna checkbox menjadi merah.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">disabled</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">boolean</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">false</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Mencegah fungsionalitas klik dan memperhalus visual opacity.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Check class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Integrasikan komponen dengan mudah menggunakan sistem bind Svelte 5. Semua prop bersifat reaktif dan siap digunakan.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Checkbox } from "$lib/components/shared/Checkbox";
  let isAgreed = $state(false);
</script>

<Checkbox 
  label="I accept policies" 
  bind:checked={isAgreed}
  description="Required for registration"
  onchange={(val) => console.log(val)}
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
