<script lang="ts" module>
	export type DropdownItem = {
		label: string;
		icon?: any;
		rightIcon?: any;
		onClick?: () => void;
		variant?: "default" | "danger" | "warning";
		shortcut?: string;
		disabled?: boolean;
	};

	export type DropdownSection = {
		label?: string;
		items: DropdownItem[];
	};
</script>

<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { cn } from "$lib/utils.js";
	import { ChevronDown } from "lucide-svelte";

	export type DropdownProps = {
		trigger?: import("svelte").Snippet;
		triggerLabel?: string;
		sections: DropdownSection[];
		align?: "start" | "center" | "end";
		side?: "top" | "right" | "bottom" | "left";
		class?: string;
		contentClass?: string;
		open?: boolean;
	};

	let {
		trigger,
		triggerLabel = "Pilih Opsi",
		sections = [],
		align = "end",
		side = "bottom",
		class: className = "",
		contentClass,
		open = $bindable(false)
	}: DropdownProps = $props();
</script>

<DropdownMenu.Root bind:open>
	<!-- DropdownMenu.Trigger adalah sebuah button secara default -->
	<DropdownMenu.Trigger 
		class={cn(
			"inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 h-11 text-sm font-bold text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/10",
			className
		)}
	>
		{#if trigger}
			{@render trigger()}
		{:else}
			<span class="truncate">{triggerLabel}</span>
			<ChevronDown class={cn("w-4 h-4 text-neutral-400 transition-transform duration-300 shrink-0", open && "rotate-180")} />
		{/if}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content 
		{align} 
		{side}
		sideOffset={8}
		class={cn(
			"w-64 p-0 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden ring-0 z-[100]",
			contentClass
		)}
	>
		{#each sections as section, sIdx}
			<div class={cn(sIdx > 0 && "border-t border-neutral-100")}>
				{#if section.label}
					<DropdownMenu.Label class="px-4 py-2 text-[11px] font-black uppercase tracking-[0.1em] text-neutral-400 bg-neutral-50/50">
						{section.label}
					</DropdownMenu.Label>
				{/if}
				
				<div class="p-0">
					{#each section.items as item, iIdx}
						<DropdownMenu.Item
							onSelect={() => item.onClick?.()}
							disabled={item.disabled}
							class={cn(
								"flex items-center justify-between px-4 py-3 cursor-pointer outline-none transition-colors",
								"hover:bg-neutral-50 focus:bg-neutral-50",
								iIdx < section.items.length - 1 && "border-b border-neutral-100/60",
								item.variant === "danger" && "text-red-600 focus:text-red-700 focus:bg-red-50/50",
								item.variant === "warning" && "text-amber-600 focus:text-amber-700 focus:bg-amber-50/50",
								!item.variant && "text-neutral-700",
								item.disabled && "opacity-50 cursor-not-allowed"
							)}
						>
							<div class="flex items-center gap-3 overflow-hidden">
								{#if item.icon}
									<item.icon class={cn("w-4.5 h-4.5 shrink-0", item.variant ? "text-current" : "text-neutral-400")} />
								{/if}
								<span class="font-medium truncate text-sm">
									{item.label}
								</span>
							</div>

							<div class="flex items-center gap-2 ml-4">
								{#if item.rightIcon}
									<item.rightIcon class="w-4 h-4 text-neutral-300" />
								{:else if item.shortcut}
									<span class="text-[10px] font-mono text-neutral-300 font-bold uppercase tracking-tighter bg-neutral-100 px-1.5 py-0.5 rounded">
										{item.shortcut}
									</span>
								{/if}
							</div>
						</DropdownMenu.Item>
					{/each}
				</div>
			</div>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
