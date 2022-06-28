import classnames from 'classnames'
import React, { useContext } from 'react'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io'

import ThemeContext from '../../context/themeContext'
import styles from './Switch.module.scss'

export const Switch = () => {
    const { dark, toggle } = useContext(ThemeContext)

    return (
        <div className={styles.switch} onClick={() => toggle()}>
            <Sun
                className={
                    !dark
                        ? classnames(styles.switch__icon, styles.active)
                        : classnames(styles.switch__icon)
                }
            />
            <Moon
                className={
                    dark
                        ? classnames(styles.switch__icon, styles.active)
                        : classnames(styles.switch__icon)
                }
            />
        </div>
    )
}
