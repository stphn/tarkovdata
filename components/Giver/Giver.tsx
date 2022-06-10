import Image from 'next/image'
import React from 'react'

type GiverProps = {
    who: number
}

const Vendors = [
    {
        id: 0,
        name: 'Prapor',
    },

    {
        id: 1,
        name: 'Therapist',
    },
    {
        id: 2,
        name: 'Skier',
    },
    {
        id: 3,
        name: 'Peacekeeper',
    },
    {
        id: 4,
        name: 'Mechanic',
    },
    {
        id: 5,
        name: 'Ragman',
    },
    {
        id: 6,
        name: 'Jaeger',
    },
    {
        id: 7,
        name: 'Fence',
    },
]

export const Giver: React.FC<GiverProps> = ({ who }) => {
    const allVendors = Vendors.map((vendor) =>
        vendor.id === who ? (
            <div className=''>
                <Image
                    src={'/headshots/' + vendor.name + 'Headshot.jpg'}
                    alt={vendor.name}
                    width={24}
                    height={24}
                />
            </div>
        ) : null
    )

    return <>{allVendors}</>
}
