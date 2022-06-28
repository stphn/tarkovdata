import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import { Hideout } from '../components/Hideout'
import type { NextPage } from 'next'

const Quest: NextPage = () => {
    return (
        <div>
            <Heading
                title='Tarkov Hideout'
                content='List of all Escape from Tarkov quests'
            />

            <main>
                <h1>Hideout:</h1>

                <Hideout />
            </main>

            <Footer />
        </div>
    )
}

export default Quest
