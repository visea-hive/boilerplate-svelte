<script lang="ts">
	interface MissionCard {
		icon: any;
		title: string;
		description: string;
	}

	interface Props {
		title?: string;
		subtitle?: string;
		centerImageSrc?: string;
		centerTitle?: string;
		centerDescription?: string;
		topLeftCard?: MissionCard;
		bottomLeftCard?: MissionCard;
		topRightCard?: MissionCard;
		bottomRightCard?: MissionCard;
	}

	let {
		title = 'Langkah Nyata dalam Membangun Generasi',
		subtitle = 'Mewujudkan pendidikan Islam modern melalui dakwah, penguatan aqidah, pengembangan SDM, dan kontribusi bagi umat serta bangsa.',
		centerImageSrc = '',
		centerTitle = 'Pembinaan Generasi Beriman dan Berilmu',
		centerDescription = 'Meningkatkan kualitas SDM guna mewujudkan masyarakat yang beriman, berilmu, beramal, dan bertaqwa melalui pengembangan kegiatan yang meningkatkan IMTAQ dan IPTEK sesuai aqidah Islam.',
		topLeftCard,
		bottomLeftCard,
		topRightCard,
		bottomRightCard
	}: Props = $props();
</script>

<section class="mx-auto w-full px-4 md:px-6 bg-[#F2F1EF] pt-9">
	<!-- Header -->
	<div class="mb-12 flex flex-col items-center text-center">
		{#if title}
			<h2 class="mb-4 text-3xl font-bold text-txt-essentials-primary md:text-4xl">{title}</h2>
		{/if}
		{#if subtitle}
			<p class="max-w-4xl text-base font-medium text-txt-default md:text-lg">{subtitle}</p>
		{/if}
	</div>

	<!-- Cards Grid -->
	<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
		
		<!-- Left Column -->
		<div class="flex flex-col gap-1 lg:gap-2">
			<!-- Top Left Card -->
			{#if topLeftCard}
				{@const TopLeftIcon = topLeftCard.icon}
				<div class="flex flex-1 flex-col items-center justify-center rounded-tr-[6rem] bg-brand-gradient p-8 text-center text-white shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
						<TopLeftIcon class="h-6 w-6" />
					</div>
					<h3 class="mb-3 text-xl font-bold">{topLeftCard.title}</h3>
					<p class="text-[15px] font-medium leading-relaxed text-white/90">{topLeftCard.description}</p>
				</div>
			{/if}

			<!-- Bottom Left Card -->
			{#if bottomLeftCard}
				{@const BottomLeftIcon = bottomLeftCard.icon}
				<div class="flex flex-1 flex-col items-center justify-center rounded-br-[6rem] bg-brand-gradient p-8 text-center text-white shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
						<BottomLeftIcon class="h-6 w-6" />
					</div>
					<h3 class="mb-3 text-xl font-bold">{bottomLeftCard.title}</h3>
					<p class="text-[15px] font-medium leading-relaxed text-white/90">{bottomLeftCard.description}</p>
				</div>
			{/if}
		</div>

		<!-- Center Column -->
		<div class="flex flex-col overflow-hidden p-6 rounded-t-[6rem] bg-brand-gradient text-white shadow-md lg:h-full">
			<!-- Image Top -->
			<div class="h-[250px] w-full lg:h-[300px] mb-4 relative">
				{#if centerImageSrc}
					<div class="absolute inset-0 bg-[#80775D54]"></div>
					<img src={centerImageSrc} alt="Pendidikan Islam Modern" class="h-full rounded-t-[80px] w-full object-cover">
				{/if}
			</div>
			<!-- Text Bottom -->
			<div class="flex flex-1 flex-col items-center justify-center text-center">
				<h3 class="mb-3 text-xl font-bold">{centerTitle}</h3>
				<p class="text-[15px] font-medium leading-relaxed text-white/90">{centerDescription}</p>
			</div>
		</div>

		<!-- Right Column -->
		<div class="flex flex-col gap-1 lg:gap-2">
			<!-- Top Right Card -->
			{#if topRightCard}
				{@const TopRightIcon = topRightCard.icon}
				<div class="flex flex-1 flex-col items-center justify-center rounded-tl-[6rem] bg-brand-gradient p-8 text-center text-white shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
						<TopRightIcon class="h-6 w-6" />
					</div>
					<h3 class="mb-3 text-xl font-bold">{topRightCard.title}</h3>
					<p class="text-[15px] font-medium leading-relaxed text-white/90">{topRightCard.description}</p>
				</div>
			{/if}

			<!-- Bottom Right Card -->
			{#if bottomRightCard}
				{@const BottomRightIcon = bottomRightCard.icon}
				<div class="flex flex-1 flex-col items-center justify-center rounded-bl-[6rem] bg-brand-gradient p-8 text-center text-white shadow-md">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
						<BottomRightIcon class="h-6 w-6" />
					</div>
					<h3 class="mb-3 text-xl font-bold">{bottomRightCard.title}</h3>
					<p class="text-[15px] font-medium leading-relaxed text-white/90">{bottomRightCard.description}</p>
				</div>
			{/if}
		</div>

	</div>
</section>
