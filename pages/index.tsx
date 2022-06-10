import { Footer } from '../components/Footer'
import { Heading } from '../components/Heading'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Heading title='Welcome to Tarkov' content='Tarkov data sources' />

            <main className={styles.main}>
                <h1>Home:</h1>
                <div className={styles.grid}>Hello world</div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
