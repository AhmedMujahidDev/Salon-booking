import React from 'react'
import Banner from '@/components/common/Banner'
import ServiceGridCard from '../../components/section/Services Grid/ServiceGridCard'

const ServiceGridSection = () => {
  return (
    <section>

      <Banner
        title="Package Grid"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Service", to: "/services/services-list" },
          { label: "Package Grid", to: "/services/package-grid" }
        ]} />

      <ServiceGridCard />

    </section>
  )
}

export default ServiceGridSection