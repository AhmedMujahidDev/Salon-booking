import { Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Cart/Usecart'

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [cartMessage, setCartMessage] = useState('')
  const { addItem, pending } = useCart({ loadOnMount: false })

  const handleAddToCart = async () => {
    const result = await addItem(
      product.id,
      1,
      product.color ? { label: 'Color', value: product.color } : null,
    )
    setCartMessage(result.ok )
  }

  return (
    <div className='group'>
      <div className='relative cursor-pointer overflow-hidden bg-muted'>
        <Link to={`/products-detail/${product.id}`}>
          {product.discount > 0 && (
            <span className='absolute left-2 top-2 z-10 bg-destructive px-2 py-1 text-fluid-xs font-medium text-primary-foreground'>
              {product.discount}% OFF
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className='h-full w-full object-contain transition duration-300 group-hover:scale-95' />
        </Link>

        <Link
            to={`/products-detail/${product.id}`}
            className="absolute p-2 right-0 top-30 z-10 translate-x-full bg-background rounded-2xl hover:bg-accent-foreground transition-transform duration-300 group-hover:-translate-x-2">
            <Eye
              size={20} />
        </Link>

        <button
            type='button'
            onClick={() => setIsLiked(!isLiked)}
            className="absolute p-2 right-0 top-42 z-10 translate-x-full bg-background rounded-2xl transition-transform duration-300 group-hover:-translate-x-2 cursor-pointer">
            <Heart
              size={20}
              className={
                isLiked ? "fill-destructive text-destructive" : "text-muted-foreground hover:text-accent-foreground "
              } />
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={pending}
          className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-center gap-2 bg-accent-foreground py-5 text-fluid-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:translate-y-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          <ShoppingCart />
          {pending ? 'Adding...' : 'Add To Cart'}
        </button>
      </div>

      {cartMessage && (
        <p className="mt-2 text-fluid-sm" role="status">{cartMessage}</p>
      )}

      <div className='mt-3 flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= product.rating
                ? "fill-warning"
                : "text-border-strong"} />
        ))}

        <span className='ml-1 text-fluid-xs font-bold'>
          {product.rating}.0
        </span>
      </div>

      <h3 className="mt-1 text-fluid-xl font-bold text-foreground">
        {product.name}
      </h3>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-fluid-lg font-bold">
          ${product.price}
        </span>

        {product.originalPrice > product.price && (
          <span className="text-fluid-sm font-bold text-text-secondary line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>
    </div>
  )
}

export default ProductCard