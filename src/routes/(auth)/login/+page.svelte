<script lang="ts">
	import LoginForm from '$lib/components/form/login-form.svelte';

	let { data } = $props();

	const { form } = $derived(data);
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<LoginForm {form} />
</div>
