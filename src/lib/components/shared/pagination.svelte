<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';

	interface Props {
		startItem?: number;
		endItem?: number;
		totalItems?: number;
		itemsPerPage?: number;
	}

	let {
		startItem = 1,
		endItem = 9,
		totalItems = 200,
		itemsPerPage = 9
	}: Props = $props();
</script>

<div class="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
	<span class="text-[13px] font-medium text-[#777777]">Showing {startItem} - {endItem} of {totalItems}</span>
	
	<div class="flex flex-wrap items-center justify-center gap-[6px]">
		<button disabled class="flex h-8 items-center justify-center rounded-md px-3 text-[13px] text-gray-400 transition-colors hover:bg-gray-50 disabled:hover:bg-transparent">Prev</button>
		<button class="flex h-8 w-8 items-center justify-center rounded-md bg-[#8E8B82] text-[13px] font-semibold text-white">1</button>
		<button class="flex h-8 w-8 items-center justify-center rounded-md text-[13px] text-[#777777] transition-colors hover:bg-gray-50 hover:text-gray-900">2</button>
		<button class="flex h-8 w-8 items-center justify-center rounded-md text-[13px] text-[#777777] transition-colors hover:bg-gray-50 hover:text-gray-900">3</button>
		<span class="flex h-8 w-4 items-center justify-center text-[13px] text-gray-400">...</span>
		<button class="flex h-8 w-8 items-center justify-center rounded-md text-[13px] text-[#777777] transition-colors hover:bg-gray-50 hover:text-gray-900">10</button>
		<button class="flex h-8 items-center justify-center rounded-md px-3 text-[13px] text-[#777777] transition-colors hover:bg-gray-50 hover:text-gray-900">Next</button>
		
		<div class="ml-2 flex h-8 cursor-pointer items-center justify-between gap-2 rounded-md border border-gray-200 px-3 transition-colors hover:bg-gray-50">
			<span class="text-[13px] text-gray-600">{itemsPerPage}</span>
			<ChevronDown class="h-[14px] w-[14px] text-gray-400"/>
		</div>
	</div>
</div>
