import { Giver } from '../Giver'
import Image from 'next/image'
import React from 'react'
import classNames from 'classnames'
import styles from './Quest.module.scss'

export type QuestProps = {
    quest: {
        id: number
        objectives: [
            {
                type: string
                target: string
                number: number
                location: number
                id: number
            }
        ]
        title: string
        wiki: string
        unlocks: string
        exp: number
        giver: number
        require: { level: number; quests: number }
    }
}

const assets = 'https://storage.tarkov-database.com/assets/icons/1-1/128/'

export const Quest: React.FC<QuestProps> = ({ quest }: QuestProps) => {
    const allObjectives = quest.objectives.map((obj, i) => {
        const handleNameDisplay = () => {
            if (obj.type === 'kill') {
                return `Eliminate  ${obj.number} ${obj.target}`
            } else if (obj.type === 'collect') {
                return (
                    <>
                        <span>Hand over {obj.number} </span>
                        <Image
                            src={`${assets}${obj.target}.png`}
                            alt={obj.target}
                            width={56}
                            height={56}
                        />
                    </>
                )
            } else return obj.type
        }

        return <div key={i}>{handleNameDisplay()}</div>
    })
    return (
        <div className={styles.quest}>
            <div className={styles.quest__header}>
                <Giver who={quest.giver} />
                <p>{quest.title}</p>
            </div>

            <p>{quest.exp}</p>
            <p>{allObjectives}</p>
        </div>
    )
}
