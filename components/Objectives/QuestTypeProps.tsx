export interface QuestTypeProps {
    /**How many target */
    howmuch?: number
    /**The target */
    target?: string
    /**Using what kind of tool */
    tool?: string
    /**Gives some hint */
    hint?: string
    /**The location id */
    map?: number
    /**The name of the map */
    mapName?: number
    id?: number
    /**The type of the objective
     * 'collect' | 'find' | 'kill' | 'mark' | 'key'
     */
    type?: 'collect' | 'find' | 'kill' | 'mark' | 'key'
    key: number
    giver?: number
    className?: string

    objectives?: [
        {
            /**The kind of quest */
            type: string
            /**The Target of the Quest */
            target: string
            tool: string
            hint: string
            /**The amount of target*/
            number: number
            location: number
            id: number
        }
    ]
}
