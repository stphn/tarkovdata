import { Quest, QuestProps } from '../Quest/Quest'
import React, { useContext } from 'react'

import { Context } from '../../context'

export const Quests = () => {
    const { allQuests } = useContext(Context)

    const questElements = allQuests.map((quest: QuestProps) => (
        <Quest
            key={quest.id}
            title={quest.title}
            objectives={quest.objectives}
            giver={quest.giver}
            exp={quest.exp}
        />
    ))
    return <div>{questElements}</div>
}
