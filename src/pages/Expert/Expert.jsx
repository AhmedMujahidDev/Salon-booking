import React from 'react'
import Banner from '@/components/common/Banner'
import ExpertCard from '@/components/common/ExpertCard'
import { employees } from '../../components/section/About Us/Employees'

const Expert = () => {
    return (
        <section>
            <div>
                <Banner
                    title="Meet Our Experts"
                    breadcrumbs={[
                        "Home",
                        "Pages",
                        "Meet Our Experts"
                    ]} />

                <div className='section-padding'>
                    <div className='container-custom'>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-4">
                            {employees.map((emp) => (
                                <ExpertCard key={emp.id} employee={emp} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expert