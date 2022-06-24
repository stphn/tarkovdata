import React from 'react'
import items from '../../tarkovdata/items.en.json'

type Props = {
    /**The name of the tool */
    toolName?: string
    /**The className you may want to add */
    className?: string
}
export const Tool: React.FC<Props> = ({ toolName, className }) => {
    const Items = (Object.keys(items) as (keyof typeof items)[]).map((item) => {
        const i = items[item]
        if (toolName === i.id) {
            return (
                <span className={className} key={i.id}>
                    {i.name}
                </span>
            )
        }
    })
    return <>{Items}</>
}
