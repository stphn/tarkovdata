import Tooltip, { TooltipContent, TooltipTrigger } from '../../Tootip'

import { FaHandHolding } from 'react-icons/fa'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestTypeProps } from '../QuestTypeProps'
import React from 'react'

export const Find = ({ howmuch, target, map }: QuestTypeProps) => {
    return (
        <div className='objective'>
            <FaHandHolding /> Hand over {howmuch}
            <Tooltip id='targetInfo'>
                <TooltipTrigger as='span'>
                    <Item itemName={target} />
                </TooltipTrigger>
                <TooltipContent placement='top'>
                    <Item itemName={target} />

                    <ItemImage image={target} width={128} height={128} />
                </TooltipContent>
            </Tooltip>
            <Location mapName={map} />
        </div>
    )
}
