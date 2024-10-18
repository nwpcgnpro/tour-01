<script>
	import { _user, signIn, sleep } from '../'
	let faded = false
	let email = ''
	let password = ''

	const submitForm = async () => {
		faded = true
		const data = await signIn({ email, password })
		if (data) {
			await sleep(100)
			// $goto('/user')
		}

		faded = false
	}
</script>

{#await sleep(200) then _}
	<section class="layer center nwp">
		<article class="content" style="--page-width: 420px;">
			<form
				on:submit|preventDefault={submitForm}
				class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">Sign In</h2>
					<div class="flex flex-col gap-4 py-2">
						<input
							type="email"
							bind:value={email}
							required
							placeholder="email"
							class="input input-bordered" />
						<input
							type="password"
							bind:value={password}
							required
							placeholder="password"
							class="input input-bordered" />
					</div>
					<div class="card-actions justify-end">
						<button type="submit" class="btn btn-neutral">Anmelden</button>
					</div>
				</div>
			</form>
		</article>
	</section>
{/await}
