import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { supabase } from '../lib'

const Callback = () => {
    const router = useRouter()

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, sessionState) => {
                if (sessionState?.user) {
                    router.push('/dashboard')
                }
            }
        )

        return () => {
            authListener?.unsubscribe()
        }
    }, [router])

    return null
}

export default Callback
