<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import Hero2 from '$lib/assets/img/hero/hero-2.png';
	import VisionAndMission from '$lib/assets/img/hero/vision-and-mission.png';
	import LocationCard from '$lib/components/shared/about-us/our-location/location-card.svelte';
	import UnitBranches from '$lib/components/shared/about-us/our-location/unit-branches.svelte';
	import { Mail, Phone, MessageCircle } from '@lucide/svelte';

	const locationContacts = [
		{
			icon: Mail,
			title: 'Email@alazhar.com',
			subtitle: 'Email',
			link: 'mailto:Email@alazhar.com'
		},
		{
			icon: Phone,
			title: '021-XXXXXX',
			subtitle: 'Call Center',
			link: 'tel:021000000'
		},
		{
			icon: MessageCircle,
			title: '0813xxxxxxx',
			subtitle: 'Whatsapp',
			link: 'https://wa.me/6281300000000'
		}
	];
</script>

<div class="flex flex-col pb-20 gap-12">
	<Hero
		backgroundImage={Hero2}
		badgeText="Lokasi & Jangkauan"
		title="Hadir Lebih Dekat, Membina Generasi di Berbagai Wilayah"
		description="Jaringan pendidikan kami terus berkembang untuk menjangkau lebih banyak keluarga di Indonesia. Setiap lokasi dirancang sebagai lingkungan belajar yang aman, nyaman, dan berlandaskan nilai-nilai Islam."
	/>

	<LocationCard contacts={locationContacts} backgroundImageSrc={VisionAndMission} />

	<UnitBranches />
</div>