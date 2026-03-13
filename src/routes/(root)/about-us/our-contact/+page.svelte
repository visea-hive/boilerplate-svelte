<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import School5 from '$lib/assets/img/slider/school-5.png';
	import ContactForm from '$lib/components/about-us/our-contact/contact-form.svelte';
</script>

<div class="flex flex-col pb-20 gap-12">
	<Hero
		backgroundImage={School5}
		badgeText="Hubungi Kami"
		title="Terhubung Lebih Dekat dengan YPI AL Azhar"
		description="Tim kami siap membantu Anda mendapatkan informasi lengkap mengenai program pendidikan, fasilitas, dan proses pendaftaran."
	/>
	<ContactForm />
</div>