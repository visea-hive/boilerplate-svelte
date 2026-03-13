<script lang="ts">
	interface TimelineItem {
		icon: any;
		title: string;
		description: string;
	}

	interface Props {
		title?: string;
		subtitle?: string;
		items?: TimelineItem[];
		centerLastItem?: boolean;
	}

	let {
		title = 'Perjalanan & Tonggak Sejarah',
		subtitle = 'Sejak 1952, Al Azhar terus berkembang menjadi pusat pendidikan Islam modern yang berdampak luas bagi masyarakat dan bangsa.',
		items = [],
		centerLastItem = false
	}: Props = $props();
</script>

<div class="flex w-full flex-col items-center py-16 md:py-24">
	<!-- Header -->
	<div class="mb-4 text-center">
		{#if title}
			<h2 class="mb-2 text-3xl font-bold text-txt-essentials-primary md:text-4xl">{title}</h2>
		{/if}
		{#if subtitle}
			<p class="text-sm text-txt-essentials-primary font-medium sm:text-base md:text-lg">{subtitle}</p>
		{/if}
	</div>

	<!-- Timeline Container -->
	<div class="relative w-full px-6">
		<!-- Vertical Line -->
		<div
			class="absolute bottom-4 left-[36px] top-4 w-[2px] md:left-1/2 md:-translate-x-1/2"
			style="background: linear-gradient(180deg, #F9F9F9 0%, #80775D 100%);"
		></div>
		
		<div class="flex flex-col gap-2 md:gap-0">
			{#each items as item, index (index)}
				{@const isLast = index === items.length - 1}
				{@const isCenter = centerLastItem && isLast}
				{@const isLeftNum = !isCenter && index % 2 === 0}
				{@const isRightNum = !isCenter && index % 2 !== 0}
				{@const Icon = item.icon}
				{@const centerDotStyle = "border: 1.2px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(360deg, #80775D -8.33%, rgba(255, 255, 255, 0) 83.33%) border-box;"}
				{@const leftDotStyle = "border: 1.2px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(123.69deg, rgba(255, 255, 255, 0) 8.33%, #80775D 95%) border-box;"}
				{@const rightDotStyle = "border: 1.2px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(87.8deg, #80775D -6.33%, rgba(255, 255, 255, 0) 98.15%) border-box;"}

				<div class="relative flex w-full flex-col md:flex-row {isCenter ? 'md:justify-center' : isRightNum ? 'md:justify-end' : 'md:justify-start'}">
					
					<!-- Mobile Line & Dot (Shared across all variants, hidden on MD) -->
					<!-- Line starts at 36px (from left page edge) and goes to 56px (where card starts) -->
					<div class="absolute left-[36px] top-1/2 h-[2px] w-[20px] -translate-y-1/2 bg-[#99927D]/30 md:hidden"></div>
					<div class="absolute left-[31px] top-1/2 z-10 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-white md:hidden" style={isCenter ? centerDotStyle : isLeftNum ? leftDotStyle : rightDotStyle}></div>

					<!-- Left Item Panel -->
					{#if isLeftNum}
						<div class="relative w-full pl-[56px] md:w-1/2 md:pr-[48px] md:pl-0">
							<!-- Desktop Line & Dot to center -->
							<div class="absolute right-0 top-1/2 hidden h-[2px] w-[48px] -translate-y-1/2 bg-[#99927D]/30 md:block"></div>
							<div class="absolute -right-[5px] top-1/2 z-10 hidden h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-white md:block" style={leftDotStyle}></div>
							
							<!-- Card -->
							<div
								class="relative z-10 flex flex-col gap-2 rounded-xl bg-white p-6 md:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]"
								style="border: 1px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #FFFFFF 64.1%, #80775D 100%) border-box, linear-gradient(90deg, rgba(128, 119, 93, 0.2) 0%, rgba(157, 157, 157, 0.2) 100%) border-box;"
							>
								<div class="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#F4F3ED] text-[#99927D]">
									<Icon class="h-[22px] w-[22px]" />
								</div>
								<div>
									<div class="mb-2 text-2xl font-bold text-txt-essentials-primary">{item.title}</div>
									<p class="text-[15px] leading-relaxed text-brand-essentials-secondary">{item.description}</p>
								</div>
							</div>
						</div>
					{/if}

					<!-- Right Item Panel -->
					{#if isRightNum}
						<div class="relative w-full pl-[56px] md:w-1/2 md:pl-[48px]">
							<!-- Desktop Line & Dot to center -->
							<div class="absolute left-0 top-1/2 hidden h-[2px] w-[48px] -translate-y-1/2 bg-[#99927D]/30 md:block"></div>
							<div class="absolute -left-[5px] top-1/2 z-10 hidden h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-white md:block" style={rightDotStyle}></div>
							
							<!-- Card -->
							<div
								class="relative z-10 flex flex-col gap-2 rounded-xl bg-white p-6 md:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]"
								style="border: 1px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, #80775D 0%, #FFFFFF 35.9%) border-box, linear-gradient(90deg, rgba(157, 157, 157, 0.2) 0%, rgba(128, 119, 93, 0.2) 100%) border-box;"
							>
								<div class="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#F4F3ED] text-[#99927D]">
									<Icon class="h-[22px] w-[22px]" />
								</div>
								<div>
									<div class="mb-2 text-2xl font-bold text-txt-essentials-primary">{item.title}</div>
									<p class="text-[15px] leading-relaxed text-brand-essentials-secondary">{item.description}</p>
								</div>
							</div>
						</div>
					{/if}

					<!-- Center Item Panel (Last item) -->
					{#if isCenter}
						<div class="relative w-full pl-[56px] md:mt-12 md:w-[85%] md:max-w-3xl md:pl-0">
							<!-- Desktop Dot to center -->
							<div class="absolute left-1/2 top-[-24px] z-10 hidden h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-white md:block" style={centerDotStyle}></div>
							<!-- Card -->
							<div
								class="relative z-10 flex flex-col gap-2 rounded-xl bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] md:items-center md:text-center"
								style="border: 1px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(180deg, #80775D 0%, #FFFFFF 35.9%) border-box, linear-gradient(0deg, rgba(157, 157, 157, 0.2) 0%, rgba(128, 119, 93, 0.2) 100%) border-box;"
							>
								<div class="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#F4F3ED] text-[#99927D]">
									<Icon class="h-[22px] w-[22px]" />
								</div>
								<div>
									<div class="mb-2 text-2xl font-bold text-txt-essentials-primary">{item.title}</div>
									<p class="text-[15px] leading-relaxed text-brand-essentials-secondary">{item.description}</p>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
