import { Giver } from '../Giver'
import { Item } from '../Item'
import { ItemImage } from '../ItemImage'
import { Location } from '../Location'
import React from 'react'
import styles from './Quest.module.scss'

export type QuestProps = {
    id?: number
    objectives?: [
        {
            type: string
            target: string
            number: number
            location: number
            id: number
        }
    ]
    title?: string
    wiki?: string
    unlocks?: string
    exp?: number
    giver: number
    require?: { level: number; quests: number }
}

export const Quest: React.FC<QuestProps> = ({
    title,
    objectives,
    giver,
    wiki,
    exp,
}) => {
    const allObjectives = objectives?.map((obj, i) => {
        if (obj.type === 'collect') {
            return (
                <div key={i}>
                    Hand over {obj.number}
                    <Item itemName={obj.target} />
                    <Location mapName={obj.location} />
                    <ItemImage image={obj.target} />
                </div>
            )
        } else if (obj.type === 'key') {
            return (
                <div key={i}>
                    {obj.number}
                    <Item itemName={obj.target} />
                    <span> needed </span>
                    <Location mapName={obj.location} />
                    <ItemImage image={obj.target} />
                </div>
            )
        }
        if (obj.type === 'kill') {
            return `Eliminate  ${obj.number} ${obj.target}`
        }
        if (obj.type === 'find') {
            return (
                <div key={i}>
                    Find {obj.number}
                    <Item itemName={obj.target} />
                    <Location mapName={obj.location} />
                    <ItemImage image={obj.target} />
                </div>
            )
        }
        if (obj.type === 'mark') {
            return (
                <div key={i}>
                    Mark {obj.number} {obj.target}
                    <Item itemName={obj.target} />
                    <Location mapName={obj.location} />
                </div>
            )
        }
    })
    return (
        <div className={styles.quest}>
            <div className={styles.quest__header}>
                <Giver giver={giver} />
                <a className={styles.quest__link} href={wiki}>
                    {title}
                </a>
            </div>
            <p>{exp && `${(exp / 100).toFixed(3)} XP`}</p>

            {allObjectives}
        </div>
    )
}
