<script lang="ts">
	import { fetchData, sleep, tour_name, kuerzel } from '../lib'
	import Error from './Error.svelte'
	import Spinner from '../lib/components/Spinner.svelte'
	import { onDestroy } from 'svelte'
	const uri1 = '/data/tour_user.json'
	const uri2 = '/data/tour_work.json'
	const uri3 = '/data/tour_main.json'
	let data1 = [],
		data2 = [],
		data3 = [],
		key1 = 0

	const handleDriver = async () => {
		if (key1 == 0) {
			tour_name.set('')
			return
		}
		const data = data1.find((d) => d.id == key1)
		tour_name.set(data.tour_name)
		console.log('handleDriver', data)
	}

	const init = async () => {
		await sleep(500)
		const [driver, work, main] = await Promise.all([
			fetchData(uri1),
			fetchData(uri2),
			fetchData(uri3)
		])

		if (driver && work && main) {
			data1 = driver
			data2 = work
			data3 = main
			return { data1, data2, data3 }
		}
	}

	let promise = init()

	onDestroy(() => {
		tour_name.set('')
		kuerzel.set('')
	})
</script>

{#await promise}
	<Spinner />
{:then value}
	<section class="layer bg-base-100 nwp">
		<article class="content">
			<h1 class="text-xl font-bold mb-4">PathFinder</h1>
			<div>
				<select
					bind:value={key1}
					on:change={handleDriver}
					class="select select-bordered w-full">
					<option value={0}>Auswahl</option>
					{#each data1 as { tour_name, driver, id }}
						<option value={id}>{tour_name}</option>
					{/each}
				</select>
			</div>
			{#if $tour_name}
				<div class="space-y-4 py-4">
					{#each data3.filter((d) => d.tour_name === $tour_name) as { kuerzel, tour_name, sort, name, aka1, aka2, adresse, plz, ort, tel, info }}
						<div class="grid gap-1 bg-base-200 shadow-lg p-4 rounded-box">
							<div class="text-2xl">{name}</div>
							{#if aka1}
								<div>{aka1}</div>
							{/if}
							{#if aka2}
								<div>{aka2}</div>
							{/if}
							<div>{adresse}</div>
							<div><span>{plz}</span> <span>{ort}</span></div>
							<div>{tel}</div>
						</div>
						{#each data2.filter((d) => d.kuerzel === kuerzel) as { id, kuerzel, tour_name, datum, sort, boxen, befunde, material, proben, bemerkung, timestamp }}
							{#if boxen}
								<div role="alert" class="alert alert-info">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										class="h-6 w-6 shrink-0 stroke-current">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
									<span>{boxen} {boxen > 1 ? 'Boxen' : 'Box'}</span>
								</div>
							{/if}
							<div class="form-control bg-base-100 shadow-lg p-4 rounded-box">
								<label class="label cursor-pointer">
									<span class="label-lg">Befunde</span>
									<input type="checkbox" checked={befunde} class="checkbox" />
								</label>
								<label class="label cursor-pointer">
									<span class="label-lg">Material</span>
									<input type="checkbox" checked={material} class="checkbox" />
								</label>
								<label class="label cursor-pointer">
									<span class="label-lg">Proben</span>
									<input type="checkbox" checked={proben} class="checkbox" />
								</label>
							</div>
						{/each}
						<hr />
					{/each}
				</div>

				<!-- {#each data3.filter((d) => d.tour_name === $tour_name) as { id, kuerzel, tour_name, datum, sort, boxen, befunde, material, proben, bemerkung, timestamp }, i}
					<div class="grid">
						<div>{kuerzel}</div>
					</div>
				{/each} -->
			{/if}
		</article>
		<!-- <article class="content">
			<details>
				<div>
					<pre>{JSON.stringify(value.data2, null, 2)}</pre>
				</div>
			</details>
		</article> -->
	</section>
{:catch error}
	<Error {error} />
{/await}
