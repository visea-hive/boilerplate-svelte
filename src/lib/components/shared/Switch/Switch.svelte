<script lang="ts">
    import { Switch as ShadcnSwitch } from "$lib/components/ui/switch";
    import { Label } from "$lib/components/ui/label";
    import { cn } from "$lib/utils";

    interface Props {
        /** Teks label pendamping switch */
        label?: string;
        /** Deskripsi tambahan di bawah label */
        description?: string;
        /** Pesan error validasi form */
        error?: string;
        /** Status aktif/non-aktif switch */
        checked?: boolean;
        /** Status mati/tidak bisa diklik */
        disabled?: boolean;
        /** Posisi label terhadap switch */
        labelPosition?: "left" | "right";
        /** Identitas unik untuk id label/switch */
        id?: string;
        /** Class tambahan untuk container luar */
        class?: string;
    }

    let {
        label,
        description,
        error,
        checked = $bindable(false),
        disabled = false,
        labelPosition = "right",
        id = `switch-${Math.random().toString(36).substr(2, 9)}`,
        class: className = ""
    }: Props = $props();

</script>

<div class={cn(
    "flex items-center gap-4 transition-all duration-200 select-none",
    labelPosition === "left" ? "flex-row-reverse justify-end" : "flex-row",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className
)}>
    <!-- Switch Core Customized with Primary Colors -->
    <!-- Default shadcn width/height are 32/18, image looks slightly larger. -->
    <!-- We'll override classes specifically for the Primary color theme. -->
    <ShadcnSwitch 
        {id} 
        {disabled} 
        bind:checked 
        class={cn(
            "w-12 h-6.5 p-0.5", // Larger size for premium feel
            "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-neutral-200 border-none transition-colors duration-300",
            "focus-visible:ring-offset-2 focus-visible:ring-blue-100",
            // Thumb override classes
            "[&>span]:w-5.5 [&>span]:h-5.5 [&>span]:bg-white [&>span]:shadow-sm [&>span]:transition-all [&>span]:duration-300",
            "data-[state=checked]:[&>span]:translate-x-[22px] data-[state=unchecked]:[&>span]:translate-x-0.5"
        )}
    />

    {#if label || description || error}
        <div class="flex flex-col gap-1.5">
            {#if label}
                <Label 
                    for={id} 
                    class={cn(
                        "text-[16px] font-medium leading-none transition-colors",
                        checked ? "text-neutral-900" : "text-neutral-500",
                        disabled ? "cursor-not-allowed" : "cursor-pointer hover:text-blue-600"
                    )}
                >
                    {label}
                </Label>
            {/if}
            {#if description}
                <p class="text-[12px] text-neutral-400 font-medium leading-tight">{description}</p>
            {/if}
            {#if error}
                <p class="text-[11px] text-red-500 font-semibold leading-tight">{error}</p>
            {/if}
        </div>
    {/if}
</div>
