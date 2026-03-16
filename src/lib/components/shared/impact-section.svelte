<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ImpactFeature {
		icon: any;
		title: string;
		description: string;
	}

	interface Props {
		title: string;
		description: string;
		backgroundImage: string;
		features?: ImpactFeature[];
		rightCard?: Snippet;
	}

	let {
		title,
		description,
		backgroundImage,
		features = [],
		rightCard
	}: Props = $props();
</script>

<section class="relative flex min-h-[600px] w-full items-stretch bg-cover bg-center lg:min-h-[750px]" style="background-image: url('{backgroundImage}');">
	<!-- Optional Gradient overlay for background image contrast -->
	<div class="absolute inset-0 bg-black/50"></div>

	<!-- Left Panel Wrapper -->
	<div 
		class="relative z-10 flex w-1/2 flex-col justify-center bg-brand-gradient shadow-2xl backdrop-blur-sm md:rounded-tr-[4rem] lg:rounded-tr-[6rem] p-6"
	>
		<!-- Top Content -->
		<div class="relative z-20 mb-6">
			<h2 class="mb-1 text-3xl font-bold text-white md:text-4xl lg:text-[44px]">{title}</h2>
			<p class="text-base text-white md:text-lg">{description}</p>
		</div>

		<!-- Bottom Left Features Grid -->
		<div class="relative z-20 w-full">
			{#if features && features.length > 0}
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					{#each features as feature, idx (idx)}
						{@const Icon = feature.icon}
						<div class="flex flex-col gap-3 rounded-2xl border border-white/20 bg-black/10 p-6 backdrop-blur-sm transition-all hover:bg-black/20 {idx === 0 && features.length % 2 !== 0 ? 'md:col-span-2' : ''}">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-black/30 text-white">
								<Icon class="h-5 w-5" />
							</div>
							<div>
								<h3 class="mb-1 text-lg font-bold text-white">{feature.title}</h3>
								<p class="text-sm font-medium leading-relaxed text-white/80 md:text-[15px]">{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Right Side Card Slot -->
	{#if rightCard}
		<div class="absolute bottom-6 right-6 z-20 w-[90%] md:w-[350px] lg:w-[420px]">
			{@render rightCard()}
		</div>
	{/if}
</section>
