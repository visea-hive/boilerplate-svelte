<script lang="ts">
	import { Search, ChevronDown, Phone, Instagram, Inbox } from '@lucide/svelte';
	import Pagination from '$lib/components/shared/pagination.svelte';

	interface Branch {
		name: string;
		description: string;
		mapLink?: string;
		phoneLink?: string;
		instagramLink?: string;
		emailLink?: string;
	}

	interface Props {
		title?: string;
		searchPlaceholder?: string;
		branches?: Branch[];
	}

	let {
		title = 'Unit Pendidikan & Cabang',
		searchPlaceholder = 'Cari Sekolah',
		branches = Array.from({ length: 9 }).map(() => ({
			name: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, augue nec accumsan mollis.',
			mapLink: '#',
			phoneLink: '#',
			instagramLink: '#',
			emailLink: '#'
		}))
	}: Props = $props();
</script>

<div class="mx-auto w-full px-4 md:px-6 pb-16 pt-8">
	<!-- Header & Filters -->
	<div class="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
		<h2 class="text-3xl font-bold text-txt-essentials-primary md:text-4xl">{title}</h2>
		
		<div class="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
			<!-- Search Input -->
			<div class="relative flex h-12 w-full items-center rounded-xl border border-gray-200 bg-white px-4 lg:w-[280px]">
				<input
					type="text"
					placeholder={searchPlaceholder}
					class="flex-1 bg-transparent text-[15px] outline-none placeholder:text-gray-400"
				/>
				<Search class="h-5 w-5 text-gray-400" />
			</div>

			<!-- Select Dropdown -->
			<div class="relative flex h-12 w-full cursor-pointer items-center justify-between gap-6 rounded-xl border border-gray-200 bg-white px-4 hover:bg-gray-50 lg:w-[240px]">
				<span class="text-[15px] text-gray-400">Semua Jenis Sekolah</span>
				<ChevronDown class="h-5 w-5 text-gray-400" />
			</div>
		</div>
	</div>

	<!-- Cards Grid -->
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each branches as branch, idx (idx)}
			<div class="flex flex-col rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
				<h3 class="mb-3 text-[22px] font-bold text-txt-essentials-primary">{branch.name}</h3>
				<p class="mb-8 text-[15px] leading-relaxed text-[#555555]">
					{branch.description}
				</p>
				
				<div class="mt-auto flex items-center justify-between gap-2">
					<a
						href={branch.mapLink}
						target="_blank"
						rel="external noopener noreferrer"
						class="rounded-full border border-gray-300 px-5 py-[10px] text-[14px] font-semibold text-[#8B8466] transition-colors hover:bg-gray-50 hover:text-[#7A7458]"
					>
						Lihat di Peta
					</a>
					<div class="flex items-center gap-2">
						{#if branch.emailLink}
							<a href={branch.emailLink} target="_blank" rel="external noopener noreferrer" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800">
								<Inbox class="h-[18px] w-[18px]" />
							</a>
						{/if}
						<a href={branch.phoneLink} target="_blank" rel="external noopener noreferrer" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800">
							<Phone class="h-[18px] w-[18px]" />
						</a>
						<a href={branch.instagramLink} target="_blank" rel="external noopener noreferrer" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800">
							<Instagram class="h-[18px] w-[18px]" />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Pagination -->
	<Pagination />
</div>
