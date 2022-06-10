import React from 'react'
import axios from 'axios'
import classNames from 'classnames'
import styles from './Hideout.module.scss'

const baseURL = 'https://tarkovtracker.github.io/tarkovdata/hideout.json'

export const Hideout = () => {
    const [stations, setStations] = React.useState<any>(null)
    const [modules, setModules] = React.useState<any>(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setStations(response.data.stations)
            setModules(response.data.modules)
            //console.log(response.data.stations)
        })
    }, [])

    if (!stations || !modules) return null

    const Stations = stations.map((station: any) => {
        return (
            <div
                key={station.id}
                className={classNames(styles.card, styles.active)}
            >
                <h2 className={styles.title}>{station.locales.en}</h2>

                <p className={styles.description}>id:{station.id}</p>
                <p className={styles.description}>{station.imgSource}</p>
                <p className={styles.description}>
                    Requirement: LVL {station.function}
                </p>
            </div>
        )
    })

    const Modules = modules.map((module: any) => {
        return (
            <div
                key={module.id}
                className={classNames(styles.card, styles.active)}
            >
                <h2 className={styles.title}>{module.module}</h2>

                <p className={styles.description}>{module.level}</p>
                <p className={styles.description}>
                    Station ID: {module.stationId}
                </p>
            </div>
        )
    })

    return (
        <>
            {Stations}
            {Modules}
        </>
    )
}
