import React, { useEffect, useState } from 'react'

import { QuestProps } from '../components/Quest'
import allQuests from '../tarkovdata/quests.json'

const Context = React.createContext<any>(null)

function QuestContext({ children }: any) {
    return <Context.Provider value={{ allQuests }}>{children}</Context.Provider>
}

export { QuestContext, Context }
