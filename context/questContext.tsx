import React from 'react'
import allQuests from '../tarkovdata/quests.json'
const Context = React.createContext<any>(null)

//console.log(questsData)

function QuestContext({ children }: any) {
    // function toggleFavorite(id: number) {
    //     const updatedArr = allQuests?.map((quest) => {
    //         if (allQuests.id === id) {
    //             console.log(id)
    //             console.log(!allQuests.isFavorite)
    //             return { ...quest, isFavorite: !quest.isFavorite }
    //         }
    //         return quest
    //     })

    //     setAllQuests(updatedArr)
    // }

    return <Context.Provider value={{ allQuests }}>{children}</Context.Provider>
}

export { QuestContext, Context }
