<script lang="ts">
    import { Badge as ShadcnBadge } from "$lib/components/ui/badge";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    // Defining the variant styling matching the image precisely
    type VariantColor = "success" | "warning" | "danger" | "neutral" | "primary";
    type IconPosition = "left" | "right" | "none" | "only";
    type BadgeSize = "large" | "default" | "small";

    interface Props extends /* @__PURE__ */ ComponentProps<typeof ShadcnBadge> {
        /** Warna varian utama dari badge */
        variantColor?: VariantColor;
        /** Posisi ikon pada badge */
        iconPosition?: IconPosition;
        /** Ukuran proporsi badge */
        badgeSize?: BadgeSize;
        /** Ikon Lucide atau komponen ikon Svelte lainnya */
        icon?: any;
    }

    let {
        variantColor = "success",
        iconPosition = "none",
        badgeSize = "default",
        icon: Icon,
        class: className = "",
        children,
        href,
        ...restProps
    }: Props = $props();

    // Map variant color to styling classes
    let computedVariantClass = $derived.by(() => {
        if (variantColor === "success") return "bg-[#22A75D] hover:bg-[#1C8D4D] text-white";
        if (variantColor === "warning") return "bg-[#F37519] hover:bg-[#D6610E] text-white";
        if (variantColor === "danger")  return "bg-[#FF1A1A] hover:bg-[#D21313] text-white";
        if (variantColor === "neutral") return "bg-[#5F6368] hover:bg-[#4D5155] text-white";
        if (variantColor === "primary") return "bg-[#5145CD] hover:bg-[#4136A8] text-white";
        
        return "bg-[#22A75D] hover:bg-[#1C8D4D] text-white"; // fallback
    });

    // Computed styles based on size parameter
    let styleConfig = $derived.by(() => {
        if (badgeSize === "large") {
            return {
                text: "text-[16px]",
                iconSize: "!size-[24px]",
                layoutClass: iconPosition === "only" ? "px-0 w-12 h-12 justify-center" : "px-6 py-3 h-12",
                gapLeft: "mr-2",
                gapRight: "ml-2"
            };
        } else if (badgeSize === "small") {
            return {
                text: "text-[12px]",
                iconSize: "!size-[16px]",
                layoutClass: iconPosition === "only" ? "px-0 w-6 h-6 justify-center" : "px-3 py-1 h-6",
                gapLeft: "mr-1",
                gapRight: "ml-1"
            };
        } else {
            // default
            return {
                text: "text-[14px]",
                iconSize: "!size-[20px]",
                layoutClass: iconPosition === "only" ? "px-0 w-9 h-9 justify-center" : "px-4 py-2 h-9",
                gapLeft: "mr-1.5",
                gapRight: "ml-1.5"
            };
        }
    });

    const baseClass = "rounded-full font-medium transition-all duration-200 border-none items-center shadow-none inline-flex shrink-0";

</script>

<ShadcnBadge 
    class={cn(baseClass, computedVariantClass, styleConfig.layoutClass, className)} 
    {href}
    {...restProps}
>
    {#if iconPosition === "left" && Icon}
        <Icon class={cn(styleConfig.iconSize, styleConfig.gapLeft)} />
    {/if}
    
    {#if iconPosition !== "only"}
        <span class={cn("leading-none whitespace-nowrap", styleConfig.text)}>
            {@render children?.()}
        </span>
    {/if}

    {#if (iconPosition === "right" || iconPosition === "only") && Icon}
        <Icon class={cn(styleConfig.iconSize, iconPosition === "only" ? "" : styleConfig.gapRight)} />
    {/if}
</ShadcnBadge>
