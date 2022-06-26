import { QuestObjective } from '../Quest'
import React from 'react'
import maps from '../../tarkovdata/maps.json'

export const Location = ({ map }: QuestObjective) => {
    const Locations = (Object.keys(maps) as (keyof typeof maps)[]).map(
        (location) => {
            const l = maps[location]
            if (map === l.id) {
                return <span key={l.id}>&nbsp;on {l.locale.en}</span>
            }
        }
    )
    return <>{Locations}</>
}
