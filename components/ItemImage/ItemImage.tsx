import Image from 'next/image'
import React from 'react'
import items from '../../tarkovdata/items.en.json'
const assets = 'https://storage.tarkov-database.com/assets/icons/1-1/128/'
type Props = {
    image: string
}
export const ItemImage: React.FC<Props> = ({ image }) => (
    <Image src={`${assets}${image}.png`} alt={image} width={56} height={56} />
)
