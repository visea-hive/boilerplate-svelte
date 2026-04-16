<script lang="ts">
    import * as SelectPrimitive from "$lib/components/ui/select";
    import { Badge } from "$lib/components/ui/badge";
    import { cn } from "$lib/utils";
    import { X } from "lucide-svelte";
    import { type Snippet } from "svelte";

    export type SelectItem = {
        value: string;
        label: string;
        icon?: any;
        disabled?: boolean;
    };

    export type SelectStatus = "default" | "error" | "success";
    export type SelectSize = "large" | "default" | "small";

    interface Props {
        /** Daftar opsi untuk dropdown */
        items: SelectItem[];
        /** Mode pemilihan (single atau multiple) */
        type?: "single" | "multiple";
        /** Nilai terpilih (bindable) */
        value?: any;
        /** Teks placeholder jika belum ada pilihan */
        placeholder?: string;
        /** Teks label utama di pojok kiri atas */
        label?: string;
        /** Teks label sekunder di pojok kanan atas */
        secondaryLabel?: string;
        /** Teks feedback di bagian bawah */
        feedbackMsg?: string;
        /** Pesan error validasi (shortcut untuk status="error" dan feedbackMsg) */
        error?: string | string[];
        /** Status feedback untuk warna border (error, success, default) */
        status?: SelectStatus;
        /** Ukuran tinggi dan proporsi font */
        size?: SelectSize;
        /** Status dinonaktifkan */
        disabled?: boolean;
        /** Slot untuk elemen di bagian depan trigger */
        prefix?: Snippet;
        /** Limit badge yang ditampilkan pada mode multiple */
        maxDisplay?: number;
        /** Class tambahan untuk container luar */
        class?: string;
    }

    let {
        items = [],
        type = "single",
        value = $bindable(),
        placeholder = "Pilih opsi",
        label,
        secondaryLabel,
        feedbackMsg,
        error,
        status = "default",
        size = "default",
        disabled = false,
        prefix,
        maxDisplay = 2,
        class: className = ""
    }: Props = $props();

    // Derived status and feedback from error prop
    let effectiveStatus = $derived(error ? "error" : status);
    let effectiveFeedback = $derived.by(() => {
        if (error) {
            return Array.isArray(error) ? error[0] : error;
        }
        return feedbackMsg;
    });

    // Derived classes for sizing (aligned with Input component)
    let heightClass = $derived.by(() => {
        if (size === "large") return "h-12 text-base";
        if (size === "small") return "h-8 text-xs";
        return "h-10 text-sm"; // default
    });


    // Variant status styles (aligned with Input component)
    let statusClasses = $derived.by(() => {
        if (disabled) return "border-neutral-200 bg-neutral-100 text-neutral-400";
        
        if (effectiveStatus === "error") {
            return "border-red-500 focus-within:ring-2 focus-within:ring-red-100 focus-within:border-red-600 bg-white";
        }
        if (effectiveStatus === "success") {
            return "border-green-500 focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-600 bg-white";
        }
        return "border-neutral-300 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white";
    });

    let feedbackColor = $derived.by(() => {
        if (disabled) return "text-neutral-400";
        if (effectiveStatus === "error") return "text-red-500 font-medium";
        if (effectiveStatus === "success") return "text-green-500 font-medium";
        return "text-neutral-500";
    });

    // Initialize value as array if multiple mode and empty
    $effect(() => {
        if (type === "multiple" && !Array.isArray(value)) {
            value = [];
        }
    });

    // Find selected items based on value (handles single or multiple)
    let selectedItems = $derived.by(() => {
        if (!value) return [];
        if (type === "multiple" && Array.isArray(value)) {
            return items.filter(i => value.includes(i.value));
        }
        const found = items.find(i => i.value === value);
        return found ? [found] : [];
    });

    // Toggle function for multi-select removal
    function removeItem(itemValue: string, e: Event) {
        e.stopPropagation();
        e.preventDefault();
        if (type === "multiple" && Array.isArray(value)) {
            value = value.filter((v: any) => v !== itemValue);
        }
    }
</script>

