<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';

	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section
	class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080808] font-['DM_Sans',sans-serif]"
>
	<!-- Noise overlay -->
	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-40"
		style={`background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`}
	></div>

	<!-- Grid lines -->
	<div
		class="pointer-events-none absolute inset-0 z-0 flex justify-between px-[6%]"
		aria-hidden="true"
	>
		{#each Array(6) as _}
			<div
				class="h-full w-px"
				style="background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.04) 80%, transparent)"
			></div>
		{/each}
	</div>

	<!-- Ambient orbs -->
	<div
		class="pointer-events-none absolute -top-24 -right-36 z-[1] h-[600px] w-[600px] rounded-full blur-[120px]"
		style="background: radial-gradient(circle, rgba(245,197,66,0.08) 0%, transparent 70%)"
	></div>
	<div
		class="pointer-events-none absolute -bottom-20 -left-24 z-[1] h-[500px] w-[500px] rounded-full blur-[120px]"
		style="background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)"
	></div>

	<!-- Content -->
	<div class="relative z-[2] mx-auto max-w-[860px] px-8 text-center">
		<!-- Badge -->
		<div
			class="mb-10 transition-all duration-700 ease-out"
			class:opacity-0={!mounted}
			class:translate-y-3={!mounted}
			class:opacity-100={mounted}
			class:translate-y-0={mounted}
		>
			<Badge
				variant="outline"
				class="gap-2 border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-['DM_Sans',sans-serif] text-xs text-neutral-400"
			>
				<span
					class="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]"
				></span>
				Now in early access
			</Badge>
		</div>

		<!-- Headline -->
		<h1
			class="mb-7 font-['Playfair_Display',serif] text-[clamp(3rem,8vw,6.5rem)] leading-[1.05] font-black tracking-tight text-[#f2f0eb] transition-all delay-150 duration-700 ease-out"
			class:opacity-0={!mounted}
			class:translate-y-5={!mounted}
			class:opacity-100={mounted}
			class:translate-y-0={mounted}
		>
			Build something<br />
			<em class="text-[#f5c542] italic">worth remembering.</em>
		</h1>

		<!-- Subtext -->
		<p
			class="mb-11 text-[clamp(1rem,2vw,1.2rem)] leading-[1.7] font-light text-neutral-500 transition-all delay-300 duration-700 ease-out"
			class:opacity-0={!mounted}
			class:translate-y-4={!mounted}
			class:opacity-100={mounted}
			class:translate-y-0={mounted}
		>
			A modern platform for teams who refuse to ship mediocre products.<br />
			Design, ship, and iterate — without the chaos.
		</p>

		<!-- CTA buttons -->
		<div
			class="mb-14 flex items-center justify-center gap-4 transition-all delay-[400ms] duration-700 ease-out"
			class:opacity-0={!mounted}
			class:translate-y-3={!mounted}
			class:opacity-100={mounted}
			class:translate-y-0={mounted}
		>
			<Button
				size="lg"
				class="border-none bg-[#f5c542] font-['DM_Sans',sans-serif] font-medium tracking-wide text-[#0a0a0a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5c542] hover:shadow-[0_8px_30px_rgba(245,197,66,0.35)]"
			>
				Get started free
			</Button>
			<Button
				size="lg"
				variant="ghost"
				class="gap-1.5 font-['DM_Sans',sans-serif] font-normal text-neutral-400 hover:bg-transparent hover:text-white"
			>
				See how it works
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
				</svg>
			</Button>
		</div>

		<!-- Social proof -->
		<div
			class="flex items-center justify-center gap-3.5 transition-all delay-[550ms] duration-700 ease-out"
			class:opacity-0={!mounted}
			class:opacity-100={mounted}
		>
			<div class="flex">
				{#each ['#c084fc', '#fb923c', '#34d399', '#60a5fa'] as color, i}
					<div
						class="h-7 w-7 rounded-full border-2 border-[#080808]"
						class:-ml-2={i !== 0}
						style="background: {color}"
					></div>
				{/each}
			</div>
			<p class="m-0 text-sm text-neutral-600">
				Trusted by <strong class="text-neutral-500">4,000+</strong> teams worldwide
			</p>
		</div>
	</div>
</section>
