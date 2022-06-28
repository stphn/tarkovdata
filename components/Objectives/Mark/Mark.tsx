import { Item } from '../../Item'
import { Location } from '../../Location'
import { MdSettingsRemote } from 'react-icons/md'
import { QuestObjective } from '../../Quest/QuestProps'
import React from 'react'
import { Tool } from '../../Tool'

export const Mark = ({ number, target, map, tool, hint }: QuestObjective) => {
    return (
        <div className='objective'>
            <MdSettingsRemote /> Place
            <span>{number && number > 1 ? number : ''} </span>
            <Tool toolName={tool} /> at {target}
            <Item itemName={target} /> {hint && `(${hint})`}
            <Location map={map} />
        </div>
    )
}
