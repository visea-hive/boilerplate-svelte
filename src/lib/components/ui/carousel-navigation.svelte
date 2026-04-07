<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		current: number;
		total: number;
		onPrev: () => void;
		onNext: () => void;
		class?: string;
	}

	let { current, total, onPrev, onNext, class: className = '' }: Props = $props();
</script>

<div class="flex items-center gap-4 rounded-full p-1.5 pr-4 md:gap-6 {className}">
	<!-- Prev Button -->
	<div class="relative flex h-10 w-10 items-center justify-center">
		<div class="absolute inset-0 scale-125 rounded-full bg-white/10"></div>
		<button
			onclick={onPrev}
			class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#eff6ff] text-neutral-800 transition-transform active:scale-95"
			aria-label="Previous slide"
		>
			<ChevronLeft class="h-4 w-4" />
		</button>
	</div>

	<!-- Info Group -->
	<div class="flex items-center gap-4">
		<!-- Counter -->
		<div class="min-w-16 text-center font-sans text-base font-medium text-white/90">
			<span class="text-white">{current}</span>
			<span class="mx-0.5 text-white/40">/</span>
			<span class="text-white/40">{total}</span>
		</div>

		<!-- Progress Track -->
		<div class="relative h-1 w-24 rounded-full bg-white/10 md:w-32">
			<div
				class="absolute top-0 bottom-0 left-0 rounded-full bg-white transition-all duration-500 ease-in-out"
				style="width: {(current / total) * 100}%"
			></div>
		</div>
	</div>

	<!-- Next Button -->
	<div class="relative flex h-10 w-10 items-center justify-center">
		<div class="absolute inset-0 scale-125 rounded-full bg-white/10"></div>
		<button
			onclick={onNext}
			class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#eff6ff] text-neutral-800 transition-transform active:scale-95"
			aria-label="Next slide"
		>
			<ChevronRight class="h-4 w-4" />
		</button>
	</div>
</div>
