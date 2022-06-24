import Tooltip, { TooltipContent, TooltipTrigger } from '../../Tootip'

import { FaHandHolding } from 'react-icons/fa'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestTypeProps } from '../QuestTypeProps'
import React from 'react'
import style from './Collect.module.scss'

export const Collect = ({ howmuch, target, map }: QuestTypeProps) => {
    return (
        <div className='objective'>
            <FaHandHolding /> Hand over {howmuch}
            <Tooltip id='targetInfo'>
                <TooltipTrigger as='span'>
                    <Item className={style.highlight} itemName={target} />
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
