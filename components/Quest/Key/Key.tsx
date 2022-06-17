import { ImKey } from 'react-icons/im'
import { Item } from '../../Item'
import { ItemImage } from '../../ItemImage'
import { Location } from '../../Location'
import React from 'react'

interface Props {
    howmuch: number
    target: string
    map: number
}

export const Key = ({ howmuch, target, map }: Props) => {
    return (
        <div className='objective'>
            <ImKey /> <Item itemName={target} />
            <span>{howmuch > 1 ? howmuch : ''}</span>
            <span> needed </span>
            <Location mapName={map} />
            <ItemImage image={target} />
        </div>
    )
}
