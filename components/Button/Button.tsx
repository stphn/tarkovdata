import React from 'react'

interface ButtonProps {
    children?: string | React.ReactNode
    icon?: React.ReactNode
    onClick: () => void
    className?: string
}

const buttonClasses =
    'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'

export const Button = ({ onClick, children, className, icon }: ButtonProps) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={buttonClasses + className}
        >
            <div className='flex flex-between'>
                <span className='mr-1'>{icon}</span>
                <span>{children}</span>
            </div>
        </button>
    )
}
