import { ImKey } from 'react-icons/im'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest/QuestProps'
import React from 'react'

export const Key = ({ number, target, map }: QuestObjective) => {
    return (
        <div className='objective'>
            <ImKey /> <Item itemName={target} />
            <span>{number ? number > 1 : ''}</span>
            <span>needed </span>
            <Location map={map} />
            <ItemImage image={target} />
        </div>
    )
}
