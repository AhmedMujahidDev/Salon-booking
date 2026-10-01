import React from 'react'
import logo from '../../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='absolute left-1/2 -translate-x-1/2 -top-3.5'>
            <Link to="/">
                <img src={logo} alt="Salon" />
            </Link>
        </div>
    )
}

export default Logo