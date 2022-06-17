import React, { useEffect, useState } from 'react'

import { QuestProps } from '../components/Quest'
import quests from '../tarkovdata/quests.json'

const Context = React.createContext<any>(null)

const withCompletion: any = quests.map((quest) => {
    const completion = {
        isCompleted: false,
    }
    Object.assign(quest, completion)
    return quest
})

function QuestContext({ children }: any) {
    const [allQuests, setAllQuests] = useState(withCompletion)
    const [completion, setCompletion] = useState(false)
    // keeps state of the current completion

    function toggleCompleted(id: number) {
        const updatedArr: QuestProps = allQuests.map((quest: QuestProps) => {
            //console.log(quest.id, id)
            const lastCompletion = window.localStorage.getItem(
                `${JSON.stringify(id)}`
            )
            if (quest.id === id) {
                if (lastCompletion === 'true') {
                    setCompletion(true)
                } else {
                    setCompletion(false)
                }

                window.localStorage.setItem(
                    `${JSON.stringify(id)}`,
                    JSON.stringify(!quest.isCompleted)
                )

                return { ...quest, isCompleted: !quest.isCompleted }
            }
            return quest
        })

        setAllQuests(updatedArr)
    }

    return (
        <Context.Provider value={{ allQuests, toggleCompleted }}>
            {children}
        </Context.Provider>
    )
}

export { QuestContext, Context }
