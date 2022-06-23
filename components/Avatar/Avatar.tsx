import { useEffect, useState } from 'react'

import { DEFAULT_AVATARS_BUCKET } from '../../lib'
import Image from 'next/image'
import { supabase } from '../../lib'

export const Avatar = ({ url, size }: { url: string | null; size: number }) => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

    useEffect(() => {
        if (url) downloadImage(url)
    }, [url])

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage
                .from(DEFAULT_AVATARS_BUCKET)
                .download(path)
            if (error) {
                throw error
            }
            const url = URL.createObjectURL(data)
            setAvatarUrl(url)
        } catch (error) {
            let errorMessage = 'Error downloading image'
            if (error instanceof Error) {
                errorMessage = error.message
            }
            console.log(errorMessage)
        }
    }

    return avatarUrl ? (
        <Image
            src={avatarUrl}
            className='avatar image'
            alt='avatar'
            style={{ height: size, width: size }}
        />
    ) : (
        <div
            className='avatar no-image'
            style={{ height: size, width: size }}
        />
    )
}
