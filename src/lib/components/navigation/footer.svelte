<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Youtube, Instagram, Twitter, ShoppingBag, Music } from '@lucide/svelte';

	const navigasi = [
		{ name: 'Tentang Kami', href: '#' },
		{ name: 'Fasilitas', href: '#' },
		{ name: 'Berita', href: '#' },
		{ name: 'Sejarah', href: '#' }
	];

	const layanan = [
		{ name: 'Pendaftaran', href: '#' },
		{ name: 'Konsultasi', href: '#' },
		{ name: 'Jelajahi Sekolah', href: '#' }
	];
</script>

<footer class="w-full">
	<!-- CTA Section -->
	<section class="bg-[#F2F0E6] px-6 py-9 text-center">
		<div class="container mx-auto">
			<h2 class="mb-2 text-3xl font-bold text-txt-essentials-primary md:text-[48px]">
				Mulai Perjalanan Pendidikan Terbaik Hari Ini
			</h2>
			<p class="mb-4 text-lg text-txt-essentials-primary">
				Mendukung proses belajar yang aktif, sehat, dan berorientasi masa depan.
			</p>
			<div class="flex flex-wrap justify-center gap-2">
				<Button
					class="hover:bg-brand-footer-gradient/80 cursor-pointer rounded-full bg-brand-footer-gradient p-6 text-base font-semibold text-white"
				>
					Pre-Enrollment
				</Button>
				<Button
					variant="secondary"
					class="rounded-full bg-white px-10 py-6 text-base font-semibold text-brand-subordinate-primary shadow-sm hover:bg-neutral-50"
				>
					Masuk / Sign Up
				</Button>
			</div>
		</div>
	</section>

	<!-- Main Footer Section -->
	<section class="bg-brand-footer-gradient p-6 text-white">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-8 lg:gap-8">
			<!-- Brand Column -->
			<div class="col-span-4 space-y-2">
				<div class="flex items-center gap-2">
					<div class="size-[30px] overflow-hidden rounded-full bg-white shadow-sm">
						<img
							src="https://picsum.photos/seed/visealogo/100"
							alt="Logo"
							class="h-full w-full object-contain"
						/>
					</div>
					<h3 class="text-2xl leading-[35px] font-bold">Yayasan Islam Al Kabira</h3>
				</div>
				<div class="flex-1 space-y-3">
					<div class="flex flex-col gap-1">
						<span class="text-[10px] tracking-widest whitespace-nowrap">Official Partner</span>
						<div class="flex items-center gap-1.5">
							<div class="size-4 overflow-hidden rounded-full">
								<img
									src="https://picsum.photos/seed/alazhar/50"
									alt="Al Azhar"
									class="h-full w-full object-contain"
								/>
							</div>
							<span class="text-xs">YPI Al Azhar</span>
						</div>
					</div>
					<div class="mb-6">
						<h4 class="mb-[2px] text-base font-bold tracking-wide uppercase">
							Sekolah Islam Terluas, Terlengkap, & Inovatif
						</h4>
						<p class="text-xs">
							Menjadi pusat pendidikan Islam yang menyiapkan pemimpin masa depan dengan iman dan
							kompetensi.
						</p>
					</div>
				</div>
				<!-- Logo Social Media -->
				<div class="flex items-center gap-4">
					<!-- YouTube -->
					<a href="#" class="opacity-80 transition-opacity hover:opacity-100">
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"
							><path
								d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
							/></svg
						>
					</a>
					<!-- TikTok -->
					<a href="#" class="opacity-80 transition-opacity hover:opacity-100">
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"
							><path
								d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.92-.35-2.81.07-.46.21-.86.53-1.14.94-.43.56-.63 1.28-.52 1.98.15.9.82 1.68 1.7 1.92.46.12.95.12 1.42.01.81-.15 1.48-.71 1.79-1.48.24-.58.27-1.24.27-1.86.01-4.76-.01-9.51 0-14.27z"
							/></svg
						>
					</a>
					<!-- Instagram -->
					<a href="#" class="opacity-80 transition-opacity hover:opacity-100">
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"
							><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path
								d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
							/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
						>
					</a>
					<!-- X (Twitter) -->
					<a href="#" class="opacity-80 transition-opacity hover:opacity-100">
						<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"
							><path
								d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"
							/></svg
						>
					</a>
					<!-- Shop -->
					<a href="#" class="opacity-80 transition-opacity hover:opacity-100">
						<svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current stroke-2"
							><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><line
								x1="3"
								y1="6"
								x2="21"
								y2="6"
							/><path d="M16 10a4 4 0 0 1-8 0" /></svg
						>
					</a>
				</div>
			</div>

			<!-- Navigasi Column -->
			<div class="col-span-1 space-y-6">
				<h3 class="text-lg font-bold capitalize">Navigasi</h3>
				<ul class="space-y-2">
					{#each navigasi as item}
						<li>
							<a href={item.href} class="text-sm opacity-80 transition-opacity hover:opacity-100">
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Layanan Column -->
			<div class="col-span-1 space-y-6">
				<h3 class="text-lg font-semibold capitalize">Layanan</h3>
				<ul class="space-y-4">
					{#each layanan as item}
						<li>
							<a href={item.href} class="text-sm opacity-80 transition-opacity hover:opacity-100">
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info Column -->
			<div class="col-span-2 space-y-6">
				<h3 class="text-lg font-semibold capitalize">Al Azhar Regol Bandung</h3>
				<div class="space-y-4 opacity-80">
					<p class="text-sm leading-relaxed">
						Jalan Pasirluyu Selatan, RT 07/RW 05, Kel. Pasirluyu, Kec. Regol, Kota Bandung, Jawa
						Barat
					</p>
					<p class="text-sm">021-XXXXXX / 0813xxxxxxxx</p>
					<Button
						variant="outline"
						class="rounded-full border-white/40 bg-transparent px-6 py-2 text-sm text-white hover:bg-white hover:text-brand-primary"
					>
						Lihat di Peta
					</Button>
				</div>
			</div>
		</div>
	</section>
</footer>
