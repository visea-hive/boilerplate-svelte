<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';

	interface Contact {
		icon: any;
		title: string;
		subtitle: string;
		link: string;
	}

	interface Props {
		title?: string;
		address?: string;
		mapEmbedUrl?: string;
		contacts?: Contact[];
		backgroundImageSrc?: string;
	}

	let {
		title = 'Al Azhar Regol Bandung',
		address = 'Jalan Pasirluyu Selatan, RT 07/RW 05, Kel. Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat',
		mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.164393278278!2d107.60943825000001!3d-6.94524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8b0a9bdadb1%3A0xc4eb0beac9161a0!2sSekolah%20Al%20Azhar%20Bandung!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
		contacts = [],
		backgroundImageSrc
	}: Props = $props();
</script>

<!-- Optional Background Image Section -->
 <div class="relative">
	{#if backgroundImageSrc}
		<div class="relative w-full h-[451px]">
			<img src={backgroundImageSrc} alt="Location Background" class="h-full w-full object-cover">
			<div class="absolute inset-0 bg-black/40"></div>
		</div>
	{/if}
	
	<div class="relative z-20 mx-auto w-full px-4 md:px-6 {backgroundImageSrc ? '-mt-[205px]' : ''}">
		<!-- Card Container -->
		<div class="flex flex-col rounded-[2.5rem] bg-white/78 backdrop-blur-xl p-6 md:p-8 lg:p-10">
			
			<!-- Header -->
			<div class="mb-6 text-center md:mb-8">
				<h2 class="mb-2 text-2xl font-bold text-txt-essentials-primary md:text-3xl lg:text-[34px]">{title}</h2>
				<p class="text-[14px] font-medium text-[#555555] md:text-[16px]">{address}</p>
			</div>
	
			<!-- Map -->
			<div class="relative mb-8 h-[300px] w-full overflow-hidden rounded-t-4xl bg-gray-200 md:h-[400px] lg:h-[450px]">
				<!-- Placeholder overlay to give map slightly softer internal aesthetics around the edge -->
				<div class="pointer-events-none absolute inset-0 z-10 rounded-t-4xl shadow-[inset_0_0_20px_10px_white/30]"></div>
				
				<iframe 
					src={mapEmbedUrl}
					class="h-full w-full"
					style="border:0;" 
					allowfullscreen={true} 
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
					title="Google Maps Location">
				</iframe>
			</div>
	
			<!-- Contacts -->
			{#if contacts && contacts.length > 0}
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
					{#each contacts as contact, idx (idx)}
						{@const Icon = contact.icon}
						<a href={contact.link} target="_blank" rel="external noopener noreferrer" class="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-md md:p-5">
							
							<div class="flex items-center gap-4">
								<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F3ED] text-[#8b8466]">
									<Icon class="h-6 w-6" />
								</div>
								<div class="flex flex-col">
									<span class="text-[15px] font-bold text-txt-essentials-primary">{contact.title}</span>
									<span class="text-[13px] font-medium text-[#777777]">{contact.subtitle}</span>
								</div>
							</div>
	
							<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A4A4A] text-white transition-transform group-hover:scale-110">
								<ArrowUpRight class="h-4 w-4 stroke-[2.5]" />
							</div>
	
						</a>
					{/each}
				</div>
			{/if}
	
		</div>
	</div>
 </div>
