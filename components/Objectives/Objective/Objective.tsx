import Tooltip, { TooltipContent, TooltipTrigger } from '../../Tootip'

import { Collect } from '../Collect'
import { FaHandHolding } from 'react-icons/fa'
import { GiTargetDummy } from 'react-icons/gi'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest'
import React from 'react'
import style from './Collect.module.scss'

export const Objective = ({
    type,
    target,
    tool,
    hint,
    have,
    number,
    location,
    with: using,
    id,
    gps,
    map,
}: QuestObjective) => {
    const biggerThanOne = (number as number) > 1 && number
    //create switch case for each type of objective

    const Icon = () => {
        if (type === 'kill') {
            return <GiTargetDummy className='mr-1' />
        }
        if (type === 'collect') {
            return <FaHandHolding className='mr-1' />
        }
    }
    const Type = () => {
        if (type === 'kill') {
            return 'Eliminate'
        }
        if (type === 'collect') {
            return 'Hand over'
        } else {
            return type
        }
    }

    const Target = () => {
        if (type === 'collect') {
            return (
                <Tooltip id='targetInfo'>
                    <TooltipTrigger as='span'>
                        <Item className={style.highlight} itemName={target} />
                    </TooltipTrigger>
                    <TooltipContent placement='top'>
                        <Item itemName={target} />

                        <ItemImage image={target} width={128} height={128} />
                    </TooltipContent>
                </Tooltip>
            )
        } else {
            return target
        }
    }

    return (
        <div className='objective'>
            {`Type: ${type} =>`}
            <div className='flex content-center items-center border-solid border-2 border-indigo-600 p-4'>
                {Icon()}
                {Type()} {''}
                {biggerThanOne} {''}
                {Target()} {''}
                {tool} {''}
                <Location map={location} />
            </div>
            {tool && <Item itemName={tool} />}
            {hint && <Item itemName={hint} />}
            {have}
            {/* <p>Number: {number}</p>
            <p>Location: {location}</p> */}
            {`objective id = ${id}`}
            {`with = ${using}`}
            {gps?.floor}
            {gps?.leftPercent}
            {gps?.topPercent}
            {map}
        </div>
    )
}
