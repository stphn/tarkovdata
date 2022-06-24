import { Quest, QuestProps } from '../Quest/Quest'
import React, { useContext } from 'react'

import { Context } from '../../context/questContext'
import useLocalStorage from '@rehooks/local-storage'

export const Quests = () => {
    const { allQuests } = useContext(Context)
    const [level] = useLocalStorage<number>('level' || 1)

    const questElements = allQuests.map((quest: QuestProps) => {
        if (level && level >= quest.require.level) {
            return (
                <Quest
                    key={quest.id}
                    title={quest.title}
                    objectives={quest.objectives}
                    giver={quest.giver}
                    exp={quest.exp}
                    wiki={quest.wiki}
                    locales={quest.locales}
                    require={quest.require}
                    id={quest.id}
                    nokappa={quest.nokappa}
                />
            )
        }
    })
    return <div>{questElements}</div>
}
