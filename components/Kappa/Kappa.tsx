import React from 'react'
import { AiFillAlert } from 'react-icons/ai'

interface KappaProps {
    nokappa?: boolean
}

export const Kappa = ({ nokappa }: KappaProps) =>
    nokappa ? (
        <p className=' flex  items-center'>
            <AiFillAlert className='mr-1 text-lime-500' />
            Not required for kappa
        </p>
    ) : (
        <p className=' flex  items-center'>
            <AiFillAlert className='mr-1 text-red-500' />
            Required for kappa
        </p>
    )
