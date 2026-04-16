<script lang="ts">
    import StepperItem from "./StepperItem.svelte";
    import { cn } from "$lib/utils";

    interface Step {
        title: string;
        subtitle?: string;
        icon?: any;
    }

    interface Props {
        /** Daftar langkah-langkah yang ada */
        steps: Step[];
        /** Indeks langkah saat ini (0-based) */
        currentStep: number;
        /** Orientasi tata letak */
        orientation?: "vertical" | "horizontal";
        /** Class tambahan untuk container luar */
        class?: string;
    }

    let { steps = [], currentStep = 0, orientation = "vertical", class: className = "" }: Props = $props();

    function getStatus(idx: number) {
        if (idx < currentStep) return "completed";
        if (idx === currentStep) return "active";
        return "pending";
    }
</script>

<div class={cn(
    "flex w-full", 
    orientation === "vertical" ? "flex-col gap-4" : "flex-row gap-6 items-start overflow-x-auto pb-4",
    className
)}>
    {#each steps as step, i (i)}
        <StepperItem 
            title={step.title}
            subtitle={step.subtitle}
            icon={step.icon}
            status={getStatus(i)}
            {orientation}
        />
    {/each}
</div>
