<script lang="ts">
	interface Props {
		title?: string;
		subtitle?: string;
		imageSrc?: string;
		paragraphs?: string[];
		name?: string;
	}

	let {
		title = 'Inspirasi dan Keteladanan',
		subtitle = 'Perjalanan Al Azhar tidak lepas dari peran ulama, pemimpin, dan tokoh bangsa yang membangun nilai moderasi, ilmu, dan kepemimpinan.',
		imageSrc = '', // A default placeholder image can be provided by the consumer
		paragraphs = [
			'Sebagai Imam Besar Masjid Agung Al Azhar, beliau mengembangkan dakwah yang santun, menyejukkan, dan menjadi inspirasi umat melalui kajian tafsir serta program pendidikan.',
			'Kontribusi beliau juga melahirkan karya besar seperti Tafsir Al Azhar, yang hingga kini menjadi rujukan umat Islam.'
		],
		name = 'Buya Hamka'
	}: Props = $props();
</script>

<div class="flex w-full flex-col px-4 md:px-6 mt-16 mb-40">
	<!-- Header -->
	<div class="mb-4 flex flex-col gap-2">
		{#if title}
			<h2 class="text-3xl font-bold text-txt-essentials-primary md:text-4xl">{title}</h2>
		{/if}
		{#if subtitle}
			<p class="text-base font-medium text-txt-essentials-primary md:text-lg">{subtitle}</p>
		{/if}
	</div>

	<!-- Main Card -->
	<div class="flex w-full flex-col md:flex-row gap-6 p-4 rounded-3xl border border-gray-100 bg-[#FAFAFA] shadow-sm">
		<!-- Image -->
		<div class="w-full md:w-[280px] h-auto aspect-square shrink-0 md:h-auto rounded-2xl overflow-hidden bg-gray-200">
			{#if imageSrc} 
				<img src={imageSrc} alt={name} class="w-full h-full object-cover ">
			{/if}
		</div>

		<!-- Content Area -->
		<div class="flex flex-col justify-between py-2 md:pt-16 pr-2 md:pr-8">
			<div class="flex flex-col gap-4">
				{#each paragraphs as paragraph, idx (idx)}
					<p class="text-base md:text-[17px] font-bold leading-relaxed text-txt-essentials-primary">
						{paragraph}
					</p>
				{/each}
			</div>

			<div class="mt-8 text-xl md:text-2xl font-bold text-brand-subordinate-primary">
				{name}
			</div>
		</div>
	</div>
</div>
