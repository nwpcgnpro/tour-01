<script lang="ts">
	export let showModal: boolean = false

	let dialog: HTMLDialogElement = null

	$: if (dialog && showModal) dialog.showModal()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	class="modal"
	bind:this={dialog}
	on:close
	on:click|self={() => dialog.close()}>
	<div class="modal-box">
		<slot />
	</div>
</dialog>
