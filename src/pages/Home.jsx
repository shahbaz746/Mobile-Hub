import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/Products'

const Home = () => {
  return (
    <>
    {/* Section -1: Hero Banner */}
   <section className=" relative bg-blue-50 overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-100 rounded-full -z-0" />
      <div className="absolute -bottom-10 right-24 w-40 h-40 bg-blue-50 rounded-full -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-16
        grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

        {/* ── LEFT: Text Content ── */}
        <div className="order-2 md:order-1">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700
            text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
            New Arrivals 2026
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900
            leading-[1.13] tracking-tight mb-4">
            Find Your Perfect <br />
            <span className="text-blue-600">Smartphone</span>
          </h1>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8 max-w-md">
            Latest iPhones, Samsung, Google Pixel & more at unbeatable prices.
            Premium devices, trusted sellers, fast delivery.
          </p>

          <div className="flex items-center mb-9">
            {[
              { num: '500+', label: 'Products' },
              { num: '50K+', label: 'Customers' },
              { num: '4.9★', label: 'Rating' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && <div className="w-px h-9 bg-slate-200 mx-5" />}
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">{s.num}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700
              text-white text-sm font-bold px-8 py-3.5 rounded-xl border-none cursor-pointer
              transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-200">
              Shop Now
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>

            <button className="flex items-center gap-2 bg-white hover:border-blue-500 hover:text-blue-600
              text-slate-800 text-sm font-semibold px-6 py-3.5 rounded-xl
              border-2 border-slate-200 cursor-pointer transition-all duration-200 hover:-translate-y-0.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              View Deals
            </button>
          </div>
        </div>

        {/* ── RIGHT: Product Image ── */}
        <div className="order-1 md:order-2 relative flex items-center justify-center pb-6">

          {/* Phone card — animate-float added */}
          <div className="w-64 md:w-[300px] h-80 md:h-[400px] bg-gradient-to-br
            from-blue-200 to-blue-100 rounded-[32px] overflow-hidden flex-shrink-0
            animate-float">
            <img
              src="/assets/Home-Page-Images/Google Pixel 10 pro xl.jpg"
              alt="Google Pixel 10 Pro XL"
              className="w-full h-full object-cover rounded-[32px] "
            />
          </div>

          {/* In Stock badge — animate-float-badge added */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2
            bg-white border border-slate-200 rounded-xl px-4 py-2.5
            flex items-center gap-2 shadow-lg shadow-blue-100 whitespace-nowrap
            animate-float-badge">
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <span className="text-xs font-semibold text-slate-900">In Stock — Ships Today</span>
          </div>

          {/* Rating badge — animate-float-rating added */}
          <div className="absolute top-6 -right-2 md:-right-4
            bg-white border border-slate-200 rounded-xl px-3 py-2
            flex items-center gap-1.5 shadow-md
            animate-float-rating">
            <span className="text-amber-400 text-sm tracking-wide">★★★★★</span>
            <span className="text-xs font-semibold text-slate-900">4.9 / 5</span>
          </div>

        </div>
      </div>
    </section> 


    {/* Section -2: Category Highlights */}

    

    {/* Section -3: Featured Products */}
    <section className="p-6">
      
      <h2 className="text-2xl font-bold mb-4">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>

    </>
  )
}

export default Home
