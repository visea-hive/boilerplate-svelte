<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import CarouselNavigation from '$lib/components/ui/carousel-navigation.svelte';
	import { Map, School, ShieldCheck, Users } from '@lucide/svelte';
	import slider3 from '$lib/assets/img/slider/slider-3.jpg';
	import slider4 from '$lib/assets/img/slider/slider-4.png';
	import slider5 from '$lib/assets/img/slider/slider-5.png';
	import slider6 from '$lib/assets/img/slider/slider-6.png';
	const environmentalFeatures = [
		{
			title: 'Kawasan Luas & Tertata',
			icon: Map,
			image: slider3,
			description: 'Pusat Ibadah dan Pembentukan Karakter Islami'
		},
		{
			title: '197 Ruang Kelas Modern',
			icon: School,
			image: slider4,
			description: 'Fasilitas Belajar dengan Teknologi Terkini'
		},
		{
			title: 'Pengawasan Optimal',
			icon: ShieldCheck,
			image: slider5,
			description: 'Keamanan Lingkungan Terjaga 24 Jam'
		},
		{
			title: 'Kapasitas 5000 Siswa',
			icon: Users,
			image: slider6,
			description: 'Ekosistem Pendidikan yang Hidup dan Beragam'
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

<section class="relative mt-24">
	<div class="absolute -top-12 w-full">
		<div class="flex">
			<!-- Shadow top left section -->
			<div class="h-[200px] w-1/2 rounded-tr-[80px] bg-[#D9D9D9]"></div>
			<!-- Shadow top right section -->
			<div class="h-[200px] w-1/2 rounded-tl-[80px] bg-[#D9D9D9]"></div>
		</div>
	</div>
	<div class="flex h-full flex-col overflow-hidden md:h-[680px] md:flex-row-reverse">
		<!-- Shadow Top -->
		<!-- Right Side: Static Info -->
		<div
			class="relative z-10 flex w-full flex-col justify-center rounded-tl-[80px] bg-brand-gradient p-8 md:w-1/2 md:rounded-tl-[120px] md:px-6 md:py-16"
		>
			<div class="relative z-10 space-y-4 md:space-y-1">
				<h2 class="text-3xl leading-tight font-bold text-white md:text-5xl">
					Belajar & Beribadah dalam Satu Lingkungan
				</h2>
				<div class="text-base font-normal text-white md:text-2xl">
					Semua kebutuhan siswa tersedia dalam satu lingkungan yang terintegrasi, aman, dan
					terstruktur.
				</div>

				<div class="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 md:gap-4">
					{#each environmentalFeatures as feature, i (feature.title)}
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
								<feature.icon size={20} class="md:hidden" />
								<feature.icon size={24} class="hidden md:block" />
							</div>
							<span class="text-left text-sm font-semibold text-white md:text-base"
								>{feature.title}</span
							>
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- Left Side: Slider Carousel -->
		<div
			class="relative h-[400px] w-full justify-end rounded-tr-[120px] bg-neutral-900 md:h-full md:w-1/2"
		>
			<div
				class="h-full w-full overflow-hidden rounded-tr-[120px]"
				use:emblaCarouselSvelte={{ options: { loop: true, duration: 30 }, plugins: [] }}
				onemblaInit={onInit}
			>
				<div class="flex h-full">
					{#each environmentalFeatures as feature, i (feature.title)}
						<div class="relative h-full min-w-0 flex-[0_0_100%]">
							<img
								src={feature.image}
								alt={feature.title}
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
			<div
				class="absolute right-12 bottom-6 z-20 ml-auto justify-end space-y-2 md:right-20 md:bottom-12 md:space-y-4"
			>
				<h3 class="text-xl font-bold text-white transition-opacity duration-300 md:text-3xl">
					{environmentalFeatures[selectedIndex].description}
				</h3>
				<CarouselNavigation
					current={selectedIndex + 1}
					total={environmentalFeatures.length}
					onPrev={scrollPrev}
					onNext={scrollNext}
					class="justify-end"
				/>
			</div>
		</div>
	</div>
</section>

<style>
</style>
