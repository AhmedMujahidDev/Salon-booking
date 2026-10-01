import React from 'react'
import Banner from '@/components/common/Banner'
import ServiceGridCard from '../../components/section/Services Grid/ServiceGridCard'

const ServiceGridSection = () => {
  return (
    <section>

      <Banner
        title="Service List"
        breadcrumbs={[
          "Home",
          "Service",
          "Service Grid"
        ]} />

      <ServiceGridCard />

    </section>
  )
}

export default ServiceGridSection