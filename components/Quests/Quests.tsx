import { Quest, QuestProps } from '../Quest/Quest'
import React, { useContext } from 'react'

import { Context } from '../../context/questContext'

export const Quests = () => {
    const { allQuests } = useContext(Context)

    const questElements = allQuests.map((quest: QuestProps) => {
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
    })
    return <div>{questElements}</div>
}
