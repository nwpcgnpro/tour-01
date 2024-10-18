<script lang="ts">
	import { themes, theme } from '../lib'
	let theme1 = $theme
</script>

<section class="layer nwp center bg-base-100">
	<article class="content">
		<h1 class="text-4xl font-bold mb-4">Settings</h1>
		<hr />
		<div class="flex flex-col divide-y">
			<div class="form-control py-2">
				<label class="label">
					<span class="text-xl">Theme</span>
					<select
						bind:value={theme1}
						class="select select-bordered capitalize"
						on:change={(e) => {
							theme.set(e.currentTarget.value)
						}}>
						<option disabled selected>Auswahl</option>
						{#each themes as item}
							<option value={item}>{item}</option>
						{/each}
					</select>
				</label>
			</div>
			<div class="form-control py-2">
				<label class="label cursor-pointer">
					<span class="text-xl">Option 1</span>
					<input type="checkbox" class="toggle toggle-secondary" />
				</label>
			</div>
			<div class="form-control py-2">
				<label class="label cursor-pointer">
					<span class="text-xl">Option 2</span>
					<input type="checkbox" class="toggle toggle-secondary" />
				</label>
			</div>
		</div>
	</article>
</section>
