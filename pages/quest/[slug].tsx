import { Quest, QuestProps } from '../../components/Quest'

import React from 'react'
import quests from '../../tarkovdata/quests.json'

const withCompletion: any = quests.map((quest) => {
    const completion = {
        isCompleted: false,
    }
    Object.assign(quest, completion)
    return quest
})

const QuestPost = ({
    locales,
    objectives,
    giver,
    exp,
    wiki,
    require,
    nokappa,
    title,
    id,
    turnin,
    unlocks,
    reputation,
    reputationFailure,
    alternatives,
    gameId,
}: QuestProps) => {
    return (
        <Quest
            key={id}
            title={title}
            objectives={objectives}
            giver={giver}
            exp={exp}
            wiki={wiki}
            locales={locales}
            require={require}
            id={id}
            nokappa={nokappa}
            turnin={turnin}
            unlocks={unlocks}
            reputation={reputation}
            reputationFailure={reputationFailure}
            alternatives={alternatives}
            gameId={gameId}
        />
    )
}

export function getStaticProps(context: any) {
    const { slug } = context.params
    const data = withCompletion[slug]
    return {
        props: {
            ...data,
        },
    }
}

export function getStaticPaths() {
    const paths = withCompletion.map((quest: any) => ({
        params: { slug: quest?.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: false }
}

export default QuestPost
