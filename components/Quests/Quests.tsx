import React, { useContext } from 'react'

import { Context } from '../../context'
import { Quest } from '../Quest/Quest'

export const Quests = () => {
    const { allQuests } = useContext(Context)

    const questElements = allQuests.map((quest: any, i: number) => (
        <Quest key={quest.id} quest={quest} />
    ))
    return <div>{questElements}</div>
}
