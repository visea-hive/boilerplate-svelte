<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";
    import { cn } from "$lib/utils";

	let { 
		ref = $bindable(null),
		value = $bindable(undefined),
        type = "single",
        collapsible = true,
		class: className = "",
		children,
		...restProps
	}: {
        ref?: any;
        value?: any;
        type?: "single" | "multiple";
        collapsible?: boolean;
        class?: string;
        children?: any;
        [key: string]: any;
    } = $props();
</script>

<Accordion.Root
	bind:ref
	bind:value
    {type}
    {collapsible}
	class={cn("space-y-4 w-full", className)}
	{...restProps}
>
	{@render children?.()}
</Accordion.Root>
