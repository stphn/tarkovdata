import React from 'react'
import axios from 'axios'

const baseURL = 'https://tarkovtracker.github.io/tarkovdata/quests.json'

const Context = React.createContext<any>([])

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

function QuestContext({ children }: any) {
    const [allQuests, setAllQuests] = React.useState<any>([])

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setAllQuests(response.data)
            console.log(response.data)
        })
    }, [])

    //if (!setAllQuests) return 'error'

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
