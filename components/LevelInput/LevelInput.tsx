import React, { useEffect, useRef } from 'react'

import { useLocalStorage } from '@rehooks/local-storage'

import { Button } from '../Button'
import { Level } from '../Level'

// TODO change level group and logo
export const LevelInput = () => {
    const minLevel = 1
    const maxLevel = 65

    const inputRef = useRef<HTMLInputElement>(null)

    const [level, setLevel] = useLocalStorage<number>('level' || minLevel)

    function incrementLevel() {
        setLevel(level && level + 1)
        console.log(level)
    }

    function decrementLevel() {
        // decrement Level  but don't go below minLevel
        setLevel(level && level - 1 > minLevel ? level - 1 : minLevel)
    }
    function wipeLevel() {
        setLevel(1)
    }

    const handleChange = (e: any) => {
        setLevel(e.target.value as unknown as number)
        const value = Math.max(
            minLevel,
            Math.min(maxLevel, Number(e.target.value))
        )
        setLevel(value)
    }

    /*HACK rehydrate the level from localStorage fix
    https://www.joshwcomeau.com/react/the-perils-of-rehydration/ */
    const [hasMounted, setHasMounted] = React.useState(false)
    useEffect(() => {
        setHasMounted(true)
    }, [])
    if (!hasMounted) return null
    // END HACK

    return (
        <>
            <div className='flex items-center'>
                <Button onClick={decrementLevel}>-</Button>

                <input
                    ref={inputRef}
                    type='number'
                    value={level as number}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault()
                        }
                    }}
                    onChange={handleChange}
                    placeholder='level'
                    aria-label='level'
                />
                <Button onClick={incrementLevel}>+</Button>
            </div>
            <Level level={level} />
            <Button onClick={wipeLevel}>WIPE</Button>
        </>
    )
}
