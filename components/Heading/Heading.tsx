import Head from 'next/head'

type HeaderProps = {
    title: string
    content: string
}

export const Heading: React.FC<HeaderProps> = ({ title, content }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={content} />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    )
}
