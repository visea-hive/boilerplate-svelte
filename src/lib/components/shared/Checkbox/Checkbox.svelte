<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import { Check, Minus } from "lucide-svelte";
	import { Label } from "$lib/components/ui/label";

	export type CheckboxSize = "sm" | "md" | "lg" | "xl";

	export type CheckboxProps = {
		checked?: boolean;
		indeterminate?: boolean;
		label?: string;
		description?: string;
		error?: string;
		disabled?: boolean;
		size?: CheckboxSize;
		id?: string;
		class?: string;
		onchange?: (checked: boolean) => void;
	};

	let {
		checked = $bindable(false),
		indeterminate = $bindable(false),
		label,
		description,
		error,
		disabled = false,
		size = "sm",
		id = Math.random().toString(36).substring(2, 9),
		class: className,
		onchange
	}: CheckboxProps = $props();

	function handleCheckedChange(v: boolean) {
		checked = v;
		if (onchange) onchange(v);
	}

	const sizeClasses = {
		sm: "size-4 rounded-[4px] border-[1.5px]",
		md: "size-5 rounded-[6px] border-2",
		lg: "size-6 rounded-[8px] border-2",
		xl: "size-7 rounded-[10px] border-2"
	};

	const iconSizeClasses = {
		sm: "size-2.5 stroke-[4]",
		md: "size-3.5 stroke-[3.5]",
		lg: "size-4 stroke-[3.5]",
		xl: "size-5 stroke-[3.5]"
	};

	// Mencocokkan tinggi baris pertama (Label) agar icon terseleras di tengah title
	const labelHeightClasses = {
		sm: "h-5",
		md: "h-6",
		lg: "h-6",
		xl: "h-6"
	};
</script>

<div class={cn("flex flex-col gap-1.5", className)}>
	<div class={cn("flex gap-3", description && labelHeightClasses[size] ? "" : "items-center")}>
		<!-- Wrapper icon dengan tinggi yang sama dengan baris pertama teks -->
		<div class={cn(
			"flex items-center shrink-0",
			description ? labelHeightClasses[size] : "h-full"
		)}>
			<CheckboxPrimitive.Root
				{id}
				bind:checked
				bind:indeterminate
				onCheckedChange={handleCheckedChange}
				disabled={disabled}
				class={cn(
					"peer flex shrink-0 items-center justify-center transition-all outline-none",
					sizeClasses[size],
					// Unselected
					"border-neutral-800 bg-white shadow-sm hover:border-neutral-600 hover:shadow-md",
					// Selected / Indeterminate
					"data-[state=checked]:bg-transparent data-[state=checked]:text-neutral-800",
					"data-[state=indeterminate]:bg-transparent data-[state=indeterminate]:text-neutral-800",
					// Disabled
					"disabled:cursor-not-allowed disabled:opacity-50 disabled:border-neutral-200 disabled:bg-neutral-50",
					// Error
					error && "border-red-500 hover:border-red-600"
				)}
			>
				{#snippet children({ checked, indeterminate })}
					<div class="flex items-center justify-center transition-all duration-200 transform scale-0 data-[state=checked]:scale-100 data-[state=indeterminate]:scale-100" data-state={indeterminate ? 'indeterminate' : (checked ? 'checked' : 'unchecked')}>
						{#if indeterminate}
							<Minus class={iconSizeClasses[size]} />
						{:else if checked}
							<Check class={iconSizeClasses[size]} />
						{/if}
					</div>
				{/snippet}
			</CheckboxPrimitive.Root>
		</div>

		{#if label || description}
			<div class={cn(
				"flex flex-col leading-tight",
				description ? "" : "justify-center"
			)}>
				{#if label}
					<div class={cn("flex items-center", description && labelHeightClasses[size])}>
						<Label
							for={id}
							class={cn(
								"font-bold text-neutral-800 cursor-pointer select-none",
								size === 'sm' ? "text-sm" : "text-base",
								disabled && "cursor-not-allowed opacity-50 font-medium"
							)}
						>
							{label}
						</Label>
					</div>
				{/if}
				{#if description}
					<p class={cn(
						"text-neutral-400 font-medium",
						size === 'sm' ? "text-[11px]" : "text-sm"
					)}>
						{description}
					</p>
				{/if}
			</div>
		{/if}
	</div>

	{#if error}
		<p class={cn(
			"text-red-500 font-medium",
			size === 'sm' ? "text-[10px] pl-7" : "text-xs pl-10"
		)}>
			{error}
		</p>
	{/if}
</div>

<style>
	/* Animasi transisi icon */
	[data-state=checked], [data-state=indeterminate] {
		transform: scale(1) !important;
	}
</style>
