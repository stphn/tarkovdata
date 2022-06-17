// Externals
import React, { createElement } from 'react'

type Props = {
    as: string
    children: React.ReactNode
}

const Trigger: React.FC<Props> = ({
    as = 'button',
    children,
    ...otherProps
}) => {
    return createElement(as, { ...otherProps }, children)
}
Trigger.displayName = 'Trigger'
export default Trigger
