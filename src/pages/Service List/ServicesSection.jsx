import React from 'react'
import Banner from '@/components/common/Banner'
import ServicesOffer from '../../components/section/Services List/ServicesOffer'

const ServicesSection = () => {
  return (
    <section>

      <Banner
        title="Service List"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Service", to: "/services/services-list" },
          { label: "Service List", to: "/services/services-list" }
        ]} />
      <ServicesOffer />
    </section>
  )
}

export default ServicesSection