import React from 'react'
import items from '../../tarkovdata/items.en.json'

type Props = {
    itemName: string
}
export const Item: React.FC<Props> = ({ itemName }) => {
    const Items = (Object.keys(items) as (keyof typeof items)[]).map((item) => {
        const i = items[item]
        if (itemName === i.id) {
            return <span key={i.id}> {i.name}</span>
        }
    })
    return <>{Items}</>
}
