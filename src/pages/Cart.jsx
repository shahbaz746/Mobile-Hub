import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart();

  const tax = totalPrice * 0.08;
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl border-2 border-slate-100 p-16 text-center max-w-md w-full">
          <div className="text-6xl mb-5">🛒</div>
          <h2 className="text-xl font-extrabold text-slate-900 mb-2">Your cart is empty</h2>
          <p className="text-sm text-slate-400 mb-8">Looks like you haven't added anything yet.</p>
          <Link to="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
              text-white text-sm font-semibold px-6 py-3 rounded-xl
              transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            🛒 My Cart
          </h1>
          <p className="text-sm text-slate-400 mt-1">{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">

          {/* ── LEFT: Cart Items ── */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id}
                className="bg-white rounded-2xl border-2 border-slate-100 p-4
                  flex flex-wrap sm:flex-nowrap gap-4 items-center
                  hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50
                  hover:-translate-y-0.5 transition-all duration-250">

                {/* Image */}
                <div className="w-20 h-20 bg-blue-50 rounded-xl flex-shrink-0
                  flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-1">
                    {item.category} · {item.brand}
                  </p>
                  <h2 className="text-sm font-bold text-slate-900 truncate mb-1">
                    {item.title}
                  </h2>
                  <p className="text-lg font-extrabold text-blue-600">${item.price}</p>
                </div>

                {/* Right controls */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end
                  gap-3 w-full sm:w-auto justify-between sm:justify-start">

                  {/* Qty */}
                  <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                    <button onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600
                        hover:bg-blue-50 hover:text-blue-600 transition-colors border-none
                        bg-white cursor-pointer text-lg">
                      −
                    </button>
                    <span className="w-9 h-8 flex items-center justify-center
                      text-sm font-bold text-slate-900 border-x-2 border-slate-200">
                      {item.qty}
                    </span>
                    <button onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600
                        hover:bg-blue-50 hover:text-blue-600 transition-colors border-none
                        bg-white cursor-pointer text-lg">
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <p className="text-[10px] text-slate-400">subtotal</p>
                  </div>

                  {/* Remove */}
                  <button onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-400
                      hover:text-red-500 hover:bg-red-50 px-2.5 py-1.5 rounded-lg
                      transition-all duration-200 border-none bg-transparent cursor-pointer">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6l-1 14H6L5 6"/>
                      <path d="M10 11v6M14 11v6"/>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 lg:sticky lg:top-6">
            <h2 className="text-base font-extrabold text-slate-900 mb-5
              pb-4 border-b border-slate-100">
              Order Summary
            </h2>

            {/* Rows */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Subtotal ({totalItems} items)</span>
                <span className="text-sm font-semibold text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Shipping</span>
                <span className="text-sm font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Tax (8%)</span>
                <span className="text-sm font-semibold text-slate-900">${tax.toFixed(2)}</span>
              </div>
            </div>

            <hr className="border-slate-100 mb-4" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-base font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-blue-600">
                ${(totalPrice + tax).toFixed(2)}
              </span>
            </div>

            {/* Promo */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-slate-500 mb-2">Promo Code</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code..."
                  className="flex-1 bg-slate-50 border-2 border-slate-200 focus:border-blue-500
                    rounded-xl px-3 py-2 text-xs text-slate-800 outline-none
                    transition-colors duration-200 font-[inherit] placeholder-slate-400"
                />
                <button className="bg-slate-900 hover:bg-slate-700 text-white text-xs
                  font-semibold px-4 py-2 rounded-xl border-none cursor-pointer
                  transition-colors duration-200">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout */}
            <button className="w-full flex items-center justify-center gap-2
              bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold
              py-3.5 rounded-xl border-none cursor-pointer
              transition-all duration-200 hover:-translate-y-0.5
              hover:shadow-lg hover:shadow-blue-200 mb-3">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <rect x="1" y="4" width="22" height="16" rx="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Proceed to Checkout
            </button>

            <Link to="/products"
              className="w-full flex items-center justify-center gap-2
                bg-white hover:border-blue-500 hover:text-blue-600 text-slate-600
                text-sm font-semibold py-3 rounded-xl border-2 border-slate-200
                transition-all duration-200 no-underline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Continue Shopping
            </Link>

            {/* Trust */}
            <div className="flex justify-center gap-5 mt-5 flex-wrap">
              {['🔒 Secure', '🚚 Free Ship', '↩ Returns'].map(t => (
                <span key={t} className="text-[11px] text-slate-400 font-medium">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;