import { GiTargetDummy } from 'react-icons/gi'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest'
import React from 'react'

export const Kill = ({ number, target, map }: QuestObjective) => {
    const biggerThanOne = (number as number) > 1 && number
    return (
        <div className='objective'>
            <GiTargetDummy /> Eliminate {biggerThanOne} {target}
            <Location map={map} />
        </div>
    )
}
