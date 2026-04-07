<script lang="ts">
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";
	import { cn } from "$lib/utils.js";

	export type BreadcrumbItem = {
		label: string;
		href?: string;
	};

	export type BreadcrumbProps = {
		items: BreadcrumbItem[];
		maxItems?: number; // Jumlah maksimum item sebelum diklasifikasi menjadi ellipsis
		class?: string;
	};

	let {
		items = [],
		maxItems = 5,
		class: className
	}: BreadcrumbProps = $props();

	/**
	 * Logika untuk memangkas item jika melebihi maxItems
	 * Kita pertahankan item pertama dan item terakhir, sisanya dimasukkan ke ellipsis jika perlu.
	 */
	const processedItems = $derived.by(() => {
		if (items.length <= maxItems) return items;

		const firstItem = items[0];
		const lastItem = items[items.length - 1];
		
		// Jika maxItems = 3, kita tampilkan [First, ..., Last]
		// Jika maxItems = 4, kita tampilkan [First, Item2, ..., Last]? 
		// Sederhananya: ambil 1 di depan, 1 di belakang, sisanya ditengah jika > 2
		
		if (maxItems <= 2) return [firstItem, { label: "...", href: "" }, lastItem];
		
		// Ambil head dan tail berdasarkan sisa maxItems
		const headCount = Math.ceil((maxItems - 1) / 2);
		const tailCount = maxItems - headCount - 1; // -1 untuk ellipsis

		const head = items.slice(0, headCount);
		const tail = items.slice(-tailCount);

		return [...head, { label: "...", href: "" }, ...tail];
	});
</script>

<Breadcrumb.Root class={cn("font-sans", className)}>
	<Breadcrumb.List class="flex items-center gap-2">
		{#each processedItems as item, i}
			<Breadcrumb.Item>
				{#if item.label === "..."}
					<Breadcrumb.Ellipsis class="text-neutral-400" />
				{:else if i === processedItems.length - 1}
					<Breadcrumb.Page class="text-blue-600 font-bold text-sm tracking-tight">
						{item.label}
					</Breadcrumb.Page>
				{:else}
					<Breadcrumb.Link 
						href={item.href} 
						class="text-neutral-400 hover:text-neutral-600 transition-colors text-sm font-medium"
					>
						{item.label}
					</Breadcrumb.Link>
				{/if}
			</Breadcrumb.Item>
			
			{#if i < processedItems.length - 1}
				<Breadcrumb.Separator class="text-neutral-300 font-light mx-1">
					/
				</Breadcrumb.Separator>
			{/if}
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>
