import Link from 'next/link'
import React from 'react'
import { Switch } from '../Switch'

export const Navigation = () => {
    return (
        <>
            <Switch />
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/quests'>
                        <a>Quests</a>
                    </Link>
                </li>
                <li>
                    <Link href='/hideout'>
                        <a>Hideout</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}
