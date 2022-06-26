import Tooltip, { TooltipContent, TooltipTrigger } from '../../Tootip'

import { FaHandHolding } from 'react-icons/fa'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest'
import React from 'react'
import style from './Collect.module.scss'

export const Collect = ({ number, target }: QuestObjective) => {
    return (
        <div className='objective'>
            <FaHandHolding /> Hand over {number}
            <Tooltip id='targetInfo'>
                <TooltipTrigger as='span'>
                    <Item className={style.highlight} itemName={target} />
                </TooltipTrigger>
                <TooltipContent placement='top'>
                    <Item itemName={target} />

                    <ItemImage image={target} width={128} height={128} />
                </TooltipContent>
            </Tooltip>
        </div>
    )
}
