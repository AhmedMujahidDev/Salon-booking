import Banner from '@/components/common/Banner'
import CartPage from '@/components/section/Cart/cartPage'

const Cart = () => {
  return (
    <section>
        <Banner
                title="Cart"
                breadcrumbs={[
                    { label: "Home", to: "/" },
                    { label: "Shop", to: "/products-Grid" },
                    { label: "Cart", to: "/cart" }
                ]} />
        <CartPage />
    </section>
  )
}

export default Cart