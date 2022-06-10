import { Giver } from '../Giver'
import Image from 'next/image'
import { QuestContext } from '../../context/questContext'
import React from 'react'
import axios from 'axios'
import classNames from 'classnames'
import styles from './Quest.module.scss'

const baseURL = 'https://tarkovtracker.github.io/tarkovdata/quests.json'
const assets = 'https://storage.tarkov-database.com/assets/icons/1-1/128/'

type quest = {
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

export const Quests = () => {
    const [quests, setQuests] = React.useState<any>(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setQuests(response.data)
            //console.log(response.data)
        })
    }, [])

    if (!quests) return null

    const allQuests = quests.map((quest: quest) => {
        const allObjectives = quest.objectives.map((obj, i) => {
            return (
                <div key={i}>
                    <span>{obj.type} </span>
                    <span>{obj.number} </span>
                    <span>{obj.target} </span>

                    {assets + obj.target + '.png'}

                    <Image
                        src={assets + obj.target + '.png'}
                        alt={obj.target}
                        width={128}
                        height={128}
                    />
                </div>
            )
        })

        return (
            <div
                key={quest.id}
                className={classNames(styles.card, styles.active)}
            >
                <Giver who={quest.giver} />
                <h4 className={styles.title}>
                    <a
                        href={quest.wiki}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {quest.title}
                    </a>
                </h4>

                <p className={styles.description}>Reward: {quest.exp} XP</p>
                <p className={styles.description}>
                    Unlocks:
                    <Image
                        src={assets + quest.unlocks + '.png'}
                        alt={quest.unlocks}
                        width={128}
                        height={128}
                    />
                </p>
                <p className={styles.description}>
                    Requirement: LVL {quest.require.level}
                </p>

                {allObjectives}
            </div>
        )
    })

    return allQuests
}
