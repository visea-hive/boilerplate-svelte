<script lang="ts">
    import { Input as ShadcnInput } from "$lib/components/ui/input";
    import { cn } from "$lib/utils";
    import type { HTMLInputAttributes } from "svelte/elements";
    import { type Snippet } from "svelte";

    type InputStatus = "default" | "error" | "success";
    type InputSize = "large" | "default" | "small";

    interface Props extends Omit<HTMLInputAttributes, "prefix"> {
        /** Teks label utama di pojok kiri atas */
        label?: string;
        /** Teks label sekunder di pojok kanan atas */
        secondaryLabel?: string;
        /** Teks feedback di bagian bawah input */
        feedbackMsg?: string;
        /** Pesan error validasi (shortcut untuk status="error" dan feedbackMsg) */
        error?: string | string[];
        /** Status *feedback* untuk mengubah warna form (hijau, merah, reguler) */
        status?: InputStatus;
        /** Ukuran tinggi dan proporsi font input */
        inputSize?: InputSize;
        /** Bagian depan / prefix add-on (bisa diisi ikon atau teks statis) */
        prefix?: Snippet;
        /** Bagian belakang / suffix add-on (bisa diisi ikon atau action) */
        suffix?: Snippet;
        /** Status disabled */
        disabled?: boolean;
    }

    let {
        label,
        secondaryLabel,
        feedbackMsg,
        error,
        status = "default",
        inputSize = "default",
        prefix,
        suffix,
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

    // Map sizing 
    let heightClass = $derived.by(() => {
        if (inputSize === "large") return "h-12 text-base";
        if (inputSize === "small") return "h-8 text-xs";
        return "h-10 text-sm"; // default
    });

    let paddingAddon = $derived.by(() => {
        if (inputSize === "large") return "px-4";
        if (inputSize === "small") return "px-2";
        return "px-3"; // default
    });

    // Map variant status
    let statusClasses = $derived.by(() => {
        if (disabled) return "border-neutral-200 bg-neutral-100 text-neutral-400";
        
        if (effectiveStatus === "error") {
            return "border-red-500 focus-within:ring-2 focus-within:ring-red-100 focus-within:border-red-600 bg-white";
        }
        if (effectiveStatus === "success") {
            return "border-green-500 focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-600 bg-white";
        }
        // default
        return "border-neutral-300 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white";
    });

    let feedbackColor = $derived.by(() => {
        if (disabled) return "text-neutral-400";
        if (effectiveStatus === "error") return "text-red-500 font-medium";
        if (effectiveStatus === "success") return "text-green-500 font-medium";
        return "text-neutral-500";
    });
</script>

<div class={cn("flex flex-col gap-1.5 w-full font-sans", className)}>
    <!-- Top Labels -->
    {#if label || secondaryLabel}
        <div class="flex justify-between items-center w-full px-0.5">
            {#if label}
                <span class={cn("font-medium text-neutral-800", inputSize === "small" ? "text-xs" : "text-sm", disabled ? "text-neutral-400" : "")}>{label}</span>
            {/if}
            {#if secondaryLabel}
                <span class={cn("text-neutral-400", inputSize === "small" ? "text-[11px]" : "text-xs")}>{secondaryLabel}</span>
            {/if}
        </div>
    {/if}

    <!-- The Input Container Wrapper -->
    <div 
        class={cn(
            "flex items-stretch rounded-xl border overflow-hidden transition-all duration-200 outline-none w-full",
            statusClasses, 
            heightClass,
            disabled ? "opacity-70 pointer-events-none" : ""
        )} 
    >
        <!-- Prefix Snippet Area -->
        {#if prefix}
            <div class={cn("flex items-center justify-center shrink-0 border-r bg-transparent transition-colors", effectiveStatus === "default" && !disabled ? "border-neutral-200" : "border-inherit/30", paddingAddon)}>
               {@render prefix()}
           </div>
        {/if}

        <ShadcnInput 
            class={cn(
                "border-none ring-0 outline-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-3 w-full h-full bg-transparent rounded-none",
                inputSize === "small" ? "text-xs placeholder:text-xs" : (inputSize === "large" ? "text-base placeholder:text-base" : "text-sm placeholder:text-sm")
            )}
            {disabled}
            bind:value
            {...restProps as any}
        />

        <!-- Suffix Snippet Area -->
        {#if suffix}
            <div class={cn("flex items-center justify-center shrink-0 border-l bg-transparent transition-colors", effectiveStatus === "default" && !disabled ? "border-neutral-200" : "border-inherit/30", paddingAddon)}>
               {@render suffix()}
           </div>
        {/if}
    </div>

    <!-- Bottom Feedback -->
    {#if effectiveFeedback}
        <span class={cn("px-0.5", feedbackColor, inputSize === "small" ? "text-[11px]" : "text-xs")}>
            {effectiveFeedback}
        </span>
    {/if}
</div>
