import { writable, get } from 'svelte/store'
let browser = typeof window !== 'undefined'
function storable(key, initValue) {
	const store = writable(initValue)
	if (!browser) {
		console.log('no browser')
		return store
	}

	const storedValueStr = localStorage.getItem(key)
	if (storedValueStr != null) {
		store.set(JSON.parse(storedValueStr))
	}

	store.subscribe((val) => {
		if ([null, undefined].includes(val)) {
			localStorage.removeItem(key)
		} else {
			localStorage.setItem(key, JSON.stringify(val))
		}
	})

	window.addEventListener('storage', () => {
		const storedValueStr = localStorage.getItem(key)
		if (storedValueStr == null) return

		const localValue = JSON.parse(storedValueStr)
		if (localValue !== get(store)) store.set(localValue)
	})

	return store
}

export default storable
