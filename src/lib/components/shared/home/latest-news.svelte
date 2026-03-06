<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowUpRight } from '@lucide/svelte';
	import news1 from '$lib/assets/img/news/news-1.png';
	import news2 from '$lib/assets/img/news/news-2.png';
	import news3 from '$lib/assets/img/news/news-3.png';
	const news = [
		{
			title: 'Studi Banding Yayasan Insan Pelita Pratama Indonesia',
			image: news1,
			link: '#'
		},
		{
			title: 'YPI Al Azhar Jawa Timur Gelar Giat Bina Satpam',
			image: news2,
			link: '#'
		},
		{
			title: 'YPI Al Azhar Selenggarakan Pembinaan Awal Pegawai (PAP) ke-29 dan ke-30',
			image: news3,
			link: '#'
		}
	];
</script>

<section class="w-full px-6 pt-28 pb-24">
	<div class="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
		<div class="space-y-2">
			<h2 class="text-3xl font-bold text-txt-essentials-primary md:text-[53px]">
				Berita & Kegiatan Terbaru
			</h2>
			<p class="text-base text-txt-essentials-primary md:text-2xl">
				Ikuti perkembangan terbaru, prestasi siswa, dan kegiatan inspiratif di Pendidikan Islam Al
				Azhar.
			</p>
		</div>
		<a
			href={resolve('/news')}
			class="group flex items-center gap-2 rounded-full bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-200"
		>
			Lihat Lainnya
			<div
				class="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-400 text-white transition-transform group-hover:rotate-45"
			>
				<ArrowUpRight size={12} />
			</div>
		</a>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		{#each news as item (item.title)}
			<div
				class="flex flex-col rounded-3xl border border-neutral-100 bg-[#F9F9F9] p-5 transition-shadow hover:shadow-md"
			>
				<div class="mb-5 overflow-hidden rounded-2xl border-[1.5px] border-[#EFEFEF]">
					<img
						src={item.image}
						alt={item.title}
						class="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
					/>
				</div>
				<h3 class="mb-auto line-clamp-3 text-xl leading-tight font-bold text-neutral-800">
					{item.title}
				</h3>
				<div class="mt-8">
					<button
						class="rounded-full border border-neutral-800 px-5 py-1.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-800 hover:text-white"
					>
						Selengkapnya
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>
