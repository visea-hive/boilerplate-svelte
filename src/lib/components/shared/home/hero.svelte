<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { onMount, onDestroy } from 'svelte';
	import CarouselNavigation from '$lib/components/ui/carousel-navigation.svelte';

	import hero1 from '$lib/assets/img/hero/hero-1.png';
	import hero2 from '$lib/assets/img/hero/hero-2.png';
	import hero3 from '$lib/assets/img/hero/hero-3.jpg';
	import hero4 from '$lib/assets/img/hero/hero-4.png';

	const slides = [
		{
			title: 'Sekolah Islam Terluas, Terlengkap, dan Inovatif Berbasis Teknologi & Nilai Islam',
			subtitle:
				'Menghadirkan ekosistem pendidikan terpadu dengan fasilitas modern, kurikulum unggul, dan lingkungan yang terintegrasi dalam satu kawasan.',
			image: hero1
		},
		{
			title: 'Lingkungan Belajar Modern yang Nyaman dan Inspiratif',
			subtitle:
				'Didukung fasilitas lengkap dan teknologi terkini untuk mendukung perkembangan akademik dan karakter siswa.',
			image: hero2
		},
		{
			title: 'Membentuk Karakter Islami Sejak Dini',
			subtitle:
				'Pembiasaan ibadah, akhlak mulia, dan nilai-nilai Islam yang menjadi fondasi kuat bagi kehidupan.',
			image: hero3
		},
		{
			title: 'Pembelajaran Interaktif Berstandar Global',
			subtitle:
				'Metode pembelajaran aktif yang mendorong kreativitas, berpikir kritis, dan kesiapan menghadapi dunia masa depan.',
			image: hero4
		}
	];

	let emblaApi: any;
	let selectedIndex = $state(0);

	const options = { loop: true, duration: 30 };
	let interval: any;

	function onInit(event: CustomEvent) {
		emblaApi = event.detail;
		emblaApi.on('select', () => {
			selectedIndex = emblaApi.selectedScrollSnap();
		});
	}

	function resetAutoplay() {
		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			scrollNext();
		}, 7000);
	}

	function scrollPrev() {
		emblaApi?.scrollPrev();
		resetAutoplay();
	}

	function scrollNext() {
		emblaApi?.scrollNext();
		resetAutoplay();
	}

	onMount(() => {
		resetAutoplay();
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<section class="relative h-[776px] w-full overflow-hidden bg-black font-sans">
	<div
		class="h-full w-full"
		use:emblaCarouselSvelte={{ options, plugins: [] }}
		onemblaInit={onInit}
	>
		<div class="flex h-full">
			{#each slides as slide, i (slide.title)}
				<div class="relative h-full min-w-0 flex-[0_0_100%]">
					<!-- Image Overlay -->
					<div class="absolute inset-0 z-0 bg-black/40 transition-opacity duration-1000">
						<img
							src={slide.image}
							alt={slide.title}
							class="h-full w-full object-cover transition-transform duration-6000 {selectedIndex ===
							i
								? 'scale-110'
								: 'scale-100'}"
						/>
					</div>

					<!-- Gradient Mask -->
					<div class="absolute inset-0 z-1 bg-[#302B1DB2]"></div>

					<!-- Content -->
					<div class="relative bottom-28 z-10 container mx-6 flex h-full flex-col justify-end">
						<div
							class="translate-y-0 opacity-100 transition-all duration-1000 ease-out"
							class:opacity-0={selectedIndex !== i}
							class:translate-y-10={selectedIndex !== i}
						>
							<h1 class="mb-2 text-4xl leading-[100%] font-bold text-white md:text-6xl">
								{slide.title}
							</h1>

							<p class="text-xl text-white md:text-2xl">
								{slide.subtitle}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Navigation Controls -->
	<div class="absolute bottom-9 left-1/2 z-20 w-full -translate-x-1/2 px-6">
		<div class="container mx-auto flex justify-center">
			<CarouselNavigation
				current={selectedIndex + 1}
				total={slides.length}
				onPrev={scrollPrev}
				onNext={scrollNext}
			/>
		</div>
	</div>
</section>

<style>
	/* Custom scale animation for background images */
	:global(.embla__slide--active img) {
		transform: scale(1.1);
	}
</style>
