import React, { useContext } from 'react'

import { Context } from '../../context/questContext'
import { Quest, QuestProps } from '../Quest'

export const Quests = () => {
    const { allQuests } = useContext(Context)

    const questElements = allQuests.map((quest: QuestProps, id: number) => {
        return <Quest key={id} {...quest} />
    })
    return <div>{questElements}</div>
}
