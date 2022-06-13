import React from 'react'
import maps from '../../tarkovdata/maps.json'

type Props = {
    mapName: number
}
export const Location: React.FC<Props> = ({ mapName }) => {
    const Locations = (Object.keys(maps) as (keyof typeof maps)[]).map(
        (location) => {
            const l = maps[location]
            if (mapName === l.id) {
                return <span key={l.id}> on {l.locale.en}</span>
            }
        }
    )
    return <>{Locations}</>
}
