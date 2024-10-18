<script lang="ts">
	import { sleep } from '../'
	import { supabase, getUser, _user } from '../db'
	import SignIn from './SignIn.svelte'
	import Spinner from './Spinner.svelte'

	supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') _user.set(session.user)
		else _user.set(null)
	})
	const checkUser = async () => {
		console.log('checkUser')
		await sleep(111)
		const user = await getUser()
		_user.set(user)
	}
	const delay = 250
	let promise = checkUser()
</script>

{#await promise}
	<Spinner></Spinner>
{:then _}
	{#if $_user}
		<slot></slot>
	{:else}
		<SignIn></SignIn>
	{/if}
{/await}
