<script lang="ts">
	import { cn } from "$lib/utils";
	import CanbanColumn from './CanbanColumn.svelte';
	import { type Snippet } from 'svelte';
	import type { DndEvent } from 'svelte-dnd-action';

	export type CanbanItem = {
		id: string;
		[key: string]: any;
	};

	export type CanbanColumnData<T extends CanbanItem = CanbanItem> = {
		id: string;
		title: string;
		colorClass?: string;
		items: T[];
	};

	type Props = {
		/** Data kolom berisi items (2-way bindable) */
		columns: CanbanColumnData[];
		/** Durasi animasi transisi drag and drop (ms) */
		dragDuration?: number;
		/** Snippet kustom jika ingin me-render desain card sendiri */
		cardSnippet?: Snippet<[any]>;
		/** Class tambahan untuk area scroll Kanban */
		class?: string;
	};

	let {
		columns = $bindable([]),
		dragDuration = 200,
		cardSnippet,
		class: className = ""
	}: Props = $props();

	function handleDndConsider(colId: string, e: CustomEvent<DndEvent>) {
		const colIdx = columns.findIndex((c: CanbanColumnData) => c.id === colId);
		if (colIdx !== -1) {
			columns[colIdx].items = e.detail.items as any;
		}
	}

	function handleDndFinalize(colId: string, e: CustomEvent<DndEvent>) {
		const colIdx = columns.findIndex((c: CanbanColumnData) => c.id === colId);
		if (colIdx !== -1) {
			columns[colIdx].items = e.detail.items as any;
		}
		// Memicu reaktivitas
		columns = [...columns];
	}
</script>

<div class={cn("flex flex-nowrap items-start gap-4 overflow-x-auto w-full pb-6 h-full custom-scrollbar", className)}>
	{#each columns as column (column.id)}
		<CanbanColumn
			{column}
			{dragDuration}
			{cardSnippet}
			onConsider={(e) => handleDndConsider(column.id, e)}
			onFinalize={(e) => handleDndFinalize(column.id, e)}
		/>
	{/each}
</div>

<style>
	.custom-scrollbar::-webkit-scrollbar {
		height: 8px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #e2e8f0;
		border-radius: 10px;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: #cbd5e1;
	}
</style>
