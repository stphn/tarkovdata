import { Item } from '../../Item'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest/QuestProps'
import React from 'react'
import { RiTakeawayFill } from 'react-icons/ri'

export const Pickup = ({
    number,
    target,
    map,
    tool,
    hint,
    gps,
}: QuestObjective) => {
    return (
        <div className='objective'>
            <RiTakeawayFill /> Pickup{' '}
            <span>{number && number > 1 ? number : ''} </span>
            <span>{target} </span>
            <Item itemName={target} /> {hint && `(${hint})`}
            <p>{gps?.leftPercent}</p>
            <p>{gps?.topPercent}</p>
            <p>{gps?.floor}</p>
            <Location map={map} />
        </div>
    )
}
