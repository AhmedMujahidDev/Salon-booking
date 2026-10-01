import React from 'react'
import Banner from '@/components/common/Banner'
import ServicesOffer from '../../components/section/Services List/ServicesOffer'

const ServicesSection = () => {
  return (
    <section>

      <Banner
        title="Service List"
        breadcrumbs={[
          "Home",
          "Service",
          "Service List"
        ]} />
      <ServicesOffer />
    </section>
  )
}

export default ServicesSection