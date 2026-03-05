<script lang="ts">
	import ExpandableGallery from './expandable-gallery.svelte';
	import {
		Leaf,
		MonitorPlay,
		Cpu,
		BookOpenCheck,
		ParkingCircle,
		Users,
		Car,
		Trophy,
		Waves,
		Moon,
		Warehouse
	} from '@lucide/svelte';

	const rows = [
		// Variant 1: Tengah Expand
		{
			activeIndex: 1,
			items: [
				{
					id: 1,
					image: 'https://picsum.photos/seed/fac1/800/800',
					features: [
						{
							icon: Trophy,
							title: 'Sports Complex',
							description: 'Fasilitas olahraga lengkap dan modern.'
						},
						{
							icon: Waves,
							title: 'Kolam Renang Terpisah',
							description: 'Wilayah putra dan putri terpisah sesuai nilai Islam.'
						},
						{
							icon: Moon,
							title: 'Islamic Values',
							description: 'Menjaga adab dan kenyamanan siswa.'
						},
						{
							icon: Warehouse,
							title: 'Lapangan Serbaguna',
							description: 'Mendukung berbagai aktivitas olahraga.'
						}
					]
				},
				{
					id: 2,
					image: 'https://picsum.photos/seed/fac2/1200/800',
					features: [
						{
							icon: Leaf,
							title: 'Green Campus',
							description: 'Lingkungan sekolah sehat dan nyaman.'
						},
						{
							icon: MonitorPlay,
							title: 'Smart Whiteboard',
							description: 'Pembelajaran interaktif dan modern.'
						},
						{
							icon: Cpu,
							title: 'All Digital Learning',
							description: 'Pendidikan berbasis teknologi digital.'
						},
						{
							icon: BookOpenCheck,
							title: 'Bookless System',
							description: 'Sistem belajar menyenangkan, praktis dan efisien.'
						}
					]
				},
				{
					id: 3,
					image: 'https://picsum.photos/seed/fac3/800/800',
					features: [
						{
							icon: ParkingCircle,
							title: 'Area Parkir 2 Basement',
							description: 'Parkir luas dan aman.'
						},
						{ icon: Users, title: 'Ruang Tunggu Driver', description: 'Nyaman dan tertata.' },
						{ icon: Car, title: 'Kapasitas 1000 Kendaraan', description: 'Akses parkir mudah.' }
					]
				}
			]
		}
	];
</script>

<section class="mb-12 space-y-8 bg-[#D8D5CD] pt-9">
	<div class="mb-4 text-center">
		<h2 class="text-3xl font-bold text-txt-essentials-primary md:text-[53px]">
			Lingkungan dan Fasilitas Berstandar Tinggi
		</h2>
		<p class="mt-4 text-txt-essentials-primary">
			Mendukung proses belajar yang aktif, sehat, dan berorientasi masa depan.
		</p>
	</div>

	<div class="space-y-6">
		{#each rows as row}
			<ExpandableGallery items={row.items} defaultActive={row.activeIndex} />
		{/each}
	</div>
</section>
