import React from 'react'
import logo from '../../../assets/images/logo.svg'
import textlogo from '../../../assets/images/logo-white.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='absolute top-0 left-0 w-full'>
            <Link to="/">
                <img src={logo} alt="Salon"
                    className="hidden absolute left-1/2 -translate-x-1/2 -top-3.5 lg:block"
                />

                <img
                    src={textlogo}
                    alt="Salon"
                    className="block lg:hidden w-36 sm:w-40 md:w-44 h-auto ml-4 mt-4"
                />
            </Link>
        </div>
    )
}

export default Logo