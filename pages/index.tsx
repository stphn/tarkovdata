import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div>
            <Heading title='Welcome to Tarkov' content='Tarkov data sources' />
            <main>
                <h1>Home:</h1>
                <div>Hello world</div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
