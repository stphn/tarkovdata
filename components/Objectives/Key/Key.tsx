import { ImKey } from 'react-icons/im'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestTypeProps } from '../QuestTypeProps'
import React from 'react'

export const Key = ({ howmuch, target, map }: QuestTypeProps) => {
    return (
        <div className='objective'>
            <ImKey /> <Item itemName={target} />
            <span>{howmuch ? howmuch > 1 : ''}</span>
            <span>needed </span>
            <Location mapName={map} />
            <ItemImage image={target} />
        </div>
    )
}
