import Image from 'next/image'
import React from 'react'

const assets = 'https://storage.tarkov-database.com/assets/icons/1-1/128/'
//const assets = 'https://assets.tarkov-tools.com/'
interface Props {
    image?: string
    width?: number
    height?: number
}
export const ItemImage = ({ image, width = 56, height = 56 }: Props) => (
    <Image
        src={`${assets}${image}.png`}
        alt={image}
        width={width}
        height={height}
    />
)
