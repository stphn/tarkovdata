import { GiTargetDummy } from 'react-icons/gi'
import { Location } from '../../Location'
import { QuestTypeProps } from '../QuestTypeProps'
import React from 'react'

export const Kill = ({ howmuch, target, map }: QuestTypeProps) => {
    return (
        <div className='objective'>
            <GiTargetDummy /> Eliminate {howmuch} {target}
            <Location mapName={map} />
        </div>
    )
}
