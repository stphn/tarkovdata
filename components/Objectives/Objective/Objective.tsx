import React from 'react'
// TODO create own icons
import { AiOutlineRise } from 'react-icons/ai'
import { FaHandHolding } from 'react-icons/fa'
import { GiCardPickup, GiStrong, GiTargetDummy } from 'react-icons/gi'
import { GrMapLocation } from 'react-icons/gr'
import { ImKey, ImPointDown } from 'react-icons/im'
import { IoMdLocate } from 'react-icons/io'
import { MdSettingsRemote } from 'react-icons/md'
import { RiAlarmWarningLine, RiTakeawayFill } from 'react-icons/ri'

import { Giver, Trader } from '../../Giver'
import { Item } from '../../Item'
import { Location } from '../../Location'
import { QuestObjective } from '../../Quest'

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
    // only display number bigger than 1
    const biggerThanOne = (number as number) > 1 && number
    // define the Icon for the objective
    // create switch case for each type of objective
    const Icon = React.useMemo(() => {
        switch (type) {
            case 'collect':
                return <FaHandHolding className='pr-1' />
            case 'find':
                return <GiCardPickup className='pr-1' />
            case 'kill':
                return <GiTargetDummy className='pr-1' />
            case 'pickup':
                return <RiTakeawayFill className='pr-1' />
            case 'mark':
                return <MdSettingsRemote className='pr-1' />
            case 'key':
                return <ImKey className='pr-1' />
            case 'place':
                return <ImPointDown className='pr-1' />
            case 'locate':
                return <IoMdLocate className='pr-1' />
            case 'skill':
                return <GiStrong className='pr-1' />
            case 'warning':
                return <RiAlarmWarningLine className='pr-1' />
            case 'reputation':
                return <AiOutlineRise className='pr-1' />
            default:
                return type
        }
    }, [type])
    // define the Text for the objective
    // create switch case for each type of objective
    const Text = React.useMemo(() => {
        switch (type) {
            case 'collect':
                return 'Hand over '
            case 'kill':
                return 'Eliminate '
            case 'mark':
                return 'Place '
            case 'place':
                return 'Place '
            case 'pickup':
                return 'Obtain the '
            case 'skill':
                return (
                    <>
                        <p>Level up&nbsp;</p>
                        <Item itemName={target} />
                        <p>&nbsp;skill to level&nbsp;</p>
                    </>
                )
            case 'reputation':
                return 'Reach loyalty level'
            case 'key':
                return
            case 'warning':
                return
            default:
                // Uppercase the default
                return type?.charAt(0).toUpperCase() + (type as string).slice(1)
        }
    }, [target, type])

    const Target = React.useMemo(() => {
        switch (type) {
            case 'collect':
                return <Item className='pl-1' itemName={target} />
            case 'find':
                return (
                    <>
                        <Item className='pl-1' itemName={target} />
                        <p className='pl-1 text-red-600'>in raid</p>
                    </>
                )
            case 'key':
                return (
                    <>
                        <Location map={map} />
                        <Item itemName={target} />
                        <p>&nbsp;needed</p>
                    </>
                )
            case 'mark':
                return (
                    <>
                        <Item itemName={tool} className={' pr-1 pl-1'} />
                        <p>at</p>
                        <>&nbsp;</>
                        <Item itemName={target} />
                    </>
                )
            case 'place':
                return <Item itemName={target} className={'pl-1'} />
            case 'skill':
                return
            case 'warning':
                return <Item itemName={target} className={'pl-1'} />
            case 'reputation':
                return (
                    <>
                        <p>&nbsp; with </p>
                        <Giver className={'pl-1'} giver={target as number} />
                        <Trader giver={target as number} />
                    </>
                )

            default:
                return target
        }
    }, [map, target, tool, type])

    return (
        <div className='flex content-center items-center  p-2 mb-4 border-b-2 border-blue-500'>
            <div className='flex content-center items-center '>
                {/* <p className='border-2 border-blue-500'>{`Type: ${type}`}</p> */}
                {Icon}
                {Text} {''}
                {biggerThanOne} {''}
                {Target}
                {hint && <p>{hint}</p>}
                {using && ` with ${using.join(' & ')}`}
                <>&nbsp;</>
                <Location map={location} />
                {/* {map && { map }} */}
            </div>

            {gps && (
                <div className='flex content-center items-center'>
                    <GrMapLocation />
                    <p>F: {gps?.floor}</p>
                    <p>X: {gps?.topPercent}</p>
                    <p>Y :{gps?.leftPercent}</p>
                </div>
            )}

            {(have as number) > 1 && have}

            <p className='ml-1'>{`objective id = ${id}`}</p>

            {/* {map} */}
        </div>
    )
}
