import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import type { NextPage } from 'next'
import { QuestContext } from '../context'
import { Quests } from '../components/Quests'
import styles from '../styles/Home.module.css'

const Quest: NextPage = () => {
    return (
        <div className={styles.container}>
            <Heading
                title='Tarkov Quests'
                content='List of all Escape from Tarkov quests'
            />

            <main className={styles.main}>
                <h1>Quests:</h1>
                <QuestContext>
                    <Quests />
                </QuestContext>
            </main>

            <Footer />
        </div>
    )
}

export default Quest
