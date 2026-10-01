import React from 'react'

const Header = ({ heading, detail, dark=false }) => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <h2 className={`font-bold text-4xl ${
                dark ? 'text-white' : 'text-foreground'
            }`}>
                {heading}
            </h2>

            <p className={`max-w-2xl mt-3 ${
                 dark ? 'text-white' : 'text-gray-600'
            }`}>{detail}</p>
        </div>
    )
}

export default Header