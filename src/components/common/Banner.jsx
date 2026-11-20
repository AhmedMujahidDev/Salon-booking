import React from 'react'
import breadcrumbg from "../../assets/images/breadcrumb-bg.jpg"
import { ChevronRight, House } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Banner = ({
    title,
    breadcrumbs = [],
}) => {
    const { pathname } = useLocation()

    return (
        <section className='relative h-[350px] sm:h-[600px] bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${breadcrumbg})`,
            }}>
            <div className='absolute inset-0' />
            <div className='relative z-10 flex h-full flex-col items-center justify-center px-4'>
                <div className='flex items-center gap-2 rounded-sm bg-foreground/40 px-4 py-3 text-fluid-sm font-semibold text-primary-foreground/80'>

                    <Link to="/" aria-label="Home">
                        <House size={17} className='hover:text-primary' />
                    </Link>

                    {breadcrumbs.map((item, index) => (
                        <React.Fragment
                            key={item.label}>
                            <Link
                                to={item.to}
                                aria-current={index === breadcrumbs.length - 1 ? "page" : undefined}
                                className='hover:text-primary'
                            >
                                {item.label}
                            </Link>

                            {index < breadcrumbs.length - 1 && (
                                <ChevronRight size={18} />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <Link to={pathname} className='mt-7'>
                    <h1 className='font-heading text-fluid-4xl font-black text-primary-foreground'>
                        {title}
                    </h1>
                </Link>
            </div>
        </section>
    )
}

export default Banner