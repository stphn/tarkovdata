import React, { useEffect, useState } from 'react'
import { GiTrophy } from 'react-icons/gi'

import useLocalStorage from '@rehooks/local-storage'

import { Button } from '../Button'
import { Giver } from '../Giver'
import { Kappa } from '../Kappa'
import { Objective } from '../Objectives'
import { QuestProps } from './QuestProps'

interface QuestPropsExtended extends QuestProps {
    isVisible?: boolean
}

export const Quest = ({
    objectives,
    giver,
    wiki,
    exp,
    locales,
    require,
    nokappa,
    id,
    isVisible,
}: QuestPropsExtended) => {
    const [complete, setComplete] = useState(false)
    const [hideQuests, setHideQuests] = useState(true)
    const [level] = useLocalStorage<number>('level' || 1)

    function handleClick() {
        // invert the complete state
        setComplete(!complete)
        // set the item from the local storage
        localStorage.setItem(`is ${id} completed?`, JSON.stringify(!complete))
    }

    useEffect(() => {
        // get the value of the key id from localStorage
        const localStorageID = localStorage.getItem(`is ${id} completed?`)
        if (localStorageID === 'true') {
            setComplete(true)
        }
    }, [id])

    useEffect(() => {
        if ((level as number) <= require.level) {
            setHideQuests(true)
        }
        if ((level as number) >= require.level) {
            setHideQuests(false)
        }
    }, [level, require.level])

    const ObjectiveTypes = objectives?.map((obj, id) => {
        return <Objective key={id} {...obj} />
    })

    return (
        <>
            {/* only show the quest if its required level is equal or less than actual level */}
            {!hideQuests || isVisible ? (
                <div
                    className={`grid grid-rows-3 grid-flow-col gap-4 rounded-lg p-6 m-4  border-2 border-solid border-slate-900"${
                        complete
                            ? ' bg-gray-100 shadow-base'
                            : 'bg-white-400 text-slate-900 shadow-lg '
                    }`}
                >
                    <div className='row-span-3'>
                        <div className='flex items-center'>
                            <Giver className='mr-1' giver={giver} />
                            <a
                                href={wiki}
                                className={
                                    'text-blue-600 visited:text-purple-600 hover:text-purple-600 text-2xl'
                                }
                            >
                                &nbsp;{locales && locales.en}
                            </a>
                        </div>
                        <Kappa nokappa={nokappa} />

                        <p className='flex items-center'>
                            <GiTrophy className='mr-1' />
                            {exp && `${(exp / 100).toFixed(3)} XP`}
                        </p>

                        <div>
                            <p>
                                You must be level
                                <strong> {require && require.level}</strong> to
                                start this quest.
                            </p>

                            <p> {`Completed: ${JSON.stringify(complete)}`}</p>
                        </div>
                    </div>

                    <div className='col-span-2'>
                        <Button
                            icon={<GiTrophy />}
                            onClick={() => handleClick()}
                        >
                            Complete
                        </Button>
                    </div>
                    <div className='row-span-2 col-span-2'>
                        {ObjectiveTypes}
                    </div>
                </div>
            ) : null}
        </>
    )
}
