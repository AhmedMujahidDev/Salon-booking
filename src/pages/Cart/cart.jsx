import Banner from '@/components/common/Banner'
import CartPage from '@/components/section/Cart/cartPage'

const Cart = () => {
  return (
    <section>
        <Banner
                title="Cart"
                breadcrumbs={[
                    "Home",
                    "Shop",
                    "Cart"
                ]} />
        <CartPage />
    </section>
  )
}

export default Cart