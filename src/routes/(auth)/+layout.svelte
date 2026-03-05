<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';

	let { children } = $props();
</script>

<div class="grid min-h-screen bg-[#080808] lg:grid-cols-2">
	<!-- Decorative Sidebar Section -->
	<div
		class="relative hidden flex-col overflow-hidden border-r border-white/5 bg-muted p-10 text-white lg:flex"
	>
		<!-- Background Elements -->
		<div class="absolute inset-0 z-0 bg-neutral-950"></div>
		<div
			class="pointer-events-none absolute -top-40 -left-40 z-1 h-[800px] w-[800px] rounded-full opacity-30 blur-[100px]"
			style="background: radial-gradient(circle, rgba(245,197,66,0.1) 0%, transparent 70%)"
		></div>
		<div
			class="pointer-events-none absolute right-0 bottom-0 z-1 h-[600px] w-[600px] rounded-full opacity-20 blur-[100px]"
			style="background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)"
		></div>

		<!-- Logo -->
		<div class="relative z-20 flex items-center text-xl font-bold tracking-tight">
			<a href={localizeHref('/', { locale: 'en' })} class="group flex items-center gap-2">
				<div
					class="flex h-8 w-8 items-center justify-center rounded bg-[#f5c542] font-bold text-black shadow-[0_0_15px_rgba(245,197,66,0.2)]"
				>
					V
				</div>
				<span class="text-white transition-colors group-hover:text-[#f5c542]">Visea</span>
			</a>
		</div>

		<!-- Quote/Testimonial Section -->
		<div class="relative z-20 mt-auto">
			<Badge variant="outline" class="mb-4 border-white/10 text-white/40">Secure & Verified</Badge>
			<blockquote class="space-y-4">
				<p class="font-['Playfair_Display',serif] text-2xl leading-relaxed font-medium italic">
					"The best way to predict the future is to design it. Visea has transformed how we approach
					our development workflow from day one."
				</p>
				<footer class="flex items-center gap-3">
					<div class="h-10 w-10 rounded-full bg-linear-to-tr from-[#f5c542] to-amber-200"></div>
					<div class="text-sm">
						<div class="font-semibold">Sofia Davis</div>
						<div class="text-neutral-500">CTO at TechDesign</div>
					</div>
				</footer>
			</blockquote>
		</div>
	</div>

	<!-- Form Content Section -->
	<div class="relatif flex items-center justify-center bg-neutral-950 p-8">
		<div
			class="pointer-events-none fixed inset-0 z-0 opacity-40 lg:hidden"
			style={`background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`}
		></div>

		<div
			class="relative z-10 mx-auto flex w-full flex-col justify-center space-y-8 transition-all duration-500 ease-in-out sm:w-[400px]"
		>
			<!-- Logo for Mobile Only -->
			<div class="mb-4 flex justify-center lg:hidden">
				<a href={localizeHref('/', { locale: 'en' })} class="flex items-center gap-2">
					<div
						class="flex h-10 w-10 items-center justify-center rounded bg-[#f5c542] font-bold text-black"
					>
						V
					</div>
				</a>
			</div>

			<div class="group relative">
				<div
					class="absolute -inset-1 rounded-2xl bg-linear-to-r from-[#f5c542]/20 to-indigo-500/10 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
				></div>
				<div
					class="relative rounded-2xl border border-white/10 bg-[#0d0d0d]/80 p-8 shadow-2xl backdrop-blur-xl"
				>
					{@render children()}
				</div>
			</div>

			<p class="mx-auto max-w-[320px] px-8 text-center text-sm leading-relaxed text-neutral-500">
				By clicking continue, you agree to our <a
					href="/terms"
					class="underline underline-offset-4 hover:text-[#f5c542]">Terms of Service</a
				>
				and
				<a href="/privacy" class="underline underline-offset-4 hover:text-[#f5c542]"
					>Privacy Policy</a
				>.
			</p>
		</div>
	</div>
</div>
