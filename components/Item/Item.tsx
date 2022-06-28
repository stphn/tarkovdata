import React from 'react'

import items from '../../tarkovdata/items.en.json'
import { ItemImage } from '../ItemImage'
import Tooltip, { TooltipContent, TooltipTrigger } from '../Tootip'

// create an interface for the props
interface ItemProps {
    itemName?: any
    className?: string
}
export const Item = ({ itemName, className }: ItemProps) => {
    // valid only for items where the name is not an id: 3 of them
    // if itemName includes a string starting with capital letter return the itemName
    if (itemName?.includes(' ') || itemName?.toString().match(/^[A-Z]/)) {
        return <span className={className}>{itemName}</span>
    }
    // tricks to fix type definition error
    // TODO: change json to string[]
    if (itemName?.includes('5a13ef0686f7746e5a411744')) {
        return (
            <span className={className}>
                Health Resort east wing room 306 key <strong>or</strong> Health
                Resort east wing room 308 key
            </span>
        )
    }

    const Items = (Object.keys(items) as (keyof typeof items)[]).map((item) => {
        const i = items[item]

        if (i.id === itemName && typeof itemName === 'string') {
            return (
                <Tooltip key={i.id} id='targetInfo'>
                    <TooltipTrigger as='p'>
                        <span
                            className={`underline underline-offset-4 ${className}`}
                        >
                            {i.name}
                        </span>
                    </TooltipTrigger>
                    <TooltipContent placement='top'>
                        <p>{i.name}</p>

                        <ItemImage image={i.id} width={128} height={128} />
                    </TooltipContent>
                </Tooltip>
            )
        }
    })
    return <>{Items}</>
}
