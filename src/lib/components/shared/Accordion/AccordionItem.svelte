<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";
    import { cn } from "$lib/utils";
    import type { Snippet } from "svelte";

	let { 
		value, 
        title,
        description = "",
		class: className = "",
		children
	}: {
        value: string;
        title: string;
        description?: string;
        class?: string;
        children?: Snippet;
    } = $props();
</script>

<Accordion.Item
	{value}
	class={cn(
        "border border-neutral-200 rounded-[12px] overflow-hidden transition-colors duration-200 bg-neutral-50",
        "data-[state=open]:bg-white data-[state=open]:shadow-sm data-[state=open]:border-neutral-200",
        className
    )}
>
	<Accordion.Trigger class="px-6 py-4 hover:no-underline text-base font-medium text-neutral-800">
		<div class="flex flex-col items-start gap-1 text-left">
            <span>{title}</span>
            {#if description}
                <span class="text-xs text-neutral-500 font-normal">{description}</span>
            {/if}
        </div>
	</Accordion.Trigger>
	<Accordion.Content class="px-6 pb-6 pt-0">
		{@render children?.()}
	</Accordion.Content>
</Accordion.Item>
