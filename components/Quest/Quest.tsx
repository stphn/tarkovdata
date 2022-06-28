import React, { useEffect, useState } from 'react'

import { GiTrophy } from 'react-icons/gi'
import { Giver } from '../Giver'
import { Objective } from '../Objectives/Objective'
import { QuestProps } from './QuestProps'
import styles from './Quest.module.scss'
import useLocalStorage from '@rehooks/local-storage'

export const Quest = ({
    objectives,
    giver,
    wiki,
    exp,
    locales,
    require,
    nokappa,
    id,
}: QuestProps) => {
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
        // create a switch statement to handle the different types of objectives
        return <Objective key={id} {...obj} />
    })

    return (
        <>
            {/* only show the quest if its required level is equal or less than
            actual level */}
            {!hideQuests && (
                <div
                    onClick={() => handleClick()}
                    className={
                        complete
                            ? ' bg-slate-300 text-white rounded-lg m-4 p-6 shadow-base border '
                            : 'bg-white-400 text-slate-900 rounded-lg p-6 m-4 shadow-lg border-2 border-solid border-slate-900'
                    }
                >
                    <div className={styles.quest__header}>
                        <Giver className={styles.quest__giver} giver={giver} />

                        <a
                            href={wiki}
                            className={
                                'text-blue-600 visited:text-purple-600 hover:text-purple-600 text-2xl'
                            }
                        >
                            &nbsp;{locales && locales.en}
                        </a>
                    </div>
                    <p className='flex content-center items-center'>
                        <GiTrophy className='mr-1' />
                        {exp && `${(exp / 100).toFixed(3)} XP`}
                    </p>
                    <p>Requires level {require && require.level}</p>

                    <p>{nokappa && `Kappa: ${JSON.stringify(nokappa)}`}</p>
                    <p>{`Completed: ${JSON.stringify(complete)}`}</p>
                    {ObjectiveTypes}
                    <button
                        className=' py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2'
                        onClick={() => handleClick()}
                    >
                        toggleCompleted
                    </button>
                </div>
            )}
        </>
    )
}
