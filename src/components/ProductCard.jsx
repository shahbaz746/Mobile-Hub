import React from 'react'

const ProductCard = ({ image, title, price }) => {
  return (
     <div className="bg-white rounded-2xl border-2 border-slate-100 p-4
      flex flex-col gap-3 h-full
      hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1.5
      hover:border-blue-200 transition-all duration-300 group">

      {/* Image area */}
      <div className="bg-blue-50 rounded-xl overflow-hidden flex items-center
        justify-center h-44 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
        <img
          src={image}
          alt={title}
          className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Badge */}
      <span className="text-[10px] font-semibold text-green-700 bg-green-50
        border border-green-200 px-2.5 py-1 rounded-full w-fit">
        In Stock
      </span>

      {/* Title */}
      <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 flex-1">
        {title}
      </h3>

      {/* Price */}
      <p className="text-xl font-extrabold text-blue-600">{price}</p>

      {/* Buttons */}
      <div className="flex items-center gap-2 mt-auto">
        <button className="flex-1 flex items-center justify-center gap-2
          bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold
          py-2.5 rounded-xl border-none cursor-pointer
          transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-200">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Add to Cart
        </button>

        <button className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white
          flex items-center justify-center flex-shrink-0 cursor-pointer
          hover:border-red-300 hover:bg-red-50 transition-all duration-200">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

    </div>
  )
}

export default ProductCard
