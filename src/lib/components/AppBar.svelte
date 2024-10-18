<script lang="ts">
	import Modal from './Modal.svelte'
	let showModal = false
	let mat = false
	export let label = 'nwp-app'
</script>

<header class="sticky top-0 z-10">
	<div
		class="navbar {mat
			? 'bg-info text-info-content'
			: 'bg-neutral text-neutral-content'}">
		{#if mat}
			<div class="flex-none">
				<button
					on:click={() => (showModal = true)}
					class="btn btn-ghost btn-circle">
					<svg class="nwp-icon"><use xlink:href="#icon-menu"></use></svg>
				</button>
			</div>
		{/if}
		<div class="flex-1">
			<span class="text-xl font-bold px-2">{label}</span>
		</div>
		<div class="navbar-end">
			<slot>
				<a href="/" class="btn btn-ghost btn-circle">
					<span class="sr-only">Start</span>
					<svg class="nwp-icon icon-db"
						><use xlink:href="#icon-start"></use></svg>
				</a>
				<a href="/db" class="btn btn-ghost btn-circle">
					<span class="sr-only">List</span>
					<svg class="nwp-icon icon-db"><use xlink:href="#icon-db"></use></svg>
				</a>
				<a href="/settings" class="btn btn-ghost btn-circle">
					<span class="sr-only">Settings</span>
					<svg class="nwp-icon icon-settings"
						><use xlink:href="#icon-settings"></use></svg>
				</a>
			</slot>
		</div>
	</div>
</header>

<Modal
	{showModal}
	on:close={() => {
		showModal = false
		// button.focus()
	}}>
	<h3 class="text-lg font-bold">Hello!</h3>
	<p class="py-4">Press ESC key or click the button below to close</p>
	<div class="modal-action">
		<form method="dialog">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">Close</button>
		</form>
	</div>
</Modal>
