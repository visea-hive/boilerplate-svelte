<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import { Label } from "$lib/components/ui/label";

	export type RadioButtonSize = "sm" | "md" | "lg" | "xl";

	export type RadioButtonProps = {
		value: string;
		label?: string;
		description?: string;
		disabled?: boolean;
		size?: RadioButtonSize;
		id?: string;
		class?: string;
	};

	let {
		value,
		label,
		description,
		disabled = false,
		size = "sm",
		id = Math.random().toString(36).substring(2, 9),
		class: className
	}: RadioButtonProps = $props();

	const sizeClasses = {
		sm: "size-4",
		md: "size-5",
		lg: "size-6",
		xl: "size-7"
	};

	const dotClasses = {
		sm: "size-[10px]",
		md: "size-[13px]",
		lg: "size-[15px]",
		xl: "size-[18px]"
	};
	
	// Mencocokkan tinggi baris pertama (Label) agar icon terseleras di tengah title
	const labelHeightClasses = {
		sm: "h-5",
		md: "h-6",
		lg: "h-7",
		xl: "h-7"
	};
</script>

<div class={cn("flex gap-4", className)}>
	<!-- Wrapper icon untuk alignment presisi terhadap baris pertama (title) -->
	<div class={cn(
		"flex items-center shrink-0",
		description ? labelHeightClasses[size] : "h-full"
	)}>
		<RadioGroupPrimitive.Item
			{value}
			{id}
			disabled={disabled}
			class={cn(
				"peer relative flex items-center justify-center rounded-full transition-all outline-none",
				sizeClasses[size],
				"bg-white shadow-sm ring-0 border-none",
				"hover:shadow-md active:scale-95",
				"disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-100"
			)}
		>
			{#snippet children({ checked })}
				{#if checked}
					<div 
						class={cn(
							"rounded-full bg-blue-600 transition-all duration-300 transform scale-100",
							dotClasses[size]
						)}
					></div>
				{/if}
			{/snippet}
		</RadioGroupPrimitive.Item>
	</div>

	{#if label || description}
		<div class={cn(
			"flex flex-col leading-none jus",
			description ? "gap-1.5" : "justify-center h-full"
		)}>
			{#if label}
				<div class={cn("flex items-center", description && labelHeightClasses[size])}>
					<Label
						for={id}
						class={cn(
							"font-bold text-neutral-800 cursor-pointer select-none m-0 p-0 block leading-none antialiased",
							size === 'sm' ? "text-sm" : 
							size === 'md' ? "text-base" : 
							"text-lg",
							disabled && "cursor-not-allowed opacity-40 font-medium"
						)}
					>
						{label}
					</Label>
				</div>
			{/if}
			{#if description}
				<p class={cn(
					"text-neutral-400 font-medium",
					size === 'sm' ? "text-[11px]" : "text-sm font-normal"
				)}>
					{description}
				</p>
			{/if}
		</div>
	{/if}
</div>
