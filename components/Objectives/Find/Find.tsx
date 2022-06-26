import Tooltip, { TooltipContent, TooltipTrigger } from '../../Tootip'

import { FaHandHolding } from 'react-icons/fa'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest/QuestProps'
import React from 'react'

export const Find = ({ number, target, map }: QuestObjective) => {
    return (
        <div className='objective'>
            <FaHandHolding /> Hand over {number}
            <Tooltip id='targetInfo'>
                <TooltipTrigger as='span'>
                    <Item itemName={target} />
                </TooltipTrigger>
                <TooltipContent placement='top'>
                    <Item itemName={target} />

                    <ItemImage image={target} width={128} height={128} />
                </TooltipContent>
            </Tooltip>
            <Location map={map} />
        </div>
    )
}
