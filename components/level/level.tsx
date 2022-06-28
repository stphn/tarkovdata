import React, { useEffect, useState } from 'react'
import {
    deleteFromStorage,
    useLocalStorage,
    writeStorage,
} from '@rehooks/local-storage'

import { Button } from '../Button'

const IncrememterWithButtons = () => {
    const startingLevel = 1
    const [display, setDisplay] = useState<string>('level' || startingLevel)

    const [level, setNum, deleteNum] = useLocalStorage<number>(
        'level' || startingLevel
    )

    const incrementLevel = () =>
        setNum(level !== null ? +level + 1 : startingLevel)

    let decrementLevel = () =>
        setNum(level !== null ? +level - 1 : startingLevel)

    if (level !== null && level < 2) decrementLevel = () => setNum(1)

    useEffect(() => {
        if ((level as number) <= 2) {
            setDisplay('reseted')
        }
        if (typeof level === 'number') {
            setDisplay(JSON.stringify(level))
        }
    }, [level])

    return (
        <div>
            <p>Level={display}</p>

            <Button onClick={() => incrementLevel()}>Increment</Button>
            <Button onClick={() => decrementLevel()}>decrement</Button>
            <Button onClick={deleteNum}>Delete</Button>
        </div>
    )
}

export const Level = () => <IncrememterWithButtons />
