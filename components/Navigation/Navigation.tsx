import Link from 'next/link'
export const Navigation = () => {
    return (
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/quests'>
                    <a>Quests</a>
                </Link>
            </li>
            <li>
                <Link href='/hideout'>
                    <a>Hideout</a>
                </Link>
            </li>
        </ul>
    )
}
