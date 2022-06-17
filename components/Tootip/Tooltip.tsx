import React, { useRef, useState } from 'react'

import Styles from './Tooltip.module.scss'

export type Props = {
    id: string
    children: React.ReactNode
}

const Tooltip: React.FC<Props> = ({ id, children }) => {
    const divRef = useRef<null | HTMLDivElement>(null)
    const [isHovered, setState] = useState(false)

    let trigger = null
    let content = null

    React.Children.forEach(children, (child: any) => {
        if (!child.type) {
            return
        }

        if (child.type.displayName === 'Trigger') {
            trigger = React.cloneElement(child, {
                'aria-describedby': id,
                'data-testid': 'tooltip-button',
            })
        }

        if (child.type.displayName === 'Content') {
            content = React.cloneElement(child, { id })
        }
    })

    return (
        <div
            className={Styles.container}
            ref={divRef}
            onMouseEnter={() => setState(true)}
            onMouseLeave={() => setState(false)}
        >
            {trigger}
            {isHovered && content}
        </div>
    )
}

export default Tooltip
