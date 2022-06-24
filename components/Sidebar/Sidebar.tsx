import { MenuItem } from '../MenuItem/MenuItem'
import React from 'react'
import { Switch } from '../Switch'
import classnames from 'classnames'
import styles from './Sidebar.module.scss'
import { useRouter } from 'next/router'

export const Sidebar = () => {
    const router = useRouter()

    const menu = [
        { title: 'Home', path: '/' },
        { title: 'Quests', path: '/quests' },
        { title: 'Hideout', path: '/hideout' },
        { title: 'Signup', path: '/signup' },
        { title: 'Signin', path: '/signin' },
        { title: 'Dashboard', path: '/dashboard' },
    ]

    return (
        <div className={styles.items}>
            <Switch />

            {menu.map((item, index) => {
                return (
                    <MenuItem
                        key={index}
                        path={item.path}
                        label={item.title}
                        className={
                            router.pathname === item.path
                                ? classnames(styles.item, styles.active)
                                : classnames(styles.item)
                        }
                    />
                )
            })}
        </div>
    )
}
