import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);

  // ✅ CART CONTEXT
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">📦</p>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-slate-500 text-sm">
            This product doesn't exist or was removed.
          </p>
        </div>
      </div>
    );
  }

  const isAvailable = Number(product.stock) > 0;

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 flex-wrap">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <span>/</span>
          <span className="text-slate-700 font-600">{product.title}</span>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div>
            <div className="relative bg-blue-50 rounded-2xl h-[400px] flex items-center justify-center">

              {/* STOCK BADGE */}
              <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full
                ${isAvailable ? "bg-green-500" : "bg-red-500"}`}>
                {isAvailable ? "In Stock" : "Out of Stock"}
              </span>

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-6"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div>

            <h1 className="text-3xl font-bold">{product.title}</h1>

            <p className="text-blue-600 text-2xl font-bold mt-3">
              ${product.price}
            </p>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            {/* STOCK INFO */}
            <p className={`mt-3 font-semibold ${
              isAvailable ? "text-green-600" : "text-red-500"
            }`}>
              {isAvailable
                ? product.stock > 10
                  ? `${product.stock} units available`
                  : `Only ${product.stock} left`
                : "Out of Stock"}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-3 mt-5">

              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border"
              >
                -
              </button>

              <span>{qty}</span>

              <button
                onClick={() =>
                  setQty((q) => Math.min(product.stock, q + 1))
                }
                className="px-3 py-1 border"
              >
                +
              </button>

            </div>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={() => addToCart(product, qty)}
              disabled={!isAvailable}
              className={`mt-5 px-6 py-3 rounded text-white font-bold
                transition-all duration-200
                ${isAvailable
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              {isAvailable ? "Add to Cart" : "Out of Stock"}
            </button>

            {/* BUY NOW */}
            <button className="mt-3 ml-3 px-6 py-3 bg-black text-white rounded font-bold">
              Buy Now
            </button>

            {/* WISHLIST */}
            <button
              onClick={() => setWished(!wished)}
              className="ml-3 px-4 py-3 border rounded"
            >
              {wished ? "❤️ Wishlisted" : "🤍 Wishlist"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;