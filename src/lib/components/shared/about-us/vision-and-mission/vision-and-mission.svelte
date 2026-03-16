<script lang="ts">
	interface Props {
		headline?: string;
		leftImageSrc?: string;
		rightImageSrc?: string;
		cardTitle?: string;
		cardDescription?: string;
	}

	let {
		headline = 'Menjadi Lembaga Dakwah dan Pendidikan Islam terkemuka dan modern dalam mencerahkan dan mencerdaskan kehidupan bangsa guna membentuk masyarakat Indonesia yang beriman, berilmu, beramal, & bertaqwa menuju izzul Islam wal muslimin',
		leftImageSrc = '',
		rightImageSrc = '',
		cardTitle = 'Arah dan Komitmen Kami',
		cardDescription = 'Sejak berdiri, YPI Al Azhar berkomitmen menjadi lembaga dakwah dan pendidikan Islam yang mencerahkan serta mencerdaskan kehidupan bangsa. Visi ini diwujudkan melalui pembentukan generasi beriman, berilmu, beramal, dan bertaqwa, yang siap berkontribusi bagi masyarakat dan masa depan umat.'
	}: Props = $props();
</script>

<section class="mx-auto w-full px-4 py-12 md:px-6 md:py-16">
	<!-- Grid guarantees both columns are exactly the same height -->
	<div class="grid w-full grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8 lg:min-h-[520px]">
		<!-- Left Column -->
		<div class="flex h-full w-full flex-col">
			<!-- Headline -->
			<h2 class="mb-8 text-2xl font-bold leading-snug text-txt-essentials-primary sm:text-3xl md:text-[34px]">
				{headline}
			</h2>

			<!-- Bottom Left Image (mt-auto forces it precisely to the bottom) -->
			<div class="relative mt-auto h-[250px] w-full overflow-hidden rounded-tr-[4rem] bg-gray-200 md:h-[300px] lg:h-[240px]">
				{#if leftImageSrc}
					<img src={leftImageSrc} alt="Vision left visual" class="h-full w-full object-cover">
					<div class="absolute inset-0 bg-black/50"></div>
				{/if}
			</div>
		</div>

		<!-- Right Column -->
		<div class="relative flex h-[450px] w-full flex-col justify-end overflow-hidden rounded-tl-[6rem] bg-gray-200 md:h-[550px] lg:h-auto">
			<!-- Background Image -->
			{#if rightImageSrc}
				<img src={rightImageSrc} alt="Vision right visual" class="absolute inset-0 h-full w-full object-cover">
			{/if}

			<!-- Gradient Overlay to ensure text readability -->
			<div class="absolute inset-0 bg-black/50"></div>

			<!-- Floating Card Content -->
			<div class="relative z-10 m-4 rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md md:m-8 md:p-8">
				<h3 class="mb-2 text-xl font-bold text-white md:text-2xl">{cardTitle}</h3>
				<p class="text-sm font-medium leading-relaxed text-white/90 md:text-[15px]">
					{cardDescription}
				</p>
			</div>
		</div>
	</div>
</section>
