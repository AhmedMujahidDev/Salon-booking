import React from 'react'
import FooterTop from '../Footer/FooterTop'
import FooterMain from '../Footer/FooterMain'
import FooterBottom from '../Footer/FooterBottom'

const Footer = () => {
  return (
    <footer className='bg-foreground text-primary-foreground'>
        <FooterTop/>
         <FooterMain />
         <FooterBottom />
    </footer>
  )
}

export default Footer