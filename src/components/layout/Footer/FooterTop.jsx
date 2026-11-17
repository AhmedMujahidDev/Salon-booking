import React from 'react'
import { footerTop } from '../Footer/FooterData'
const FooterTop = () => {
  return (
    <section className='pt-10 sm:pt-14 lg:pt-16'>
        <div className='container-custom'>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {footerTop.map((item, index) =>{
                    const Icon =item.icon;
                    return(
                        <div key={index} className='flex items-center gap-5'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary'>
                                <Icon className='h-7 w-7 text-primary-foreground'/>
                            </div>
                            <div>
                                <h3 className='text-fluid-xl font-bold text-primary-foreground'>{item.title}</h3>
                                <p className='mt-1 text-primary-foreground/70'>{item.subtitle}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default FooterTop