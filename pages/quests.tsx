import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import type { NextPage } from 'next'
import { QuestContext } from '../context'
import { Quests } from '../components/Quests'

const Quest: NextPage = () => {
    return (
        <div>
            <Heading
                title='Tarkov Quests'
                content='List of all Escape from Tarkov quests'
            />

            <h1>Quests:</h1>
            <QuestContext>
                <Quests />
            </QuestContext>

            <Footer />
        </div>
    )
}

export default Quest
