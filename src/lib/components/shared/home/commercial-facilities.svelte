<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import CarouselNavigation from '$lib/components/ui/carousel-navigation.svelte';
	import { Utensils, Dumbbell, ShoppingBag, Users } from '@lucide/svelte';
	import slider1 from '$lib/assets/img/slider/slider-1.png';
	import slider2 from '$lib/assets/img/slider/slider-2.png';
	const facilities = [
		{
			title: 'Foodcourt & Café',
			icon: Utensils,
			image: slider1
		},
		{
			title: 'Gym & Wellness',
			icon: Dumbbell,
			image: slider2
		},
		{
			title: 'Retail & Layanan',
			icon: ShoppingBag,
			image: slider1
		},
		{
			title: 'Area Berkumpul Nyaman',
			icon: Users,
			image: slider2
		}
	];

	let emblaApi: any;
	let selectedIndex = $state(0);

	function onInit(event: CustomEvent) {
		emblaApi = event.detail;
		emblaApi.on('select', () => {
			selectedIndex = emblaApi.selectedScrollSnap();
		});
	}

	function scrollPrev() {
		emblaApi?.scrollPrev();
	}

	function scrollNext() {
		emblaApi?.scrollNext();
	}
</script>

<section class="flex h-full flex-col overflow-hidden md:h-[680px] md:flex-row">
	<!-- Left Side: Static Info -->
	<div
		class="relative z-10 flex w-full flex-col justify-center rounded-tr-[80px] bg-brand-gradient p-8 md:w-1/2 md:rounded-tr-[120px] md:px-6 md:py-16"
	>
		<div class="relative z-10 space-y-4 md:space-y-1">
			<h2 class="text-3xl leading-tight font-bold text-white md:text-5xl">
				Fasilitas Komersial dalam Satu Kawasan
			</h2>
			<div class="text-base font-normal text-white md:text-2xl">
				Hadirkan kemudahan dan kenyamanan melalui area komersial terintegrasi yang menunjang
				aktivitas belajar dan kehidupan sekolah.
			</div>

			<div class="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 md:gap-4">
				{#each facilities as facility, i (facility.title)}
					<button
						class="flex items-center gap-3 rounded-xl border p-3 transition-all duration-300 blur-in-lg md:gap-4 md:p-4 {selectedIndex ===
						i
							? 'border-white bg-white/25 shadow-lg'
							: 'border-white bg-white/10 hover:bg-white/15'}"
						onclick={() => emblaApi?.scrollTo(i)}
					>
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/30 text-white md:h-12 md:w-12"
						>
							<facility.icon size={20} class="md:hidden" />
							<facility.icon size={24} class="hidden md:block" />
						</div>
						<span class="text-left text-sm font-semibold text-white md:text-base"
							>{facility.title}</span
						>
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Right Side: Slider Carousel -->
	<div class="relative ml-0 h-[400px] w-full bg-neutral-900 md:-ml-26 md:h-full md:w-[70%]">
		<div
			class="h-full w-full overflow-hidden"
			use:emblaCarouselSvelte={{ options: { loop: true, duration: 30 }, plugins: [] }}
			onemblaInit={onInit}
		>
			<div class="flex h-full">
				{#each facilities as facility, i (facility.title)}
					<div class="relative h-full min-w-0 flex-[0_0_100%]">
						<img
							src={facility.image}
							alt={facility.title}
							class="h-full w-full object-cover transition-transform duration-700 {selectedIndex ===
							i
								? 'scale-105'
								: 'scale-100'}"
						/>
						<!-- Gradient Overlay -->
						<div
							class="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-black/70 to-black/10"
						></div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Navigation and Info -->
		<div class="absolute bottom-6 left-12 z-20 space-y-2 md:bottom-12 md:left-36 md:space-y-4">
			<h3
				class="text-xl font-bold text-white transition-opacity duration-300 md:text-3xl"
				class:opacity-100={true}
			>
				{facilities[selectedIndex].title}
			</h3>
			<CarouselNavigation
				current={selectedIndex + 1}
				total={facilities.length}
				onPrev={scrollPrev}
				onNext={scrollNext}
			/>
		</div>
	</div>
</section>

<style>
	/* Any additional styles if needed */
</style>
