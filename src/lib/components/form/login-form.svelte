<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as Form from '$lib/components/ui/form/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Eye, EyeOff } from '@lucide/svelte';
	import SuperDebug, { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { loginSchema } from '$lib/schema/auth';

	let { form: formProps }: { form: SuperValidated<Infer<typeof loginSchema>> } = $props();

	const form = superForm(formProps, {
		validators: zod4Client(loginSchema)
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
			<div class="py-4">
				<SuperDebug data={formData} />
			</div>
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$formData.email} />
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
