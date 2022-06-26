import { IoMdLocate } from 'react-icons/io'
import { Item } from '../../Item'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest/QuestProps'
import React from 'react'

export const Locate = ({
    number,
    target,
    map,
    tool,
    hint,
    gps,
}: QuestObjective) => {
    return (
        <div className='objective'>
            <IoMdLocate /> Locate{' '}
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
