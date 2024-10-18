<script lang="ts">
	import Plant from './office/Plant.svelte'
	import Msg2 from './office/Msg2.svelte'
	import Msg1 from './office/Msg1.svelte'
	import Desk from './office/Desk.svelte'
	import Sms2 from './office/Sms2.svelte'
	import Sms1 from './office/Sms1.svelte'
	import Gears from './office/Gears.svelte'
	import Closet from './office/Closet.svelte'
	export let opacity = 1
</script>

<svg viewBox="0 0 529.034 399.999" fill="none" stroke="none">
	<g id="office1">
		<Closet></Closet>
		<Plant></Plant>
		<Gears></Gears>
		<Sms1></Sms1>
		<Sms2></Sms2>
		<Desk></Desk>
		<Msg1></Msg1>
		<Msg2></Msg2>
	</g>
</svg>

<style>
	svg {
		width: 100%;
		height: auto;
		max-width: 100%;
		overflow: hidden;
	}
</style>
