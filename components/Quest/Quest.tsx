import { Collect, Find, Key, Kill, Mark } from './index'
import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../context/questContext'
import { GiTrophy } from 'react-icons/gi'
import { Giver } from '../Giver'
import classNames from 'classnames'
import styles from './Quest.module.scss'

export interface QuestProps {
    id?: number
    objectives?: [
        {
            type: string
            /**The Target of the Quest */
            target: string
            tool: string
            hint: string
            /**The amount of target*/
            number: number
            location: number
            id: number
        }
    ]
    locales?: { en: string; ru: string; cs: string }
    title?: string
    wiki?: string
    unlocks?: string
    exp?: number
    giver: number
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

    function handleClick() {
        // toggleCompleted(id)
        setComplete(!complete)

        window.localStorage.setItem(
            // set the key to the id of the quest
            JSON.stringify(id),
            // set the value to the opposite of the current value
            JSON.stringify(!complete)
        )
    }

    useEffect(() => {
        const retrieve = window.localStorage.getItem(JSON.stringify(id))
        if (retrieve === 'true') {
            setComplete(true)
        }
    }, [id])

    const allObjectives = objectives?.map((obj) => {
        if (obj.type === 'collect') {
            return (
                <Collect
                    key={obj.id}
                    howmuch={obj.number}
                    target={obj.target}
                    map={obj.location}
                />
            )
        }
        if (obj.type === 'key') {
            return (
                <Key
                    key={obj.id}
                    howmuch={obj.number}
                    target={obj.target}
                    map={obj.location}
                />
            )
        }
        if (obj.type === 'kill') {
            return (
                <Kill
                    key={obj.id}
                    howmuch={obj.number}
                    target={obj.target}
                    map={obj.location}
                />
            )
        }
        if (obj.type === 'find') {
            return (
                <Find
                    key={obj.id}
                    howmuch={obj.number}
                    target={obj.target}
                    map={obj.location}
                />
            )
        }
        if (obj.type === 'mark') {
            return (
                <Mark
                    key={obj.id}
                    howmuch={obj.number}
                    target={obj.target}
                    tool={obj.tool}
                    hint={obj.hint}
                    map={obj.location}
                />
            )
        }
    })
    return (
        <div
            onClick={() => handleClick()}
            className={
                complete
                    ? classNames(styles.quest, styles.inactive)
                    : classNames(styles.quest)
            }
        >
            <div className={styles.quest__header}>
                <Giver className={styles.quest__giver} giver={giver} />

                <a href={wiki} className={styles.quest__link}>
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
            {allObjectives}
            <button onClick={() => handleClick()}>toggleCompleted</button>
        </div>
    )
}
