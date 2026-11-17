import React from 'react'
import ExpertCard from '@/components/common/ExpertCard'
import { employees } from '../About Us/Employees'

const Expert = () => {
    const featured = employees.slice(0, 4)
    return (
        <section className='section-padding bg-foreground'>
            <div className='container-custom'>
                <div className='grid grid-cols-1 gap-12 px-6 lg:grid-cols-[350px_1fr] lg:gap-16'>
                    <div className='lg:sticky lg:top-24 lg:h-fit'>

                        <span className="inline-flex items-center gap-3 rounded-full bg-primary px-4 py-1 text-fluid-sm font-semibold text-primary-foreground">
                            • Experts •
                        </span>

                        <h2 className='mt-4 font-heading text-fluid-3xl font-black leading-tight text-primary-foreground'>
                            Our Skilled
                            <br />
                            Grooming Stylists
                        </h2>

                        <p className='mt-4 text-fluid-sm leading-6 text-border-strong'>
                            Book your appointment today and experience premium barbering
                            services that redefine your grooming routine.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2'>
                        {featured.map((emp) => (
                            <ExpertCard
                                key={emp.id}
                                employee={emp}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expert