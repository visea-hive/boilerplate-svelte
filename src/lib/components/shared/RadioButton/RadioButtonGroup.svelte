<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	export type RadioGroupProps = {
		value?: string;
		label?: string;
		description?: string;
		error?: string;
		disabled?: boolean;
		orientation?: "horizontal" | "vertical";
		class?: string;
		children?: import("svelte").Snippet;
		onchange?: (value: string) => void;
	};

	let {
		value = $bindable(""),
		label,
		description,
		error,
		disabled = false,
		orientation = "vertical",
		class: className,
		children,
		onchange
	}: RadioGroupProps = $props();

	function handleValueChange(v: string | undefined) {
		if (v) {
			value = v;
			if (onchange) onchange(v);
		}
	}
</script>

<div class={cn("grid gap-4", className)}>
	{#if label || description}
		<div class="space-y-1.5">
			{#if label}
				<h3 class="text-sm font-bold text-neutral-800 tracking-tight uppercase">{label}</h3>
			{/if}
			{#if description}
				<p class="text-[13px] text-neutral-400 font-medium leading-relaxed">{description}</p>
			{/if}
		</div>
	{/if}

	<RadioGroupPrimitive.Root
		bind:value
		onValueChange={handleValueChange}
		disabled={disabled}
		class={cn(
			"grid",
			orientation === "horizontal" ? "flex flex-wrap gap-6" : "gap-4"
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</RadioGroupPrimitive.Root>

	{#if error}
		<p class="text-xs text-red-500 font-medium mt-1">{error}</p>
	{/if}
</div>
