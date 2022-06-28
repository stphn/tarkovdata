import React from 'react'
import items from '../../tarkovdata/items.en.json'

// create an interface for the props
interface ItemProps {
    itemName?: string
    className?: string
}
export const Item = ({ itemName, className }: ItemProps) => {
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
