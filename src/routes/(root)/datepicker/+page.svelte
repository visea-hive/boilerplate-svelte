<script lang="ts">
	import { Datepicker } from "$lib/components/shared/Datepicker";
	import { 
		getLocalTimeZone, 
		today, 
		CalendarDate, 
		parseDate 
	} from "@internationalized/date";
	import { 
		Calendar, 
		Info, 
		Settings, 
		Code, 
		CircleCheck, 
		ShieldAlert, 
		Database, 
		CalendarRange, 
		Layers,
		Type,
		MousePointerClick
	} from "lucide-svelte";

	let selectedDate = $state(today(getLocalTimeZone()));
	let birthDate = $state<any>(parseDate("1995-09-09"));
	let defaultDate = $state<any>(undefined);
	let disabledDate = $state(today(getLocalTimeZone()));
	let rangeDate = $state<any>({
		start: today(getLocalTimeZone()),
		end: today(getLocalTimeZone()).add({ days: 7 })
	});
	let multipleDate = $state<any>([]);

	// Example function
	function handleDateChange(date: any) {
		console.log("Date changed to:", date?.toString());
	}
</script>

<svelte:head>
	<title>Datepicker | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Datepicker premium untuk pemilihan tanggal yang dinamis dan berkelas." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<Calendar class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight text-balance">Datepicker</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed text-pretty text-balance">
				Komponen pemilihan tanggal premium yang dibangun di atas <code class="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-sm font-semibold italic">bits-ui</code>. 
				Dilengkapi dengan kontrol navigasi bulan dan tahun yang intuitif, serta desain yang sangat terpoles.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Visual Matrix Datepicker</h2>
						<p class="text-sm text-neutral-500 mt-1">Eksplorasi berbagai varian status dan penggunaan datepicker dalam satu antarmuka.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Click to Test
					</div>
				</div>

				<div class="p-10">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
						
						<!-- Standard -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-neutral-400 mb-4">
								<Settings class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Default State</span>
							</div>
							<div class="bg-neutral-50/50 p-6 rounded-2xl border border-dashed border-neutral-100">
								<Datepicker 
									label="Pilih Tanggal Acara" 
									bind:value={defaultDate} 
									placeholder="Pilih hari keberuntunganmu..."
								/>
							</div>
							<p class="text-[11px] text-neutral-400 font-medium italic">Status kosong dengan placeholder kustom.</p>
						</div>

						<!-- Pre-selected -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<Database class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">With Value</span>
							</div>
							<Datepicker 
								label="Tanggal Lahir" 
								bind:value={birthDate}
								onchange={handleDateChange}
							/>
							<p class="text-[11px] text-neutral-400 font-medium italic">Tanggal terisi otomatis dari database.</p>
						</div>

						<!-- Validation & Status -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-red-500 mb-4">
								<ShieldAlert class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Validation & Status</span>
							</div>
							<Datepicker 
								label="Masa Berlaku Paspor" 
								error="Maaf, dokumen Anda sudah kedaluwarsa!"
								bind:value={selectedDate}
							/>
							<div class="mt-4 opacity-50 pointer-events-none">
								<Datepicker 
									label="Tanggal Pendaftaran (Sistem)" 
									disabled 
									bind:value={disabledDate}
								/>
							</div>
						</div>

						<!-- Range Selection -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<CalendarRange class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Range Selection</span>
							</div>
							<Datepicker 
								type="range"
								label="Periode Sewa" 
								bind:value={rangeDate}
							/>
							<p class="text-[11px] text-neutral-400 font-medium italic">Memilih rentang tanggal (Start - End).</p>
						</div>

						<!-- Multiple Selection -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-purple-600 mb-4">
								<Layers class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Multiple Dates</span>
							</div>
							<Datepicker 
								type="multiple"
								label="Pilih Beberapa Hari" 
								bind:value={multipleDate}
							/>
							<p class="text-[11px] text-neutral-400 font-medium italic">Memilih banyak tanggal sekaligus.</p>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600 italic">value</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 text-pretty">DateValue | DateValue[] | DateRange | undefined</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold">Baku bind untuk mendapatkan atau mengatur tanggal yang dipilih. Menggunakan @internationalized/date.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">type</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500 italic">"single" | "multiple" | "range"</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">"single"</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold font-black italic underline">Menentukan mode pemilihan tanggal kustom.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">label</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">string</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">undefined</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold font-black italic underline text-pretty">Teks utama yang ditampilkan di atas input datepicker.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<Calendar class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Integrasikan Datepicker premium dengan mudah. Gunakan pustaka @internationalized/date untuk manajemen objek tanggal yang robust.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Datepicker } from "$lib/components/shared/Datepicker";
  import { today, getLocalTimeZone } from "@internationalized/date";
  
  let tanggalLahir = $state(today(getLocalTimeZone()));
</script>

<Datepicker 
  label="Pilih Tanggal" 
  bind:value={tanggalLahir} 
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
