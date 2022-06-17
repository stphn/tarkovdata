import { Item } from '../../Item'
import { Location } from '../../Location'
import { MdSettingsRemote } from 'react-icons/md'
import { QuestTypeProps } from '../QuestTypeProps'
import React from 'react'
import { Tool } from '../../Tool'

export const Mark = ({ howmuch, target, map, tool, hint }: QuestTypeProps) => {
    return (
        <div className='objective'>
            <MdSettingsRemote /> Place{' '}
            <span>{howmuch && howmuch > 1 ? howmuch : ''} </span>
            <Tool toolName={tool} /> at {target}
            <Item itemName={target} /> ({hint})
            <Location mapName={map} />
        </div>
    )
}
