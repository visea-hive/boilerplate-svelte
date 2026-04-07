<script lang="ts">
	import { MessageCircle, CircleCheck, CircleDashed } from 'lucide-svelte';
	import { cn } from "$lib/utils";

	let {
		item,
		class: className = ""
	}: {
		item: any;
		class?: string;
	} = $props();
</script>

<div class={cn("p-4 bg-white rounded-[20px] shadow-sm border border-neutral-100/80 group hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing", className)}>
	<div class="flex justify-between items-start mb-2">
		<div class="space-y-0.5 min-w-0 pr-2">
			<h4 class="text-[14px] font-bold text-neutral-800 leading-tight truncate">{item.title}</h4>
			{#if item.subtitle}
				<p class="text-[12px] text-neutral-500 font-medium truncate">{item.subtitle}</p>
			{/if}
		</div>
		{#if item.badge}
			<span class="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 text-[10px] font-bold shrink-0">{item.badge}</span>
		{/if}
	</div>

	<div class="flex items-center justify-between mb-4 mt-3">
		{#if item.statusLabel}
			<span class={cn(
				"px-2.5 py-1 rounded-full text-[11px] font-bold border",
				item.statusVariant === 'success' ? "bg-green-50 text-green-600 border-green-100" :
				item.statusVariant === 'danger' ? "bg-red-50 text-red-600 border-red-100" :
				item.statusVariant === 'warning' ? "bg-orange-50 text-orange-600 border-orange-100" :
				"bg-blue-50 text-blue-600 border-blue-100"
			)}>
				{item.statusLabel}
			</span>
		{:else}
			<div></div>
		{/if}

		<div class="flex items-center gap-3 text-[11px] font-medium text-neutral-500 shrink-0">
			{#if item.messages !== undefined}
				<div class="flex items-center gap-1">
					<MessageCircle class="w-3.5 h-3.5 text-neutral-400" />
					<span>{item.messages}</span>
				</div>
			{/if}
			{#if item.taskStatus}
				<div class="flex items-center gap-1">
					{#if item.taskStatus === 'Completed'}
						<CircleCheck class="w-3.5 h-3.5 text-neutral-400" />
					{:else}
						<CircleDashed class="w-3.5 h-3.5 text-neutral-400" />
					{/if}
					<span>{item.taskStatus}</span>
				</div>
			{/if}
		</div>
	</div>

	<div class="pt-3 flex items-center justify-between border-t border-neutral-100/80">
		<span class="text-[10px] text-neutral-400 font-medium">Terakhir Diupdate: {item.lastUpdated || '-'}</span>
		{#if item.avatar}
			<img src={item.avatar} alt="Avatar" class="w-5 h-5 rounded-full object-cover ring-2 ring-white" />
		{:else}
			<div class="w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[8px] font-bold text-neutral-400">-</div>
		{/if}
	</div>
</div>
