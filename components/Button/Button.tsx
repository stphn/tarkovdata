import React from 'react'

interface ButtonProps {
    children: string | React.ReactNode
    onClick: () => void
    className?: string
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
    return (
        <button
            type='button'
            className={`py-4
   px-10
   lg:px-8
   xl:px-10
   inline-flex
   items-center
   justify-center
   text-center text-primary text-base
   border border-primary
   rounded-md
   hover:bg-primary hover:border-primary hover:text-white
   transition ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
