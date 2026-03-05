<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaOptionsType } from 'embla-carousel';
	import { Button } from '$lib/components/ui/button';

	const items = [
		{
			title: 'Tingkat Sekolah Menengah Pertama',
			subtitle: 'SMP Islam Al Azhar',
			buttonText: 'Selengkapnya',
			image: 'https://picsum.photos/seed/smp/800/600'
		},
		{
			title: 'Tingkat Sekolah Menengah Atas',
			subtitle: 'SMA Islam Al Azhar',
			buttonText: 'Selengkapnya',
			image: 'https://picsum.photos/seed/sma/800/600'
		},
		{
			title: 'Pendaftaran & Informasi',
			subtitle: 'Informasi lengkap dan alur pendaftaran.',
			buttonText: 'Hubungi Kami',
			image: 'https://picsum.photos/seed/reg/800/600'
		}
	];

	const options: EmblaOptionsType = { align: 'start', containScroll: 'trimSnaps' };
</script>

<section class="mt-3 mb-12">
	<div class="overflow-hidden" use:emblaCarouselSvelte={options}>
		<div class="flex gap-6">
			{#each items as item}
				<div
					class="relative h-[400px] min-w-0 flex-[0_0_100%] overflow-hidden rounded-4xl md:flex-[0_0_35%]"
				>
					<!-- Background Image -->
					<img
						src={item.image}
						alt={item.title}
						class="absolute inset-0 h-full w-full object-cover"
					/>

					<!-- Overlay Gradient -->
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
					></div>

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
