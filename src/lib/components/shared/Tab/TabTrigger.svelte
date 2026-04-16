<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

	let { 
		ref = $bindable(null),
        value,
        class: className = "",
		children,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger bind:ref {value} class={cn(
        "visea-tab-trigger",
        "relative flex items-center justify-center gap-2 px-1 py-3 text-[20px] font-normal transition-colors bg-transparent",
        "text-neutral-400 hover:text-neutral-500",
        "focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-blue-600 rounded-t-md",
        className
    )} {...restProps}>
	{@render children?.()}
</TabsPrimitive.Trigger>

<style>
    :global(.visea-tab-trigger) {
        border-bottom: 3px solid transparent !important;
    }
    :global(.visea-tab-trigger[data-state="active"]) {
        color: #171717 !important;
        border-bottom-color: #171717 !important;
        font-weight: 600 !important;
    }
</style>
