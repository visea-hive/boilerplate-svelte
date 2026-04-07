<script lang="ts">
    import { Button as ShadcnButton } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
    import type { ComponentProps } from "svelte";

    type VariantColor = "primary" | "secondary" | "dark" | "light" | "gray";
    type VariantStyle = "solid" | "soft" | "ghost" | "white";
    type IconPosition = "left" | "right" | "none" | "only";
    type ButtonSize = "large" | "default" | "small";

    interface Props extends /* @__PURE__ */ ComponentProps<typeof ShadcnButton> {
        /** Warna varian utama dari tombol */
        variantColor?: VariantColor;
        /** Gaya visual tombol */
        variantStyle?: VariantStyle;
        /** Posisi ikon pada tombol */
        iconPosition?: IconPosition;
        /** Ukuran proporsi tombol */
        btnSize?: ButtonSize;
        /** Ikon Lucide atau komponen ikon Svelte lainnya */
        icon?: any;
    }

    let {
        variantColor = "primary",
        variantStyle = "solid",
        iconPosition = "none",
        btnSize = "default",
        icon: Icon,
        class: className = "",
        children,
        href,
        ...restProps
    }: Props = $props();

    // Map variant color & style to styling classes
    let computedVariantClass = $derived.by(() => {
        // STYLE: SOLID
        if (variantStyle === "solid") {
            if (variantColor === "primary") return "bg-[#1E88E5] hover:bg-[#1976D2] text-white border-transparent";
            if (variantColor === "secondary") return "bg-[#0D47A1] hover:bg-[#002171] text-white border-transparent";
            if (variantColor === "dark") return "bg-[#102027] hover:bg-[#000000] text-[#E0E0E0] hover:text-white border-transparent";
            if (variantColor === "gray" || variantColor === "light") return "bg-[#F5F5F5] hover:bg-[#E0E0E0] text-[#757575] hover:text-[#424242] border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.1)]";
        }
        
        // STYLE: SOFT
        if (variantStyle === "soft") {
            if (variantColor === "primary") return "bg-[#E3F2FD] hover:bg-[#BBDEFB] text-[#1E88E5] border-transparent";
            if (variantColor === "secondary") return "bg-[#E8EAF6] hover:bg-[#C5CAE9] text-[#0D47A1] border-transparent";
            if (variantColor === "dark") return "bg-[#ECEFF1] hover:bg-[#CFD8DC] text-[#102027] border-transparent";
            if (variantColor === "gray" || variantColor === "light") return "bg-[#F5F5F5] hover:bg-[#EEEEEE] text-[#757575] border-transparent";
        }

        // STYLE: GHOST
        if (variantStyle === "ghost") {
            if (variantColor === "primary") return "bg-transparent hover:bg-[#E3F2FD] text-[#1E88E5] border-transparent shadow-none";
            if (variantColor === "secondary") return "bg-transparent hover:bg-[#E8EAF6] text-[#0D47A1] border-transparent shadow-none";
            if (variantColor === "dark") return "bg-transparent hover:bg-[#ECEFF1] text-[#102027] border-transparent shadow-none";
            if (variantColor === "gray" || variantColor === "light") return "bg-transparent hover:bg-[#F5F5F5] text-[#9E9E9E] border-transparent shadow-none";
        }

        // STYLE: WHITE
        if (variantStyle === "white") {
            if (variantColor === "primary") return "bg-white hover:bg-[#F8FBFF] text-[#1E88E5] border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.05)]";
            if (variantColor === "secondary") return "bg-white hover:bg-[#F8FBFF] text-[#0D47A1] border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.05)]";
            if (variantColor === "dark") return "bg-white hover:bg-[#F8FAFC] text-[#102027] border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.05)]";
            if (variantColor === "gray" || variantColor === "light") return "bg-white hover:bg-[#F8FAFC] text-[#9E9E9E] border-transparent shadow-[0_1px_3px_rgba(0,0,0,0.05)]";
        }

        return "bg-[#1E88E5] hover:bg-[#1976D2] text-white"; // default fallback
    });

    const baseClass = "rounded-xl font-medium transition-all duration-200 active:scale-95";

    // Computed styles based on size parameter
    let styleConfig = $derived.by(() => {
        if (btnSize === "large") {
            return {
                text: "text-[16px]",
                iconSize: "size-6",
                marginBase: "1.5rem",
                layoutClass: iconPosition === "only" ? "px-0 w-14 h-14 justify-center" : "px-8 py-3.5 h-14",
                gapLeft: "mr-2",
                gapRight: "ml-2"
            };
        } else if (btnSize === "small") {
            return {
                text: "text-[13px]",
                iconSize: "size-4",
                layoutClass: iconPosition === "only" ? "px-0 w-9 h-9 justify-center" : "px-4 py-1.5 h-9",
                gapLeft: "mr-1.5",
                gapRight: "ml-1.5"
            };
        } else {
            // default
            return {
                text: "text-[14.5px]",
                iconSize: "size-5",
                layoutClass: iconPosition === "only" ? "px-0 w-11 h-11 justify-center" : "px-6 py-2.5 h-11",
                gapLeft: "mr-2",
                gapRight: "ml-2"
            };
        }
    });

</script>

<ShadcnButton 
    class={cn(baseClass, computedVariantClass, styleConfig.layoutClass, className)} 
    {href}
    {...restProps}
>
    {#if iconPosition === "left" && Icon}
        <Icon class={cn(styleConfig.iconSize, styleConfig.gapLeft)} />
    {/if}
    
    {#if iconPosition !== "only"}
        <span class={cn("leading-none mb-px", styleConfig.text)}>
            {@render children?.()}
        </span>
    {/if}

    {#if (iconPosition === "right" || iconPosition === "only") && Icon}
        <!-- If it's only, no margin. If right, use gapRight -->
        <Icon class={cn(styleConfig.iconSize, iconPosition === "only" ? "" : styleConfig.gapRight)} />
    {/if}
</ShadcnButton>
