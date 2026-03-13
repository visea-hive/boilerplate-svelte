<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import Image from '$lib/assets/img/slider/school-4.png';
	import NewsGrid from '$lib/components/news/news-grid.svelte';

	import news1 from '$lib/assets/img/news/news-1.png';
	import news2 from '$lib/assets/img/news/news-2.png';
	import news3 from '$lib/assets/img/news/news-3.png';

	const newsItems = [
		{
			title: 'Studi Banding Yayasan Insan Pelita Pratama Indonesia',
			image: news1,
			link: '/about-us/news/1'
		},
		{
			title: 'YPI Al Azhar Jawa Timur Gelar Giat Bina Satpam',
			image: news2,
			link: '/about-us/news/2'
		},
		{
			title: 'YPI Al Azhar Selenggarakan Pembinaan Awal Pegawai (PAP) ke-29 dan ke-30',
			image: news3,
			link: '/about-us/news/3'
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, augue nec ac...',
			image: news1,
			link: '/about-us/news/4'
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, augue nec ac...',
			image: news2,
			link: '/about-us/news/5'
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, augue nec ac...',
			image: news3,
			link: '/about-us/news/6'
		}
	];
</script>

<div class="flex flex-col pb-20 gap-12">
	<Hero
		backgroundImage={Image}
		badgeText="Berita & Informasi"
		title="Informasi, Prestasi, dan Inovasi Pendidikan Islam"
		description="Ikuti perkembangan kegiatan, prestasi siswa, serta inovasi pendidikan yang membentuk generasi berakhlak, unggul, dan berdaya saing global."
	/>

	<NewsGrid {newsItems} />
</div>