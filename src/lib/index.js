import { writable, derived } from 'svelte/store'
export const theme = writable('corporate')
export const tour_name = writable('')
export const kuerzel = writable('')
export const driver = writable('')
export const _user = writable(null)
export const themes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset'
]
// @index('./*.svelte', f => `export { default as ${f.name} } from '${f.path}${f.ext}'`)
// export { supabase, signIn, signOut, getUser, fetchDb } from './db'

// @index('./utils/*.js', f => `export { default as ${f.name} } from '${f.path}'`)
export { default as clickOutside } from './utils/clickOutside'
export { default as copyToClip } from './utils/copyToClip'
export { default as fetchData } from './utils/fetchData'
export { default as randInt } from './utils/randInt'
export { default as randNum } from './utils/randNum'
export { default as sleep } from './utils/sleep'
// @endindex
// @index('./stores/*.js', f => `export { default as ${f.name} } from '${f.path}'`)
// @endindex
