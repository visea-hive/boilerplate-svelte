<script lang="ts">
    import { cn } from "$lib/utils";
    import { CircleCheck } from "lucide-svelte";

    type StepperStatus = "active" | "completed" | "pending";

    interface Props {
        /** Judul utama langkah */
        title: string;
        /** Keterangan tambahan di bawah judul */
        subtitle?: string;
        /** Status langkah saat ini */
        status?: StepperStatus;
        /** Ikon Lucide atau komponen Svelte lain */
        icon?: any;
        /** Orientasi tata letak (vertikal/horizontal) */
        orientation?: "vertical" | "horizontal";
        /** Class tambahan untuk container */
        class?: string;
    }

    let {
        title,
        subtitle,
        status = "pending",
        icon: Icon,
        orientation = "vertical",
        class: className = ""
    }: Props = $props();

    let computedClasses = $derived.by(() => {
        if (status === "active") return "bg-white border-2 border-blue-500 shadow-md transform-none";
        
        if (status === "completed") return "bg-neutral-50/50 border-neutral-100 border transition-opacity";
        
        // pending
        return "bg-neutral-50 border-transparent border transition-all grayscale-[0.3]";
    });

    let contentClasses = $derived.by(() => {
        if (status === "active") return {
            title: "text-neutral-900 font-bold",
            subtitle: "text-neutral-500",
            iconBox: "bg-blue-50 text-blue-600 border-blue-100",
            icon: "text-blue-500"
        };
        // completed & pending use gray by default
        return {
            title: "text-neutral-600 font-semibold",
            subtitle: "text-neutral-400",
            iconBox: "bg-neutral-100 text-neutral-500 border-neutral-200",
            icon: "text-neutral-400"
        };
    });

</script>

<div class={cn(
    "flex gap-5 p-6 rounded-[24px] transition-all duration-300 relative select-none",
    orientation === "vertical" ? "flex-row items-center w-full" : "flex-col items-center text-center flex-1 min-w-[200px]",
    computedClasses,
    className
)}>
    <!-- Icon Placeholder Box -->
    <div class={cn(
        "flex items-center justify-center shrink-0 rounded-2xl border transition-colors duration-300",
        orientation === "vertical" ? "w-16 h-16" : "w-14 h-14",
        contentClasses.iconBox
    )}>
        {#if Icon}
           <Icon class={cn("transition-colors", orientation === "vertical" ? "size-7" : "size-6", contentClasses.icon)} />
        {/if}
    </div>

    <!-- Text Group -->
    <div class="flex flex-col flex-1 gap-0.5 justify-center">
        <h3 class={cn("text-[18px] leading-tight transition-colors", contentClasses.title)}>
            {title}
        </h3>
        {#if subtitle}
            <p class={cn("text-[16px] transition-colors", contentClasses.subtitle)}>
                {subtitle}
            </p>
        {/if}
    </div>

    <!-- Status Indicator (Checkmark) -->
    {#if status === "completed"}
        <div class={cn(
            "flex items-center justify-center shrink-0 animate-in fade-in zoom-in duration-300",
            orientation === "vertical" ? "ml-2" : "absolute top-4 right-4"
        )}>
            <CircleCheck class={cn("text-green-500", orientation === "vertical" ? "size-7" : "size-5")} />
        </div>
    {/if}
</div>
