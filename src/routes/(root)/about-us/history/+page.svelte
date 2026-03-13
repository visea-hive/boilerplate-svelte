<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import Timeline from '$lib/components/shared/timeline.svelte';
	import ImpactSection from '$lib/components/shared/impact-section.svelte';
	import InspirationSection from '$lib/components/shared/inspiration-section.svelte';
	import { BriefcaseBusiness, Contact, GraduationCap, Award, Building2, LibraryBig, BadgeCheck, Globe, Mic, User, BookOpen } from '@lucide/svelte';
	import HistoryImg from '$lib/assets/img/hero/history.jpg';
	import SchoolImg from '$lib/assets/img/slider/school-1.png';
	import BuyaHamka from '$lib/assets/img/person/buya-hamka.png';

	const features = [
		{
			icon: BriefcaseBusiness,
			title: 'Yayasan Pendidikan Islam berkualitas sejak 1952.'
		},
		{
			icon: Contact,
			title: 'Membangun generasi beriman dan berprestasi.'
		},
		{
			icon: GraduationCap,
			title: 'Pusat pendidikan Islam modern dan terpadu.'
		}
	];

	const timelineItems = [
		{
			icon: Award,
			title: '1952',
			description: 'Yayasan Pesantren Islam didirikan oleh para tokoh Islam dan masyarakat Jakarta, dipelopori oleh Syamsuddin bersama Sjamsuridjal.'
		},
		{
			icon: Building2,
			title: '1953',
			description: 'Pembangunan masjid dimulai di kawasan Kebayoran sebagai pusat ibadah, dakwah, dan pendidikan.'
		},
		{
			icon: LibraryBig,
			title: '1958',
			description: 'Masjid Agung Kebayoran selesai dibangun dan mulai menjadi pusat kegiatan umat.'
		},
		{
			icon: BadgeCheck,
			title: '1961',
			description: 'Nama Al Azhar diberikan oleh Mahmoud Shaltut saat kunjungan kenegaraan ke Indonesia.'
		},
		{
			icon: Globe,
			title: '1960–Sekarang',
			description: 'Sekolah, dakwah, dan kegiatan sosial berkembang hingga menjangkau berbagai wilayah Indonesia.'
		}
	];
	const impactFeatures = [
		{
			icon: Globe,
			title: 'Jaringan yang Berkembang',
			description: 'Tumbuh menjadi pusat pendidikan dan dakwah yang menjangkau berbagai wilayah.'
		},
		{
			icon: Mic,
			title: 'Dakwah yang Inklusif',
			description: 'Menyebarkan nilai Islam yang santun, terbuka, dan menyejukkan.'
		},
		{
			icon: User,
			title: 'Jaringan yang Berkembang',
			description: 'Menghadirkan program keagamaan dan sosial yang berkelanjutan.'
		}
	];
</script>

<div class="flex flex-col gap-10">
	<Hero
		backgroundImage={HistoryImg}
		badgeText="Sejarah Yayasan"
		title="Perjalanan Membangun Pendidikan Berkualitas"
		description="Mengabdi dalam dunia pendidikan dengan komitmen membangun generasi berakhlak, berilmu, dan berdaya saing."
		{features}
	/>

	<Timeline items={timelineItems} centerLastItem={true} />

	<ImpactSection
		backgroundImage={SchoolImg}
		title="Memberi Dampak bagi Umat dan Bangsa"
		description="Al Azhar membentuk generasi berakhlak, berilmu, dan siap berkontribusi bagi masyarakat."
		features={impactFeatures}
	>
		{#snippet rightCard()}
			<div class="flex flex-col overflow-hidden rounded-[24px] border border-white/20 bg-black/20 shadow-2xl backdrop-blur-sm p-6">
				<!-- Top Image Area -->
				<div class="relative flex h-48 w-full items-center justify-center bg-white mb-2 rounded-xl">
					<!-- Optional placeholder image -->
					<div class="flex h-full w-full items-center justify-center rounded-xl bg-[#F4F3ED]/50 text-[#8b8466]">
						<BookOpen class="h-16 w-16" />
					</div>
				</div>
				
				<!-- Bottom Text -->
				<div class="">
					<h3 class="mb-1 text-2xl font-bold text-white">Pendidikan Islam Modern</h3>
					<p class="text-[15px] font-medium text-white">Mengintegrasikan nilai keislaman dengan standar pendidikan yang relevan dengan perkembangan zaman.</p>
				</div>
			</div>
		{/snippet}
	</ImpactSection>

	<InspirationSection imageSrc={BuyaHamka} />
</div>