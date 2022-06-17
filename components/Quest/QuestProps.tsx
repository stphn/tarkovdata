export interface QuestProps {
    id?: number
    objectives?: [
        {
            type: string
            target: string
            tool: string
            hint: string
            number: number
            location: number
            id: number
        }
    ]
    locales?: { en: string; ru: string; cs: string }
    title?: string
    wiki?: string
    unlocks?: string
    exp?: number
    giver: number
    require: { level: number; quests: [number] }
}
