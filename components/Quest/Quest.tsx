import { Collect, Find, Key, Kill, Mark } from '../Objectives'
import React, { useEffect, useState } from 'react'

import { GiTrophy } from 'react-icons/gi'
import { Giver } from '../Giver'
import { QuestTypeProps } from '../Objectives/QuestTypeProps'
import styles from './Quest.module.scss'
import useLocalStorage from '@rehooks/local-storage'

export interface QuestProps {
    id?: number
    objectives?: QuestTypeProps[]
    locales?: { en: string; ru: string; cs: string }
    title?: string
    wiki?: string
    unlocks?: string
    exp?: number
    giver: number
    /**Required for kappa?*/
    nokappa?: boolean
    require: { level: number; quests: [number] }
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
}: QuestProps) => {
    const [complete, setComplete] = useState(false)

    ///const hide = level && require.level > parseInt(level)

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

    const ObjectiveTypes = objectives?.map((obj, id) => {
        // create a switch statement to handle the different types of objectives
        switch (obj.type) {
            // if the type is 'collect'
            case 'collect':
                return <Collect {...obj} key={id} />
            // if the type is 'find'
            case 'find':
                return <Find {...obj} key={id} />
            // if the type is 'kill'
            case 'kill':
                return <Kill {...obj} key={id} />
            // if the type is 'mark'
            case 'mark':
                return <Mark {...obj} key={id} />
            // if the type is 'key'
            case 'key':
                return <Key {...obj} key={id} />
            default:
                return null
        }
    })
    // only return the quest if it is not hidden

    return (
        <div
            onClick={() => handleClick()}
            className={
                complete
                    ? ' bg-slate-700 text-white rounded-lg m-4 p-6 shadow-lg border '
                    : 'bg-slate-400 text-slate-50 rounded-lg p-6 m-4 shadow-base border-2 border-solid border-slate-900'
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
            <p className={styles.quest__trophy}>
                <GiTrophy />
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
    )
}
