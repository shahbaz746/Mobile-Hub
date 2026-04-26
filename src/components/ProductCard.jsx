import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // ✅ CART CONTEXT
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-2xl border-2 border-slate-100 p-4
      flex flex-col gap-3 h-full
      hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1.5
      hover:border-blue-200 transition-all duration-300 group"
    >

      {/* IMAGE */}
      <div className="bg-blue-50 rounded-xl overflow-hidden flex items-center
        justify-center h-44 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">

        <img
          src={product.image}
          alt={product.title}
          className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* BADGE */}
      <span className="text-[10px] font-semibold text-green-700 bg-green-50
        border border-green-200 px-2.5 py-1 rounded-full w-fit">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </span>

      {/* TITLE */}
      <h3 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 flex-1">
        {product.title}
      </h3>

      {/* PRICE */}
      <p className="text-xl font-extrabold text-blue-600">
        ${product.price}
      </p>

      {/* BUTTONS */}
      <div className="flex items-center gap-2 mt-auto">

        {/* ADD TO CART */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevents navigation
            addToCart(product, 1);
          }}
          disabled={product.stock === 0}
          className={`flex-1 flex items-center justify-center gap-2
          text-sm font-semibold py-2.5 rounded-xl border-none cursor-pointer
          transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
          ${product.stock === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-200"
          }`}
        >
          Add to Cart
        </button>

        {/* WISHLIST */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white
          flex items-center justify-center flex-shrink-0 cursor-pointer
          hover:border-red-300 hover:bg-red-50 transition-all duration-200"
        >
          ❤️
        </button>

      </div>

    </div>
  );
};

export default ProductCard;