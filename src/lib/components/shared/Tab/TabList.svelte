<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

	let { 
		ref = $bindable(null),
        class: className = "",
		children,
		...restProps
	}: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List bind:ref class={cn("flex flex-wrap items-center gap-8 w-full mb-6", className)} {...restProps}>
	{@render children?.()}
</TabsPrimitive.List>
