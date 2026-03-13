<script lang="ts">
	interface LeadershipCard {
		icon: any;
		title: string;
		description: string;
	}

	interface Props {
		title?: string;
		description?: string;
		backgroundImageSrc?: string;
		patternImageSrc?: string;
		cards?: LeadershipCard[];
		reverse?: boolean;
	}

	let {
		title = 'Membentuk Generasi Pemimpin Masa Depan',
		description = 'Menyiapkan generasi berakhlak, berintegritas, dan siap berkontribusi bagi bangsa, negara, dan umat.',
		backgroundImageSrc = '',
		patternImageSrc = '',
		cards = [],
		reverse = false
	}: Props = $props();
</script>

<section class="relative flex min-h-[550px] w-full items-stretch bg-gray-900 bg-cover bg-center overflow-hidden" style="background-image: url('{backgroundImageSrc}');">
	<!-- Background Dark Overlay for better text contrast -->
	<div class="absolute inset-0 bg-black/60"></div>

	<!-- Container -->
	<!-- We keep it flex row, and use flex-row-reverse if reversed prop is true -->
	<div class="relative z-10 flex w-full flex-col lg:flex-row {reverse ? 'lg:flex-row-reverse' : ''}">
		
		<!-- Solid Content Block -->
		<!-- Expands to edge, inner content bounded. -->
		<div class="relative flex w-full flex-col justify-center overflow-hidden bg-brand-gradient px-6 py-16 text-white md:px-12 lg:w-1/2 lg:py-24 {reverse ? 'rounded-b-[4rem] lg:rounded-b-none lg:rounded-l-[6rem]' : 'rounded-b-[4rem] lg:rounded-b-none lg:rounded-r-[6rem]'}">
			
			<!-- Optional Background Pattern Overlay -->
			{#if patternImageSrc}
				<div class="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat w-full h-full" style="background-image: url('{patternImageSrc}');"></div>
			{/if}

			<!-- Text Content Alignment -->
			<div class="relative z-10 w-full {reverse ? 'text-right' : ''}">
				<h2 class="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]">{title}</h2>
				<p class="text-base font-medium leading-relaxed text-white/90 md:text-lg">{description}</p>
			</div>
		</div>

		<!-- Cards Area -->
		<div class="flex w-full flex-col justify-center lg:w-1/2 p-6">
			{#if cards && cards.length > 0}
				<!-- Center the cards block relative to the half screen -->
				<div class="w-full {reverse ? 'mr-auto' : 'ml-auto'} grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
					{#each cards as card, idx (idx)}
						{@const Icon = card.icon}
						<!-- If 3 cards, first card takes full width automatically in a 2-col grid -->
						<div class="flex flex-col rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md transition-all hover:bg-black/50 {idx === 0 && cards.length % 2 !== 0 ? 'md:col-span-2' : ''}">
							<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/60 text-white shadow-inner">
								<Icon class="h-5 w-5" />
							</div>
							<h3 class="mb-2 text-[17px] font-bold text-white">{card.title}</h3>
							<p class="text-[14px] leading-relaxed text-white/80">{card.description}</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
		
	</div>
</section>
