import React from 'react'
import breadcrumbg from "../../assets/images/breadcrumb-bg.jpg"
import { ChevronRight, House } from 'lucide-react'

const Banner = ({
    title,
    breadcrumbs = [],
}) => {
    return (
        <section className='relative h-[600px] bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${breadcrumbg})`,
            }}>
            <div className='absolute inset-0' />
            <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
                <div className='flex items-center gap-2 rounded-sm bg-black/20 px-4 py-3 text-sm font-semibold text-white/80 md:text-base'>

                    <House size={17} className='hover:text-primary' />

                    {breadcrumbs.map((item, index) => (
                        <React.Fragment
                            key={index}>
                            <span className='cursor-pointer hover:text-primary'>{item}</span>

                            {index < breadcrumbs.length - 1 && (
                                <ChevronRight size={18} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <h1 className='mt-7 font-heading text-5xl font-black text-white md:text-6xl'>
                    {title}
                </h1>
            </div>
        </section>
    )
}

export default Banner