import Image from 'next/image'
import React from 'react'

import traders from '../../tarkovdata/traders.json'

interface GiverProps {
    giver: number
    className?: string
}
export const Giver = ({ giver, className }: GiverProps) => {
    const Givers = (Object.keys(traders) as (keyof typeof traders)[]).map(
        (trader) => {
            const g = traders[trader]
            if (giver === g.id) {
                return (
                    <div key={g.id} className={className}>
                        <Image
                            className='rounded-full'
                            src={`/traders/small/${g.locale.en}.webp`}
                            alt={g.name}
                            width={24}
                            height={24}
                        />
                    </div>
                )
            }
        }
    )
    return <>{Givers}</>
}

export const Trader = ({ giver, className }: GiverProps) => {
    const Traders = (Object.keys(traders) as (keyof typeof traders)[]).map(
        (trader) => {
            const t = traders[trader]
            if (giver === t.id) {
                return (
                    <p className={className} key={t.id}>
                        &nbsp;{t.locale.en}
                    </p>
                )
            }
        }
    )
    return <>{Traders}</>
}
