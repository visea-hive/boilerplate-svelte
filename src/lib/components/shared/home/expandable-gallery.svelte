<script lang="ts">
	import {
		Leaf,
		MonitorPlay,
		Cpu,
		BookOpenCheck,
		ParkingCircle,
		Users,
		Car,
		Trophy,
		Waves,
		Moon,
		Warehouse
	} from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	interface Feature {
		icon: any;
		title: string;
		description: string;
	}

	interface GalleryItem {
		id: number;
		image: string;
		features: Feature[];
	}

	interface Props {
		items: GalleryItem[];
		defaultActive?: number;
	}

	let { items, defaultActive = 0 }: Props = $props();
	let activeIndex = $state(defaultActive);
</script>

<div class="flex h-[400px] w-full gap-4 md:h-[600px]">
	{#each items as item, i}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="relative h-full cursor-pointer overflow-hidden transition-all duration-700 ease-in-out {activeIndex ===
			i
				? 'flex-[4]'
				: 'flex-1'} 
				{i < activeIndex ? 'rounded-tr-[100px]' : ''}
				{i > activeIndex ? 'rounded-tl-[100px]' : ''}
				{i === activeIndex
				? i === 0
					? 'rounded-tr-[100px]'
					: i === items.length - 1
						? 'rounded-tl-[100px]'
						: 'rounded-tl-[100px] rounded-tr-[100px]'
				: ''}"
			onmouseenter={() => (activeIndex = i)}
		>
			<!-- Background Image -->
			<img src={item.image} alt="" class="absolute inset-0 h-full w-full object-cover" />

			<!-- Overlay for Collapsed State -->
			<div
				class="absolute inset-0 bg-black/20 transition-opacity duration-500 {activeIndex === i
					? 'opacity-0'
					: 'opacity-100'}"
			></div>

			<!-- Content (Only visible when expanded) -->
			{#if activeIndex === i}
				<div
					in:fly={{ y: 20, duration: 800, delay: 200 }}
					class="absolute inset-0 z-10 grid content-end justify-items-stretch gap-4 p-8 {item
						.features.length > 3
						? 'grid-cols-2'
						: 'grid-cols-3'}"
				>
					{#each item.features as feature, fi}
						<div
							class="flex w-[280px] flex-col gap-4 rounded-3xl border border-white/20 bg-black/30 p-4 text-white backdrop-blur-md {item
								.features.length > 3
								? fi % 2 === 1
									? 'ml-auto'
									: ''
								: item.features.length === 1
									? 'mx-auto'
									: fi === 0
										? ''
										: fi === item.features.length - 1
											? 'ml-auto'
											: 'mx-auto'}"
						>
							<div class="flex size-10 items-center justify-center rounded-xl bg-white/20">
								<feature.icon class="size-5" />
							</div>
							<div>
								<h4 class="text-sm font-bold md:text-base">{feature.title}</h4>
								<p class="text-[10px] opacity-80 md:text-xs">
									{feature.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
