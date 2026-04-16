<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Moon, ChevronDown } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import logoAlkabira from '$lib/assets/img/logo/logo-alkabira.png';
	import logoAlAzhar from '$lib/assets/img/logo/logo-alazhar.png';
	import { resolve } from '$app/paths';

	let activeDropdown = $state<string | null>(null);

	const navItems = [
		{ name: 'Beranda', href: '/', icon: Moon, active: true },
		{
			name: 'Tentang Kami',
			href: '#',
			dropdown: true,
			children: [
				{ name: 'Sejarah Yayasan', href: '/about-us/history' },
				{ name: 'Visi & Misi YPI Al Azhar', href: '/about-us/vision-and-mission' },
				{ name: 'Lokasi Kami', href: '/about-us/our-location' },
				{ name: 'Kontak Kami', href: '/about-us/our-contact' },
				{ name: 'Berita', href: '/about-us/news' }
			]
		},
		{
			name: 'Pendaftaran',
			href: '#',
			dropdown: true,
			children: [
				{ name: 'Sejarah Yayasan', href: '#' },
				{ name: 'Visi & Misi YPI Al Azhar', href: '#' },
				{ name: 'Lokasi Kami', href: '#' },
				{ name: 'Kontak Kami', href: '#' },
				{ name: 'Berita', href: '#' }
			]
		},
		{
			name: 'Akademik',
			href: '#',
			dropdown: true,
			children: [
				{ name: 'Sejarah Yayasan', href: '#' },
				{ name: 'Visi & Misi YPI Al Azhar', href: '#' },
				{ name: 'Lokasi Kami', href: '#' },
				{ name: 'Kontak Kami', href: '#' },
				{ name: 'Berita', href: '#' }
			]
		},
		{
			name: 'Aktifitas',
			href: '#',
			dropdown: true,
			children: [
				{ name: 'Sejarah Yayasan', href: '#' },
				{ name: 'Visi & Misi YPI Al Azhar', href: '#' },
				{ name: 'Lokasi Kami', href: '#' },
				{ name: 'Kontak Kami', href: '#' },
				{ name: 'Berita', href: '#' }
			]
		},
		{
			name: 'Fasilitas',
			href: '#',
			dropdown: true,
			children: [
				{ name: 'Sejarah Yayasan', href: '#' },
				{ name: 'Visi & Misi YPI Al Azhar', href: '#' },
				{ name: 'Lokasi Kami', href: '#' },
				{ name: 'Kontak Kami', href: '#' },
				{ name: 'Berita', href: '#' }
			]
		},
		{
			name: 'Integrated Ecosystem',
			href: '#',
			dropdown: true,
			children: [
				{ name: 'Sejarah Yayasan', href: '#' },
				{ name: 'Visi & Misi YPI Al Azhar', href: '#' },
				{ name: 'Lokasi Kami', href: '#' },
				{ name: 'Kontak Kami', href: '#' },
				{ name: 'Berita', href: '#' }
			]
		}
	];
</script>

<nav
	class="fixed top-0 left-0 z-50 w-full bg-[#00000033] py-0 font-sans shadow-lg backdrop-blur-[25px]"
>
	<div class="flex items-center">
		<!-- Left Logo Section -->
		<div
			class="absolute top-px left-6 flex items-center rounded-br-3xl rounded-bl-3xl bg-[#00000033] p-3 backdrop-blur-[25px]"
		>
			<div class="h-[90px] w-[90px] overflow-hidden rounded-full bg-white p-3">
				<img
					src={logoAlkabira}
					alt="Logo Al-Kabira"
					class="h-full w-full object-cover object-center"
				/>
			</div>
		</div>

		<!-- Center Navigation Section -->
		<div class="flex grow items-center justify-between px-[clamp(1.5rem,8.2vw,158px)] py-4">
			<div class="flex items-center gap-1 md:gap-5">
				{#each navItems as item, idx (idx)}
					<div
						class="relative"
						onmouseenter={() => (activeDropdown = item.name)}
						onmouseleave={() => (activeDropdown = null)}
					>
						<a
							href={resolve(item.href as any)}
							class="flex items-center gap-1.5 transition-colors {item.active
								? 'rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white'
								: 'px-1 text-white hover:text-white/80'}"
						>
							{#if item.icon}
								<item.icon class="h-4 w-4" />
							{/if}
							<span class="text-[13px] font-medium tracking-wide whitespace-nowrap"
								>{item.name}</span
							>
							{#if item.dropdown}
								<ChevronDown
									class="h-3.5 w-3.5 transition-transform duration-200 {activeDropdown === item.name
										? 'rotate-180'
										: ''} opacity-50"
								/>
							{/if}
						</a>

						{#if item.dropdown && activeDropdown === item.name && item.children}
							<div
								in:fly={{ y: 10, duration: 200 }}
								out:fade={{ duration: 150 }}
								class="absolute top-full left-0 z-50 w-64 pt-4"
							>
								<div class="overflow-hidden rounded-xl bg-white p-2 shadow-2xl">
									<div class="flex flex-col">
										{#each item.children as child, idx (idx)}
											<a
												href={resolve(child.href as any)}
												class="border-b border-brand-essentials-primary px-3 py-2 text-[14px] font-normal text-txt-default transition-colors last:border-b-0 hover:bg-neutral-50"
											>
												{child.name}
											</a>
										{/each}
									</div>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Buttons Section -->
			<div class="flex items-center gap-3">
				<Button
					variant="outline"
					class="rounded-full border-white bg-transparent px-6 py-1 text-[13px] font-semibold text-white hover:bg-white hover:text-txt-essentials-primary"
				>
					Sign In
				</Button>
				<Button
					variant="default"
					class="rounded-full bg-brand-primary px-6 py-1 text-[13px] font-semibold text-white hover:bg-brand-primary/90"
				>
					Pre-Enrollment
				</Button>
			</div>
		</div>

		<!-- Right Logo Section -->
		<div
			class="absolute top-px right-6 flex items-center rounded-br-3xl rounded-bl-3xl bg-[#00000033] p-3 backdrop-blur-[25]"
		>
			<div class="h-[84px] w-[84px] overflow-hidden rounded-full">
				<img
					src={logoAlAzhar}
					alt="Logo Al-Azhar"
					class="h-full w-full rounded-full bg-white object-cover"
				/>
			</div>
		</div>
	</div>
</nav>
