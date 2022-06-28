import Link from 'next/link'
import React from 'react'

interface Props {
    /** The url */
    path: string
    /** The label of the link */
    label: string
    /** Ability to add a className to the link */
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
