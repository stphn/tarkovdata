import React, { useEffect, useState } from 'react'

import { User } from '@supabase/supabase-js'
import router from 'next/router'
import { supabase } from '../lib'

export const UserContext = React.createContext<any>(null)

export const UserProvider = (props: { children: any }) => {
    const [user, setUser] = useState<User | null>()
    const [displayName, setDisplayName] = useState<null>()

    useEffect(() => {
        const getProfile = () => {
            const profile = supabase.auth.user()

            if (profile) {
                setUser(profile)
                const getDisplayName = async () => {
                    const { data: displayName } = await supabase
                        .from('profile')
                        .select('display_name')
                        .single()

                    //displayName && console.log(displayName.display_name)

                    displayName && setDisplayName(displayName.display_name)
                }
                getDisplayName()
            } else {
                //router.push('/signin')
            }
        }

        getProfile()
    }, [])

    if (!user) {
        // Currently loading asynchronously User Supabase Information
        return null
    }

    return (
        <UserContext.Provider value={{ user, displayName }}>
            {props.children}
        </UserContext.Provider>
    )
}
