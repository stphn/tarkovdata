import React from 'react'
import items from '../../tarkovdata/items.en.json'
interface Props {
    itemName?: string
    className?: string
}
export const Item = ({ itemName, className }: Props) => {
    const Items = (Object.keys(items) as (keyof typeof items)[]).map((item) => {
        const i = items[item]
        if (itemName === i.id) {
            return (
                <span className={className} key={i.id}>
                    {i.name}
                </span>
            )
        }
    })
    return <>{Items}</>
}
