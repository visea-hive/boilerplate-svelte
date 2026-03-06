<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Eye, EyeOff } from '@lucide/svelte';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { loginSchema } from '$lib/schema/auth';
	import { authService } from '$lib/api/services/auth-service';
	import { goto } from '$app/navigation'; // For redirection

	let { form: formProps }: { form: SuperValidated<Infer<typeof loginSchema>> } = $props();

	const form = superForm(formProps, {
		validators: zod4Client(loginSchema),
		SPA: true, // Use client-side handling
		async onUpdate({ form }) {
			if (!form.valid) return;

			try {
				// 1. Call Login API
				// Using the user's specific request structure (handled in service)
				const loginData = await authService.login({
					username: form.data.username,
					password: form.data.password
				});

				console.log('Login successful:', loginData);

				// 2. Call /auth/me for user details
				const userProfile = await authService.getUserProfile();
				console.log('User Profile:', userProfile);

				// 3. Success Redirect
				goto('/');
			} catch (error: any) {
				console.error('Login Error:', error);
				// Optionally set form error
			}
		}
	});

	const { form: formData, enhance, delayed } = form;

	let viewPassword = $state(false);
</script>

<Card.Root class="mx-auto w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content>
		<form method="POST" use:enhance class="space-y-4">
			<Form.Field {form} name="username">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Username</Form.Label>
						<Input {...props} bind:value={$formData.username} placeholder="e.g. emilys" />
					{/snippet}
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Password</Form.Label>
						<div class="flex gap-2">
							<Input
								{...props}
								bind:value={$formData.password}
								type={viewPassword ? 'text' : 'password'}
							/>
							<Button
								type="button"
								variant="outline"
								size="icon"
								onclick={() => (viewPassword = !viewPassword)}
							>
								{#if viewPassword}
									<EyeOff class="h-4 w-4" />
								{:else}
									<Eye class="h-4 w-4" />
								{/if}
							</Button>
						</div>
					{/snippet}
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button type="submit" class="mt-4 w-full">Login</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
