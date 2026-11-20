import Banner from '@/components/common/Banner'
import ProductDetailCard from '@/components/section/Product Detail/ProductDetailCard'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const { pathname } = useLocation()

    return (
        <section>
            <Banner
                title="Product Details"
                breadcrumbs={[
                    { label: "Home", to: "/" },
                    { label: "Shop", to: "/products-Grid" },
                    { label: "Product Details", to: pathname }
                ]} />

            <ProductDetailCard />
        </section>
    )
}

export default ProductDetail