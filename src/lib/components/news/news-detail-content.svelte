<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';

	interface Props {
		category?: string;
		date?: string;
		author?: string;
		title?: string;
		content?: string;
		gallery?: string[];
	}

	let {
		category = 'Berita Terkini',
		date = '31 Januari 2026',
		author = 'Humas Al Azhar',
		title = 'Studi Banding Yayasan Insan Pelita Pratama Indonesia',
		content = 'Yayasan Pesantren Islam (YPI) Al Azhar melalui Sekretariat kembali menerima kunjungan dari Yayasan Insan Pelita Pratama Indonesia. Adapun tujuannya selain bersilaturahmi juga ingin menambah wawasan tentang tata kelola dalam pengelolaan YPI Al Azhar. Semua peserta terlihat begitu antusiasnya dalam pengelelolaan YPI Al Azhar yang dapat digunakan oleh Yayasan Insan Pelita Pratama Indonesia. Harapan dari YPI Al Azhar semoga kunjungan ini dapat bermanfaat dan tetap menjalin tali silaturahmi antar sesama instansi pendidikan.',
		gallery = []
	}: Props = $props();
</script>

<div class="mx-auto w-full px-4 py-12 md:px-6 lg:py-16">
	<!-- Meta Info -->
	<div class="mb-3 flex flex-wrap items-center gap-1.5 text-[14px] font-medium text-[#777777]">
		<span>{category}</span>
		<span>&bull;</span>
		<span>{date}</span>
		<span>&bull;</span>
		<span>{author}</span>
	</div>

	<!-- Title -->
	<h1 class="mb-6 text-3xl font-bold leading-tight text-txt-essentials-primary md:text-5xl lg:text-[42px]">
		{title}
	</h1>

	<!-- Content -->
	<div class="mb-12 text-base leading-relaxed text-txt-essentials-primary md:text-xl lg:text-[22px]">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html DOMPurify.sanitize(content || '')}
	</div>

	<!-- Gallery Grid -->
	{#if gallery && gallery.length > 0}
		<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
			{#each gallery as image, idx (idx)}
				<div class="overflow-hidden rounded-4xl border-[1.5px] border-[#EFEFEF] bg-[#F9F9F9] p-6 transition-shadow hover:shadow-md">
					<img
						src={image}
						alt="Detail gallery {idx + 1}"
						class="aspect-video w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.03]"
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
