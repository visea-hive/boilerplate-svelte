<script lang="ts">
	import LoginForm from '$lib/components/form/login-form.svelte';

	let { data } = $props();
	const { form } = $derived(data);
</script>

<div class="flex flex-col space-y-6">
	<div class="flex flex-col space-y-2 text-center">
		<h1 class="font-['Playfair_Display',serif] text-3xl font-bold tracking-tight text-white">
			Welcome back
		</h1>
		<p class="text-sm text-neutral-500">Enter your email below to access your account</p>
	</div>
	<LoginForm {form} />
</div>
