import { createClient } from '@supabase/supabase-js'
import { _user } from '../'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(
	'https://zafgvnijbjyxgpiljyhk.supabase.co',
	supabaseAnonKey
)

const signIn = async ({ email, password }) => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		})
		if (error) throw new Error('Sign In failed')
		if (data) return data
	} catch (error) {
		console.error(error)
	}
}

const signOut = async () => {
	try {
		let { error } = await supabase.auth.signOut()
		if (!error) return true
		else throw new Error('logout failed')
	} catch (error) {
		alert(error)
	}
}

async function getUser() {
	const {
		data: { user }
	} = await supabase.auth.getUser()
	if (user) return user
	else return null
}

const fetchDb = async (options = {}) => {
	try {
		let req = supabase
			.from(options.db)
			.select(options.keys ? options.keys : '*')
		if (options.userid) req.eq('user_id', options.userid)
		if (options.od) req.order(options.od, { ascending: options.ascending })

		const { data, error } = await req
		if (data) return data
	} catch (error) {
		console.error(error)
		throw new Error(error)
	}
}

export { supabase, signIn, signOut, getUser, fetchDb, _user }
export default supabase
/*  
supabase.auth.onAuthStateChange((event, session) => {
		if (event == 'SIGNED_IN') _user.set(session.user)
		else _user.set(null)
	})
*/
