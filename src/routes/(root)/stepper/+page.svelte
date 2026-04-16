<script lang="ts">
	import StepperItem from "$lib/components/shared/Stepper/StepperItem.svelte";
	import Stepper from "$lib/components/shared/Stepper/Stepper.svelte";
	import { 
		BookOpen, 
		ShieldCheck, 
		CreditCard, 
		ChevronLeft, 
		ChevronRight, 
		LayoutList,
		MousePointerClick,
		Layers,
		Code,
		Settings,
		ShieldAlert,
		Type,
		CircleCheck
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";

	let currentStepIdx = $state(1);

	const mockupSteps = [
		{ title: "Personal Info", subtitle: "Masukkan data diri Anda", icon: BookOpen },
		{ title: "Verification", subtitle: "Verifikasi identitas KTP/SIM", icon: ShieldCheck },
		{ title: "Payment", subtitle: "Pilih metode pembayaran", icon: CreditCard }
	];

	function nextStep() {
		if (currentStepIdx < mockupSteps.length - 1) currentStepIdx++;
	}

	function prevStep() {
		if (currentStepIdx > 0) currentStepIdx--;
	}
</script>

<svelte:head>
	<title>Stepper | Visea Design System</title>
	<meta name="description" content="Dokumentasi komponen Stepper premium untuk alur kerja bertahap dengan desain interaktif." />
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-12 text-pretty leading-relaxed">
	<div class="mx-auto space-y-12">
		
		<!-- Header -->
		<div class="mb-10">
			<div class="flex items-center gap-3 mb-2 text-blue-600">
				<LayoutList class="w-6 h-6" />
				<span class="font-bold tracking-widest uppercase text-xs">Components</span>
			</div>
			<h1 class="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Stepper</h1>
			<p class="text-lg text-neutral-500 max-w-3xl leading-relaxed">
				Komponen alur kerja bertahap premium. Digunakan untuk membimbing pengguna melalui serangkaian tugas kompleks dengan visualisasi kemajuan yang sangat jelas.
			</p>
		</div>

		<!-- Main Preview & Showcase -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<div class="lg:col-span-12 bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden">
				<div class="p-8 border-b border-neutral-50 bg-neutral-50/30 flex items-center justify-between">
					<div>
						<h2 class="text-xl font-bold text-neutral-800 tracking-tight">Stepper Showroom</h2>
						<p class="text-sm text-neutral-500 mt-1">Simulasi alur kerja interaktif dengan status reaktif.</p>
					</div>
					<div class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 border border-blue-100">
						<MousePointerClick class="w-4 h-4" /> Interactive
					</div>
				</div>

				<div class="p-10 bg-white">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
						
						<!-- Vertical Full Flow -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-neutral-400 mb-4">
								<Settings class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Interactive Vertical Flow</span>
							</div>
							<div class="bg-neutral-50/50 p-8 rounded-[32px] border border-neutral-100 flex gap-10 items-start">
								<div class="flex-1">
									<Stepper 
										steps={mockupSteps} 
										currentStep={currentStepIdx} 
									/>
								</div>
								
								<div class="w-48 p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm space-y-4">
									<p class="text-[10px] font-black text-neutral-400 uppercase tracking-widest text-center">Simulasi Kontrol</p>
									<div class="flex flex-col gap-2">
										<Button variant="outline" size="sm" class="rounded-xl h-9 text-xs" onclick={prevStep} disabled={currentStepIdx === 0}>
											<ChevronLeft class="size-3.5 mr-1.5" /> Sebelumnya
										</Button>
										<Button variant="outline" size="sm" class="rounded-xl h-9 text-xs font-bold" onclick={nextStep} disabled={currentStepIdx === mockupSteps.length - 1}>
											Selanjutnya <ChevronRight class="size-3.5 ml-1.5" />
										</Button>
									</div>
								</div>
							</div>
						</div>

						<!-- Matrix of States -->
						<div class="space-y-6">
							<div class="flex items-center gap-2 text-blue-600 mb-4">
								<Type class="w-4 h-4" />
								<span class="text-xs font-bold uppercase tracking-wider">Individual States Matrix</span>
							</div>
							<div class="space-y-4 bg-neutral-900 p-8 rounded-[32px] shadow-2xl">
								<div class="space-y-1 px-2">
									<span class="text-[9px] font-black text-neutral-600 uppercase tracking-widest">Pending</span>
									<StepperItem title="Email Verification" status="pending" icon={ShieldAlert} class="opacity-80" />
								</div>
								<div class="space-y-1 px-2">
									<span class="text-[9px] font-black text-blue-500 uppercase tracking-widest">Active</span>
									<StepperItem title="Payment Details" status="active" icon={CreditCard} />
								</div>
								<div class="space-y-1 px-2">
									<span class="text-[9px] font-black text-green-500 uppercase tracking-widest">Completed</span>
									<StepperItem title="Welcome Aboard" status="completed" icon={CircleCheck} />
								</div>
							</div>
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
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">steps</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">StepperStep[]</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">[]</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-semibold italic">Array objek {`{ title: string; subtitle?: string; icon?: any }`}.</td>
						</tr>
						<tr class="hover:bg-neutral-50/50 transition-colors">
							<td class="px-6 py-4 text-xs font-mono font-black text-blue-600">currentStep</td>
							<td class="px-6 py-4 text-xs italic text-neutral-500">number</td>
							<td class="px-6 py-4 text-xs font-mono text-neutral-400 italic">0</td>
							<td class="px-6 py-4 text-[13px] text-neutral-600 leading-relaxed font-black italic underline underline-offset-4 decoration-blue-100">Indeks langkah saat ini (0-based) yang aktif.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Usage Showcase Card -->
		<div class="bg-neutral-900 rounded-[32px] p-10 border border-neutral-800 shadow-2xl relative overflow-hidden group">
			<div class="absolute -top-12 -right-12 p-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity rotate-12">
				<LayoutList class="w-96 h-96 text-white" />
			</div>
			<div class="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
				<div class="space-y-6 max-w-sm">
					<h2 class="text-2xl font-black text-white flex items-center gap-3 tracking-tighter uppercase italic">
						<div class="w-3 h-3 bg-blue-500 animate-ping rounded-full"></div>
						Code Example
					</h2>
					<p class="text-neutral-400 text-sm leading-relaxed font-medium">
						Membangun alur multi-step yang responsif menjadi sangat mudah dengan abstraksi data-driven.
					</p>
				</div>
				<div class="w-full flex-1 min-w-0">
					<pre class="bg-black/50 p-8 rounded-3xl border border-white/10 overflow-x-auto shadow-inner"><code class="text-blue-200 text-sm leading-relaxed">{`<script>
  import { Stepper } from "$lib/components/shared/Stepper";
  import { ShieldAlert } from "lucide-svelte";
  
  const steps = [
    { title: "Step 1", icon: ShieldAlert },
    { title: "Step 2", subtitle: "Confirm data" }
  ];
</script>

<Stepper {steps} currentStep={0} />`}</code></pre>
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
