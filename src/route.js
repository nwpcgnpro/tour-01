import Start from './routes/Start.svelte'
import Tour from './routes/Tour.svelte'
import Settings from './routes/Settings.svelte'
import Error from './routes/Error.svelte'
export const nav = [
	{ name: 'Start', href: '/', icon: 'icon-start' },
	{ name: 'Tour', href: '/tour', icon: 'icon-db' },
	{ name: 'Settings', href: '/settings', icon: 'icon-settings' }
]

export const routes = {
	'/': Start,
	'/tour': Tour,
	'/settings': Settings,
	'*': Error
}
