import { Collect, Find, Key, Kill, Mark } from './index'
import React, { useContext, useEffect } from 'react'

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
    isCompleted?: boolean
}

export const Quest = ({
    objectives,
    giver,
    wiki,
    exp,
    locales,
    require,
    nokappa,
    isCompleted,
    id,
}: QuestProps) => {
    const { toggleCompleted } = useContext(Context)

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
            className={
                isCompleted
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
            <p>
                <GiTrophy />
                {exp && `${(exp / 100).toFixed(3)} XP`}
            </p>
            <p>Requires level {require && require.level}</p>
            <p>{JSON.stringify(nokappa)}</p>
            <p>{`Completed: ${JSON.stringify(isCompleted)}`}</p>

            {allObjectives}
            <button onClick={() => toggleCompleted(id)}>toggleCompleted</button>
        </div>
    )
}
