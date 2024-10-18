<script lang="ts">
	import { signOut, _user } from '../db'
</script>

{#if $_user && $_user.email}
	<button class="btn btn-outline btn-xs btn-error" on:click={signOut}
		>Abmelden</button>
{:else}
	<button class="btn btn-outline btn-xs btn-ghost" disabled>Anmelden</button>
{/if}
