export interface QuestProps {
    /**The id of the quest */
    id: number
    /**The optional requirements before completing the quest */
    require: QuestRequire
    /**The trader id who gave that quest */
    giver: number
    turnin: number
    title: string
    locales: {
        en: string
        ru: string
        cs: string
    }
    wiki: string
    exp: number
    nokappa?: boolean
    unlocks: string[]
    reputation: QuestReputation[]
    reputationFailure: QuestReputation[]
    objectives: QuestObjective[]
    alternatives: number[]
    gameId: string
}
export interface QuestObjective {
    /**The kind of quest */
    type?: string
    /**The Target of the Quest */
    target?: string
    tool?: string
    hint?: string
    have?: number
    with?: string[]
    /**The amount of target*/
    number?: number
    location?: number
    id?: number
    gps?: {
        leftPercent: number
        topPercent: number
        floor: string
    }
    map?: number
}

interface QuestReputation {
    trader: number
    rep: number
}

interface QuestRequire {
    level: number
    quests: number[]
}
interface QuestReputationFailure {
    trader: number
    rep: number
}
