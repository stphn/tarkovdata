import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Hideout } from '../components/Hideout'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Quest: NextPage = () => {
    return (
        <div className={styles.container}>
            <Heading
                title='Tarkov Hideout'
                content='List of all Escape from Tarkov quests'
            />

            <main className={styles.main}>
                <h1>Hideout:</h1>
                <div className={styles.grid}>
                    <Hideout />
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Quest
