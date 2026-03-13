<script lang="ts">
	import { Search } from '@lucide/svelte';
	import Pagination from '$lib/components/shared/pagination.svelte';
	import { resolve } from '$app/paths';

	interface NewsItem {
		title: string;
		image: string;
		link: string;
	}

	interface Props {
		title?: string;
		searchPlaceholder?: string;
		newsItems?: NewsItem[];
	}

	let {
		title = 'Berita & Kegiatan Terbaru',
		searchPlaceholder = 'Cari Berita',
		newsItems = []
	}: Props = $props();
</script>

<div class="mx-auto w-full  px-4 md:px-6 pb-16 pt-8">
	<!-- Header & Filters -->
	<div class="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
		<h2 class="text-3xl font-bold text-txt-essentials-primary md:text-4xl">{title}</h2>
		
		<div class="flex w-full lg:w-auto">
			<!-- Search Input -->
			<div class="relative flex h-12 w-full items-center rounded-xl border border-gray-200 bg-white px-4 lg:w-[280px]">
				<input
					type="text"
					placeholder={searchPlaceholder}
					class="flex-1 bg-transparent text-[15px] outline-none placeholder:text-gray-400"
				/>
				<Search class="h-5 w-5 text-gray-400" />
			</div>
		</div>
	</div>

	<!-- Cards Grid -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each newsItems as item, idx (idx)}
			<div class="flex flex-col overflow-hidden rounded-[20px] border-[1.5px] border-[#EFEFEF] bg-[#F9F9F9] p-5 transition-all hover:border-gray-200 hover:shadow-md">
				<!-- Image -->
				<div class="mb-5 overflow-hidden rounded-[14px]">
					<img
						src={item.image}
						alt={item.title}
						class="aspect-video rounded-2xl w-full object-cover transition-transform duration-500 hover:scale-105"
					/>
				</div>
				
				<!-- Title -->
				<h3 class="mb-6 line-clamp-3 text-[18px] font-bold leading-snug text-txt-essentials-primary">
					{item.title}
				</h3>
				
				<!-- Divider -->
				<div class="flex flex-col gap-6 mt-auto">
					<div class="w-full h-px  bg-gray-200/60"></div>
					<div class="flex">
						<a
							href={resolve(item.link as any)}
							class="flex items-center justify-center rounded-full border border-[#4A4A4A] px-5 py-2 text-[14px] font-medium text-[#4A4A4A] transition-colors hover:bg-[#4A4A4A] hover:text-white"
						>
							Selengkapnya
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Pagination -->
	<Pagination />
</div>
