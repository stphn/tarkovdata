import Image from 'next/image'
import React from 'react'
import styles from './Giver.module.scss'
import traders from '../../tarkovdata/traders.json'

interface GiverProps {
    giver: number
    className?: string
}
export const Giver: React.FC<GiverProps> = ({ giver, className }) => {
    const Givers = (Object.keys(traders) as (keyof typeof traders)[]).map(
        (trader) => {
            const g = traders[trader]
            if (giver === g.id) {
                return (
                    <Image
                        key={g.id}
                        className={`${styles.trader} ${className}`}
                        src={`/traders/small/${g.locale.en}.webp`}
                        alt={g.name}
                        width={24}
                        height={24}
                    />
                )
            }
        }
    )
    return <>{Givers}</>
}
