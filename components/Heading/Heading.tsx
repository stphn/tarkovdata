import Head from 'next/head'

interface HeaderProps {
    title: string
    content: string
}

export const Heading = ({ title, content }: HeaderProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={content} />
            <link rel='icon' href='/favicon.ico' />
        </Head>
    )
}
