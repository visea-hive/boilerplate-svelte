<script lang="ts">
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import Footer from '$lib/components/navigation/footer.svelte';

	let { children } = $props();
</script>

<div class="relative flex min-h-screen flex-col bg-white">
	<!-- Navigation -->
	<Navbar />

	<!-- Main Content -->
	<main class="relative z-2 grow">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>
