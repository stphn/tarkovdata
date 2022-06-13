import { Quest, QuestProps } from '../../components/Quest'

import React from 'react'
import allQuests from '../../tarkovdata/quests.json'

const QuestPost: React.FC<QuestProps> = ({ title, objectives, giver, exp }) => {
    return (
        <Quest title={title} objectives={objectives} giver={giver} exp={exp} />
    )
}

export function getStaticProps(context: any) {
    const { slug } = context.params
    const data = allQuests[slug]
    return {
        props: {
            ...data,
        },
    }
}

export function getStaticPaths() {
    const paths = allQuests.map((quest) => ({
        params: { slug: quest.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: false }
}

export default QuestPost
