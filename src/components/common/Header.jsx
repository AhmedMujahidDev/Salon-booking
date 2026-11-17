import React from 'react'

const Header = ({ heading, detail, dark=false }) => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <h2 className={`font-bold text-fluid-4xl ${
                dark ? 'text-primary-foreground' : 'text-foreground'
            }`}>
                {heading}
            </h2>

            <p className={`max-w-2xl mt-3 ${
                 dark ? 'text-primary-foreground' : 'text-text-secondary'
            }`}>{detail}</p>
        </div>
    )
}

export default Header