import React from 'react'

import levels from '../../tarkovdata/levels.json'

interface LevelProps {
    level?: number | null
}

export const Level = ({ level }: LevelProps) => {
    const Levels = (Object.keys(levels) as (keyof typeof levels)[]).map(
        (lvl, i) => {
            // index start with 1
            const index = i + 1
            const Level = levels[lvl]

            if (level === index) {
                return (
                    <div key={i}>
                        <p>{Level.group}</p>
                        <p>{Level.exp}</p>
                    </div>
                )
            }
        }
    )
    return <>{Levels}</>
}
