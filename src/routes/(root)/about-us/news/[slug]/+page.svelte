<script lang="ts">
	import NewsDetailContent from '$lib/components/news/news-detail-content.svelte';

	import news1 from '$lib/assets/img/news/news-1.png';
	import news2 from '$lib/assets/img/news/news-2.png';
	import news3 from '$lib/assets/img/news/news-3.png';
	import Hero from '$lib/components/shared/hero.svelte';
	import Image from '$lib/assets/img/news/news-1.png';

	const dummyGallery = [news1, news2, news3, news2, news3, news1];
</script>

<div class="flex flex-col pb-20 gap-8">
	<Hero
		backgroundImage={Image}
		badgeText="Berita & Informasi"
		title="Informasi, Prestasi, dan Inovasi Pendidikan Islam"
		description="Ikuti perkembangan kegiatan, prestasi siswa, serta inovasi pendidikan yang membentuk generasi berakhlak, unggul, dan berdaya saing global."
	/>
	<NewsDetailContent
		category="Berita Terkini"
		date="31 Januari 2026"
		author="Humas Al Azhar"
		title="Studi Banding Yayasan Insan Pelita Pratama Indonesia"
		content="Yayasan Pesantren Islam (YPI) Al Azhar melalui Sekretariat kembali menerima kunjungan dari Yayasan Insan Pelita Pratama Indonesia. Adapun tujuannya selain bersilaturahmi juga ingin menambah wawasan tentang tata kelola dalam pengelolaan YPI Al Azhar. Semua peserta terlihat begitu antusiasnya dalam pengelelolaan YPI Al Azhar yang dapat digunakan oleh Yayasan Insan Pelita Pratama Indonesia. Harapan dari YPI Al Azhar semoga kunjungan ini dapat bermanfaat dan tetap menjalin tali silaturahmi antar sesama instansi pendidikan."
		gallery={dummyGallery}
	/>
</div>
