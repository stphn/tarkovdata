import React, { MouseEventHandler, useEffect, useState } from 'react'

import Image from 'next/image'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib'
import { useRouter } from 'next/router'

interface DashboardProps {
    id: number
    email: string
    display_name: string
    level: number
}
const Dashboard = () => {
    const router = useRouter()

    const [user, setUser] = useState<User | null>()
    const [displayName, setDisplayName] = useState<null>()
    const [profiles, setProfiles] = useState<DashboardProps | null>()

    const handleLogOut: MouseEventHandler = async (e) => {
        e.preventDefault()

        const { error } = await supabase.auth.signOut()

        if (error) {
            alert(JSON.stringify(error))
        } else {
            router.push('/signin')
        }
    }

    useEffect(() => {
        const getProfile = () => {
            const user = supabase.auth.user()

            if (user) {
                setUser(user)
                const getDisplayName = async () => {
                    const { data, error } = await supabase
                        .from('profiles')
                        .select(`email, level, display_name`)
                        .eq('id', user!.id)
                        .single()

                    setProfiles(data)
                    console.log(data)
                }
                getDisplayName()
            } else {
                router.push('/signin')
            }
        }

        getProfile()
    }, [router])

    if (!user) {
        // Currently loading asynchronously User Supabase Information
        return null
    }

    return (
        <div className='h-screen flex items-center justify-center bg-gray-800'>
            <div className='max-w-lg w-full text-center'>
                <h1 className='text-2xl font-semibold text-white'>
                    Welcome
                    {profiles?.display_name
                        ? profiles.display_name
                        : user.email}
                </h1>
                <p className='text-lg text-white'>
                    level:{profiles?.level ? profiles.level : 0}
                </p>
                {user.user_metadata.avatar_url && (
                    <Image
                        src={user.user_metadata.avatar_url}
                        width={89}
                        height={89}
                        alt=''
                    />
                )}
                <button
                    className='mt-6 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2'
                    onClick={handleLogOut}
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Dashboard
