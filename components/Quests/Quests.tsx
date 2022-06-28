import { Quest, QuestProps } from '../Quest'
import React, { useContext } from 'react'

import { Context } from '../../context/questContext'

export const Quests = () => {
    const { allQuests } = useContext(Context)

    const questElements = allQuests.map((quest: QuestProps, id: number) => {
        return <Quest key={id} {...quest} />
    })
    return <div>{questElements}</div>
}