<div class={cn("flex flex-col gap-1.5 w-full font-sans", className)}>
    <!-- Top Labels -->
    {#if label || secondaryLabel}
        <div class="flex justify-between items-center w-full px-0.5">
            {#if label}
                <span class={cn("font-medium text-neutral-800 transition-colors", size === "small" ? "text-xs" : "text-sm", disabled ? "text-neutral-400" : "")}>{label}</span>
            {/if}
            {#if secondaryLabel}
                <span class={cn("text-neutral-400", size === "small" ? "text-[11px]" : "text-xs")}>{secondaryLabel}</span>
            {/if}
        </div>
    {/if}

    <!-- Select Container -->
    <SelectPrimitive.Root {type} bind:value={value as any} disabled={disabled}>
        <SelectPrimitive.Trigger 
            class={cn(
                "flex items-center p-0 pr-3 rounded-xl border overflow-hidden transition-all duration-200 outline-none w-full shadow-none group/trigger",
                statusClasses, 
                heightClass,
                disabled ? "opacity-70 pointer-events-none" : ""
            )} 
        >
            <!-- Prefix Snippet Area -->
            {#if prefix}
                <div class={cn("flex items-center justify-center shrink-0 border-r bg-transparent transition-colors h-full w-10", effectiveStatus === "default" && !disabled ? "border-neutral-200" : "border-inherit/30")}>
                    {@render prefix()}
                </div>
            {/if}

            <div class={cn("flex-1 flex items-center min-w-0 h-full", prefix ? "px-3" : "pl-3 pr-2")}>
                <div class="flex items-center gap-1.5 truncate h-full flex-wrap py-1">
                    {#if selectedItems.length > 0}
                        {#if type === "multiple"}
                            {#each selectedItems.slice(0, maxDisplay) as item (item.value)}
                                <Badge variant="secondary" class="h-6 gap-1 px-2 py-0 text-[11px] bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 shrink-0">
                                    {#if item.icon}
                                        <item.icon class="w-3 h-3" />
                                    {/if}
                                    {item.label}
                                    <span 
                                        role="button"
                                        tabindex="0"
                                        class="hover:text-blue-900 transition-colors cursor-pointer"
                                        onpointerdown={(e) => {
                                            removeItem(item.value, e);
                                        }}
                                        onclick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                        }}
                                        onkeydown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                removeItem(item.value, e);
                                            }
                                        }}
                                    >
                                        <X class="w-3 h-3" />
                                    </span>
                                </Badge>
                            {/each}
                            {#if selectedItems.length > maxDisplay}
                                <Badge variant="secondary" class="h-6 px-2 text-[11px] bg-neutral-100 text-neutral-600 border-neutral-200">
                                    +{selectedItems.length - maxDisplay} more
                                </Badge>
                            {/if}
                        {:else}
                            {@const item = selectedItems[0]}
                            {#if item.icon}
                                <item.icon class="w-4 h-4 text-neutral-400 shrink-0" />
                            {/if}
                            <span class="truncate font-medium">
                                {item.label}
                            </span>
                        {/if}
                    {:else}
                        <span class="text-neutral-400 font-normal truncate">
                            {placeholder}
                        </span>
                    {/if}
                </div>
            </div>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Content class="w-full min-w-[var(--bits-select-trigger-width)] p-1 rounded-2xl shadow-2xl border border-neutral-100 bg-white mt-1 z-50 overflow-hidden">
            <div class="max-h-[300px] overflow-y-auto p-1 space-y-0.5 custom-scrollbar">
                {#each items as item (item.value)}
                    <SelectPrimitive.Item 
                        value={item.value} 
                        disabled={item.disabled}
                        class={cn(
                            "flex items-center justify-between px-3 py-2.5 rounded-xl cursor-default outline-none transition-all select-none",
                            "hover:bg-blue-50/50 focus:bg-blue-50/50 group/item",
                            "data-[selected]:bg-blue-50 data-[selected]:text-blue-600",
                            item.disabled && "opacity-40 grayscale"
                        )}
                    >
                        <div class="flex items-center gap-3 overflow-hidden">
                            {#if item.icon}
                                <item.icon class={cn("w-4.5 h-4.5 shrink-0 transition-colors", value === item.value ? "text-blue-600" : "text-neutral-400 group-hover/item:text-blue-500")} />
                            {/if}
                            <span class="font-semibold truncate text-sm">
                                {item.label}
                            </span>
                        </div>
                    </SelectPrimitive.Item>
                {:else}
                    <div class="px-3 py-8 text-center">
                        <p class="text-sm text-neutral-400 font-medium italic">Tidak ada opsi tersedia</p>
                    </div>
                {/each}
            </div>
        </SelectPrimitive.Content>
    </SelectPrimitive.Root>

    <!-- Bottom Feedback -->
    {#if effectiveFeedback}
        <span class={cn("px-0.5 transition-all duration-200", feedbackColor, size === "small" ? "text-[11px]" : "text-xs")}>
            {effectiveFeedback}
        </span>
    {/if}
</div>

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #e5e7eb;
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #d1d5db;
    }
</style>
