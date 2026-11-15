import Banner from '@/components/common/Banner'
import ProductDetailCard from '@/components/section/Product Detail/ProductDetailCard'
import React from 'react'

const ProductDetail = () => {
    return (
        <section>
            <Banner
                title="Product Details"
                breadcrumbs={[
                    "Home",
                    "Shop",
                    "Product Details"
                ]} />

            <ProductDetailCard />
        </section>
    )
}

export default ProductDetail