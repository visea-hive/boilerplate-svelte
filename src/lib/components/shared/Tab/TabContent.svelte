<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
    import { cn } from "$lib/utils";

	let { 
		ref = $bindable(null),
        value,
        class: className = "",
		children,
		...restProps
	}: TabsPrimitive.ContentProps = $props();
</script>

<TabsPrimitive.Content bind:ref {value} class={cn("focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md", className)} {...restProps}>
	{@render children?.()}
</TabsPrimitive.Content>
