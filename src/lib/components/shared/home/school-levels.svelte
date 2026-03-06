<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaOptionsType } from 'embla-carousel';
	import { Button } from '$lib/components/ui/button';
	import school1 from '$lib/assets/img/slider/school-1.png';
	import school2 from '$lib/assets/img/slider/school-2.png';
	import school3 from '$lib/assets/img/slider/school-3.jpg';
	const items = [
		{
			title: 'Tingkat Sekolah Menengah Pertama',
			subtitle: 'SMP Islam Al Azhar',
			buttonText: 'Selengkapnya',
			image: school1
		},
		{
			title: 'Tingkat Sekolah Menengah Atas',
			subtitle: 'SMA Islam Al Azhar',
			buttonText: 'Selengkapnya',
			image: school2
		},
		{
			title: 'Pendaftaran & Informasi',
			subtitle: 'Informasi lengkap dan alur pendaftaran.',
			buttonText: 'Hubungi Kami',
			image: school3
		}
	];

	const options: EmblaOptionsType = { align: 'start', containScroll: 'trimSnaps' };
</script>

<section class="mt-3 mb-12">
	<div class="overflow-hidden" use:emblaCarouselSvelte={{ options, plugins: [] }}>
		<div class="flex gap-6">
			{#each items as item (item.title)}
				<div
					class="relative h-[400px] min-w-0 flex-[0_0_100%] overflow-hidden rounded-t-[46px] rounded-b-xl md:flex-[0_0_35%]"
				>
					<!-- Background Image -->
					<img
						src={item.image}
						alt={item.title}
						class="absolute inset-0 h-full w-full object-cover"
					/>

					<!-- Overlay Gradient -->
					<div class="absolute inset-0 bg-[#302B1D80]"></div>

					<!-- Content -->
					<div class="absolute inset-0 flex flex-col justify-end p-8 text-white">
						<h3 class="mb-1 text-2xl leading-tight font-bold md:text-3xl">
							{item.title}
						</h3>
						<p class="mb-6 opacity-80">
							{item.subtitle}
						</p>

						<div class="flex">
							<Button
								variant="outline"
								class="rounded-full border-white bg-white/10 px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black"
							>
								{item.buttonText}
							</Button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
