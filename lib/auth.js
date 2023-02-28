import {supabase} from '../lib/supabaseClient.js'
async function signInWithEmail(email) {

    const {data, error} = await supabase.auth.signInWithOtp({
        email: email,
        options: {
            emailRedirectTo: window.location.origin
        }
    })


}


export default signInWithEmail
