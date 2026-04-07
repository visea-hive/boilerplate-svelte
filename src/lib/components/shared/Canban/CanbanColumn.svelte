<script lang="ts">
	import { dndzone, type DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import { MoreHorizontal, Plus } from 'lucide-svelte';
	import { cn } from "$lib/utils";
	import CanbanCard from './CanbanCard.svelte';
	import { type Snippet } from 'svelte';

	let {
		column,
		dragDuration = 200,
		cardSnippet,
		onConsider,
		onFinalize
	}: {
		column: any;
		dragDuration?: number;
		cardSnippet?: Snippet<[any]>;
		onConsider: (e: CustomEvent<DndEvent>) => void;
		onFinalize: (e: CustomEvent<DndEvent>) => void;
	} = $props();
</script>

<div class="flex flex-col flex-shrink-0 w-[320px] max-w-[320px] rounded-[24px] bg-neutral-50/50 border border-neutral-100 shadow-sm overflow-hidden h-full max-h-full">
	<!-- Header -->
	<div class="p-4 flex items-center justify-between border-b border-neutral-100/50 bg-white/50">
		<div class="flex items-center gap-2">
			<!-- Colored Dot -->
			<div class={cn("w-3 h-3 rounded-full shrink-0", column.colorClass || "bg-neutral-300")}></div>
			<h3 class="text-[15px] font-bold text-neutral-800 truncate">{column.title}</h3>
			<span class="text-[13px] font-medium text-neutral-400">({column.items?.length || 0})</span>
		</div>
		<div class="flex items-center gap-1 shrink-0">
			<button class="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-neutral-200">
				<MoreHorizontal class="w-4 h-4" />
			</button>
			<button class="p-1.5 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100">
				<Plus class="w-4 h-4" />
			</button>
		</div>
	</div>

	<!-- Cards drop zone -->
	<div 
		class="flex-1 p-3 overflow-y-auto space-y-3 min-h-[150px] custom-scrollbar"
		use:dndzone={{ items: column.items, flipDurationMs: dragDuration, dropTargetStyle: { outline: '2px dashed #93C5FD', borderRadius: '20px', background: 'rgba(239, 246, 255, 0.5)' } }}
		onconsider={onConsider}
		onfinalize={onFinalize}
	>
		{#each column.items as item (item.id)}
			<div animate:flip={{ duration: dragDuration }} class="outline-none">
				{#if cardSnippet}
					{@render cardSnippet(item)}
				{:else}
					<CanbanCard {item} />
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #cbd5e1;
		border-radius: 10px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #94a3b8;
	}
</style>
