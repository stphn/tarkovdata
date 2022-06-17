import Link from 'next/link'
import React from 'react'
import { URL } from 'url'

interface Props {
    /**
     * The url
     * */
    path: string
    label: string
    className: string
}

export const MenuItem = ({ path, label, className }: Props) => {
    return (
        <div className={className}>
            <Link href={path}>
                <a>{label}</a>
            </Link>
        </div>
    )
}
