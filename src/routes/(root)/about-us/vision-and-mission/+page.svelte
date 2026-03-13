<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import VisionAndMission from '$lib/assets/img/hero/vision-and-mission.png';
	import VisionMissionSection from '$lib/components/shared/about-us/vision-and-mission/vision-and-mission.svelte';
	import MissionSteps from '$lib/components/shared/about-us/vision-and-mission/mission-steps.svelte';
	import LeadershipSection from '$lib/components/shared/about-us/vision-and-mission/leadership-section.svelte';
	import { Moon, Heart, BookOpen, Users, UserCheck, ShieldCheck, Building2 } from '@lucide/svelte';
	import School3 from '$lib/assets/img/hero/sekolah-3.png';
	import LeftImg from '$lib/assets/img/hero/history.jpg';

	// Content data for Mission Steps
	const stepsCards = {
		topLeftCard: {
			icon: Moon,
			title: 'Dakwah dan Pendidikan Islam',
			description: 'Membina dan mengembangkan dakwah dan pendidikan Islam dalam arti yang seluas-luasnya dengan semangat amar makruf nahi munkar.'
		},
		bottomLeftCard: {
			icon: Heart,
			title: 'Nilai Kemanusiaan',
			description: 'Menegakkan nilai-nilai kemanusiaan sesuai ajaran Islam demi kesejahteraan umat dan bangsa lahir dan batin.'
		},
		topRightCard: {
			icon: BookOpen,
			title: 'Penguatan Aqidah',
			description: 'Mengawal dan membela aqidah Islamiyah berdasarkan Al-Qur\'an dan Sunnah Rasul.'
		},
		bottomRightCard: {
			icon: Users,
			title: 'Persatuan Umat',
			description: 'Mendorong terwujudnya persatuan dan kesatuan umat untuk kesejahteraan seluruh rakyat Indonesia.'
		}
	};

	const leadershipCards = [
		{
			icon: UserCheck,
			title: 'Pemimpin Berakhlak',
			description: 'Mendidik pemuda-pemuda Indonesia untuk menjadi kader pembangunan akhlak guna kesejahteraan Republik Indonesia.'
		},
		{
			icon: ShieldCheck,
			title: 'Integritas dan Tanggung Jawab',
			description: 'Mendidik pemuda-pemuda Indonesia agar menjadi alat negara yang berjiwa bersih dan suci.'
		},
		{
			icon: Building2,
			title: 'Dakwah dan Kontribusi',
			description: 'Mendidik pemuda-pemuda Indonesia agar dapat menjadi missi Islam (muballigh) di belakang hari.'
		}
	];
	const studyingCards = [
		{
			icon: UserCheck,
			title: 'Masyarakat Berilmu dan Bertaqwa',
			description: 'Membentuk masyarakat yang berilmu, beramal, & bertaqwa kepada Allah, cinta bangsa & negara, serta bergerak di bidang sosial untuk kemuliaan Islam dan umat.'
		},
		{
			icon: ShieldCheck,
			title: 'Pengembangan Pendidikan Islam ',
			description: 'Membina dan mengembangkan pendidikan Islam dalam arti yang seluas-luasnya. '
		},
		{
			icon: Building2,
			title: 'Syiar dan Pembinaan Umat',
			description: 'Meningkatkan mutu dan menyebarkan syiar Islam melalui pendidikan, dakwah, bimbingan ibadah, seni budaya, dan sebagainya.'
		}
	];
</script>

<div class="flex flex-col gap-10 pb-20">
	<Hero
		backgroundImage={VisionAndMission}
		badgeText="YPI AL Azhar"
		title="Lembaga Dakwah dan Pendidikan Islam Modern"
		description="Mengintegrasikan dakwah, ilmu, dan karakter dalam membangun generasi unggul dan berakhlak."
	/>

	<VisionMissionSection 
		leftImageSrc={LeftImg}
		rightImageSrc={VisionAndMission}
	/>

	<MissionSteps 
		centerImageSrc={School3} 
		{...stepsCards} 
	/>

	<LeadershipSection 
		backgroundImageSrc={LeftImg}
		cards={leadershipCards} 
		reverse={false}
	/>

	<LeadershipSection 
		title="Membangun Peradaban melalui Pendidikan Islam"
		description="Menghadirkan pendidikan yang luas, berkualitas, dan berdampak dalam membentuk masyarakat beriman, berilmu, dan berkontribusi bagi umat serta bangsa."
		backgroundImageSrc={LeftImg}
		cards={studyingCards} 
		reverse={true}
	/>
</div>