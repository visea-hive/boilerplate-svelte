<script lang="ts">
    import { Textarea as ShadcnTextarea } from "$lib/components/ui/textarea";
    import { cn } from "$lib/utils";
    import type { HTMLTextareaAttributes } from "svelte/elements";
    import { type Snippet } from "svelte";

    type TextareaStatus = "default" | "error" | "success";
    type TextareaSize = "large" | "default" | "small";

    interface Props extends Omit<HTMLTextareaAttributes, "prefix"> {
        /** Teks label utama di pojok kiri atas */
        label?: string;
        /** Teks label sekunder di pojok kanan atas */
        secondaryLabel?: string;
        /** Teks feedback di bagian bawah textarea */
        feedbackMsg?: string;
        /** Pesan error validasi (shortcut untuk status="error" dan feedbackMsg) */
        error?: string | string[];
        /** Status feedback untuk warna border (merah, hijau, default) */
        status?: TextareaStatus;
        /** Ukuran tinggi minimum dan skala font */
        textareaSize?: TextareaSize;
        /** Snippet untuk sayap kiri (prefix) */
        prefix?: Snippet;
        /** Snippet untuk sayap kanan (suffix) */
        suffix?: Snippet;
        /** Batas karakter maksimal */
        maxLength?: number;
        /** Status disabled */
        disabled?: boolean;
    }

    let {
        label,
        secondaryLabel,
        feedbackMsg,
        error,
        status = "default",
        textareaSize = "default",
        prefix,
        suffix,
        maxLength,
        disabled = false,
        class: className = "",
        value = $bindable(),
        ...restProps
    }: Props = $props();

    // Derived status and feedback from error prop
    let effectiveStatus = $derived(error ? "error" : status);
    let effectiveFeedback = $derived.by(() => {
        if (error) {
            return Array.isArray(error) ? error[0] : error;
        }
        return feedbackMsg;
    });

    // Mapping size classes
    let sizeClasses = $derived.by(() => {
        if (textareaSize === "large") return {
            minHeight: "min-h-[140px]",
            text: "text-base",
            padding: "px-4 py-3"
        };
        if (textareaSize === "small") return {
            minHeight: "min-h-[70px]",
            text: "text-xs",
            padding: "px-2 py-1.5"
        };
        return {
            minHeight: "min-h-[100px]",
            text: "text-sm",
            padding: "px-3 py-2"
        };
    });

    let statusBorderClass = $derived.by(() => {
        if (disabled) return "border-neutral-200 bg-neutral-50 text-neutral-400";
        if (effectiveStatus === "error") return "border-red-500 focus-within:ring-2 focus-within:ring-red-100 focus-within:border-red-600 bg-white shadow-sm";
        if (effectiveStatus === "success") return "border-green-500 focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-600 bg-white shadow-sm";
        return "border-neutral-300 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white shadow-sm";
    });

    let feedbackColor = $derived.by(() => {
        if (disabled) return "text-neutral-400";
        if (effectiveStatus === "error") return "text-red-500 font-medium";
        if (effectiveStatus === "success") return "text-green-500 font-medium";
        return "text-neutral-500";
    });

    // Character count logic
    let charCount = $derived(String(value ?? "").length);
</script>

<div class={cn("flex flex-col gap-1.5 w-full font-sans", className)}>
    <!-- Top Labels -->
    {#if label || secondaryLabel}
        <div class="flex justify-between items-center w-full px-0.5">
            {#if label}
                <span class={cn("font-medium text-neutral-800", textareaSize === "small" ? "text-xs" : "text-sm", disabled ? "text-neutral-400" : "")}>{label}</span>
            {/if}
            {#if secondaryLabel}
                <span class={cn("text-neutral-400", textareaSize === "small" ? "text-[11px]" : "text-xs")}>{secondaryLabel}</span>
            {/if}
        </div>
    {/if}

    <!-- Container wrapper -->
    <div class={cn(
        "flex items-stretch rounded-xl border transition-all duration-200 overflow-hidden",
        statusBorderClass,
        disabled ? "opacity-70 pointer-events-none" : ""
    )}>
        <!-- Prefix Snippet Area -->
        {#if prefix}
           <div class={cn(
               "flex flex-col items-center justify-start shrink-0 border-r py-3 transition-colors", 
               effectiveStatus === "default" && !disabled ? "border-neutral-200" : "border-inherit/30",
               textareaSize === "large" ? "px-4" : (textareaSize === "small" ? "px-2" : "px-3")
           )}>
               {@render prefix()}
           </div>
        {/if}

        <!-- Textarea Core -->
        <div class="flex-1 flex flex-col relative h-full">
            <ShadcnTextarea 
                class={cn(
                    "border-none ring-0 outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 w-full h-full bg-transparent rounded-none transition-none",
                    sizeClasses.minHeight,
                    sizeClasses.text,
                    sizeClasses.padding
                )}
                {disabled}
                bind:value
                maxLength={maxLength}
                {...restProps}
            />
        </div>

        <!-- Suffix snippet area + Char Counter -->
        {#if suffix || maxLength}
            <div class={cn(
                "flex flex-col items-center justify-start shrink-0 border-l py-3 transition-colors gap-3", 
                effectiveStatus === "default" && !disabled ? "border-neutral-200" : "border-inherit/30",
                textareaSize === "large" ? "px-4" : (textareaSize === "small" ? "px-2" : "px-3")
            )}>
                {#if maxLength}
                   <span class="text-[11px] font-mono font-medium text-neutral-400 tabular-nums">
                       {charCount}/{maxLength}
                   </span>
                {/if}

                {#if suffix}
                   {@render suffix()}
                {/if}
            </div>
        {/if}
    </div>

    <!-- Bottom Feedback -->
    {#if effectiveFeedback}
        <span class={cn("px-0.5", feedbackColor, textareaSize === "small" ? "text-[11px]" : "text-xs")}>
            {effectiveFeedback}
        </span>
    {/if}
</div>
