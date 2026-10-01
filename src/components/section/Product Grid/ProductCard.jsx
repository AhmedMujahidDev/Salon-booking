import { Button } from '@/components/ui/button'
import { Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    // <div className='container-custom'>
    <div className='group'>
      <div className='relative overflow-hidden bg-gray-50'>
        {product.discount > 0 && (
          <span className='absolute left-2 top-2 z-10 bg-red-500 px-2 py-1 text-xs font-medium text-white'>
            {product.discount}% OFF
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className='h-full w-full object-contain transition duration-300 group-hover:scale-95' />
          
        <Link
          to="/products-detail"
          className="absolute p-2 right-0 top-30 z-10 translate-x-full bg-white rounded-2xl hover:bg-accent-foreground transition-transform duration-300 group-hover:-translate-x-2 ">
          <Eye
            size={20}/>
        </Link>
        
        <button
          type='button'
          onClick={() => setIsLiked(!isLiked)}
          className="absolute p-2 right-0 top-42 z-10 translate-x-full bg-white rounded-2xl transition-transform duration-300 group-hover:-translate-x-2 cursor-pointer">
          <Heart
            size={20}
            className={
              isLiked ? "fill-red-500 text-red-500" : "text-gray-500 hover:text-accent-foreground "
            } />
        </button>

        <Button
          className="absolute bottom-0 left-0 w-full translate-y-full py-5 bg-accent-foreground text-sm font-bold text-white transition-transform duration-300 group-hover:translate-y-0 cursor-pointer">
          <ShoppingCart />
          Add To Cart
        </Button>
      </div>

      <div className='mt-3 flex items-center gap-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= product.rating
                ? "fill-yellow-400"
                : "text-gray-300"} />
        ))}

        <span className='ml-1 text-xs font-bold'>
          {product.rating}.0
        </span>
      </div>

      <h3 className="mt-1 text-xl font-bold text-gray-900">
        {product.name}
      </h3>

      <div className="mt-1 flex items-center gap-2">
        <span className="text-lg font-bold">
          ${product.price}
        </span>

        {product.originalPrice > product.price && (
          <span className="text-sm font-bold  text-gray-700 line-through">
            ${product.originalPrice}
          </span>
        )}
      </div>
    </div >
    // </div>
  )
}

export default ProductCard