import Image from 'next/image'
import React from 'react'
import styles from './Giver.module.scss'

type GiverProps = {
    who: number
}

const Traders = [
    {
        id: 0,
        name: 'Prapor',
    },

    {
        id: 1,
        name: 'Therapist',
    },
    {
        id: 2,
        name: 'Skier',
    },
    {
        id: 3,
        name: 'Peacekeeper',
    },
    {
        id: 4,
        name: 'Mechanic',
    },
    {
        id: 5,
        name: 'Ragman',
    },
    {
        id: 6,
        name: 'Jaeger',
    },
    {
        id: 7,
        name: 'Fence',
    },
]

export const Giver: React.FC<GiverProps> = ({ who }) => {
    const allTarders = Traders.map((trader) =>
        trader.id === who ? (
            <Image
                key={trader.id}
                className={styles.trader}
                src={`/headshots/${trader.name}Headshot.jpg`}
                alt={trader.name}
                width={24}
                height={24}
            />
        ) : null
    )

    return <>{allTarders}</>
}
