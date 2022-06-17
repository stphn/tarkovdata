// Externals
import React, { useEffect } from 'react'

// Styling
import Styles from './Content.module.scss'
import classnames from 'classnames'

type Props = {
    placement?: string
    onDisplay?: () => void
    onDismiss?: () => void
    children: React.ReactNode
}

const Content: React.FC<Props> = ({
    placement = 'bottom',
    onDisplay,
    onDismiss,
    children,
    ...otherProps
}) => {
    useEffect(() => {
        // called when mounted
        onDisplay && onDisplay()
        // called when unmounted
        return () => {
            onDismiss && onDismiss()
        }
    }, [onDismiss, onDisplay])

    return (
        <div
            role='tooltip'
            data-testid='tooltip-content'
            {...otherProps}
            className={classnames(Styles.container, Styles[placement])}
        >
            <span className={Styles.arrow}></span>
            {children}
        </div>
    )
}

Content.displayName = 'Content'

export default Content
