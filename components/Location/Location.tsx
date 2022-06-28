import React from 'react'

import maps from '../../tarkovdata/maps.json'
import { QuestObjective } from '../Quest'

export const Location = ({ map }: QuestObjective) => {
    const Locations = (Object.keys(maps) as (keyof typeof maps)[]).map(
        (location) => {
            const l = maps[location]
            if (map === l.id) {
                return <p key={l.id}>on {l.locale.en}</p>
            }
        }
    )
    return <>{Locations}</>
}
