<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	interface Feature {
		icon: any; // We use 'any' to avoid strict Svelte 5 component typing issues for now
		title: string;
	}

	interface Props {
		backgroundImage?: string;
		badgeText?: string;
		title?: string;
		description?: string;
		features?: Feature[];
	}

	let {
		backgroundImage = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', // Default fallback image
		badgeText = 'Sejarah Yayasan',
		title = 'Perjalanan Membangun Pendidikan Berkualitas',
		description = 'Mengabdi dalam dunia pendidikan dengan komitmen membangun generasi berakhlak, berilmu, dan berdaya saing.',
		features = []
	}: Props = $props();
</script>

<section
	class="relative flex min-h-[772px] w-full flex-col justify-end bg-cover bg-center bg-no-repeat"
	style="background-image: url('{backgroundImage}');"
>
	<!-- Gradient overlay to make text readable -->
	<div class="absolute inset-0 bg-[#302B1DB2]"></div>

	<!-- Content Wrapper -->
	<div class="relative z-10 w-full px-4 pb-10 md:px-6">
		<!-- Top Content (Badge, Title, Description) -->
		<div class="mb-6 flex flex-col">
			{#if badgeText}
				<Badge
					class="mb-4 rounded-full border-none bg-brand-essentials-shade px-4 py-1 text-sm font-medium text-txt-essentials-primary shadow-sm hover:bg-brand-essentials-shade/90"
				>
					{badgeText}
				</Badge>
			{/if}

			{#if title}
				<h1 class="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
					{title}
				</h1>
			{/if}

			{#if description}
				<p class="text-xl text-white font-medium md:text-2xl">
					{description}
				</p>
			{/if}
		</div>

		<!-- Features Grid -->
		{#if features && features.length > 0}
			<div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
				{#each features as feature, i (i)}
					{@const Icon = feature.icon}
					<div
						class="flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-3 shadow-lg backdrop-blur-sm transition-all hover:bg-black/60"
					>
						<!-- Icon Container -->
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white"
						>
							<Icon class="h-6 w-6" />
						</div>

						<!-- Feature Text -->
						<p class="text-base font-bold text-white sm:text-lg">
							{feature.title}
						</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
