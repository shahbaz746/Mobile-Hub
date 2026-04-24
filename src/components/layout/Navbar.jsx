import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart, faBars, faTimes, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 relative">

          {/* Logo */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-300">
              <FontAwesomeIcon icon={faMobileAlt} className="text-white text-sm" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Mobile<span className="text-blue-600">Hub</span>
            </span>
          </div>

          {/* Center Links */}
          <ul className="hidden md:flex items-center gap-9 list-none absolute left-1/2 -translate-x-1/2">
            {['Home', 'Products', 'About'].map((item, i) => (
              <li key={item}>
                <a href="#" className={`relative text-sm font-medium transition-colors duration-200
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600
                  after:rounded-full after:transition-all after:duration-300 hover:after:w-full
                  ${i === 0
                    ? 'text-slate-900 after:w-full'
                    : 'text-slate-500 hover:text-slate-900'}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2.5 flex-shrink-0">

            {/* Search — visible grey bg, never white */}
            <div className="hidden md:flex items-center relative">
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 overflow-hidden
                transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${searchOpen ? 'w-[220px] opacity-100 pointer-events-auto' : 'w-0 opacity-0 pointer-events-none'}`}>
                <div className={`flex items-center bg-white border-2 border-blue-500 rounded-[9px]
                  px-3 h-[38px] mr-[46px] shadow-[0_0_0_3px_rgba(37,99,235,0.12)]`}>
                  <input
                    autoFocus={searchOpen}
                    type="text"
                    placeholder="Search phones..."
                    onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
                    className="bg-transparent border-none outline-none text-sm text-slate-900 w-36 font-[inherit]"
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <FontAwesomeIcon icon={faTimes} className="text-xs" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`w-[38px] h-[38px] rounded-[9px] border-none flex items-center justify-center
                  cursor-pointer transition-all duration-200 z-10
                  ${searchOpen
                    ? 'bg-blue-600 scale-95'
                    : 'bg-slate-200 hover:bg-slate-300'}`}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={`text-sm ${searchOpen ? 'text-white' : 'text-slate-600'}`}
                />
              </button>
            </div>

            {/* Cart — solid dark blue, always visible */}
            <button className="relative w-[38px] h-[38px] rounded-[9px] border-none
              bg-blue-800 hover:bg-blue-700 flex items-center justify-center
              cursor-pointer transition-all duration-200 hover:scale-105">
              <FontAwesomeIcon icon={faShoppingCart} className="text-white text-sm" />
              <span className="absolute -top-1.5 -right-1.5 w-[17px] h-[17px] bg-red-500
                text-white text-[9px] font-bold rounded-full flex items-center justify-center
                border-2 border-white">
                3
              </span>
            </button>

            {/* Login */}
            <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white
              text-sm font-semibold px-5 py-2 rounded-[9px] border-none cursor-pointer
              transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200">
              Login
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-[38px] h-[38px] rounded-[9px] border-none
                bg-slate-200 hover:bg-slate-300 flex items-center justify-center
                cursor-pointer transition-colors duration-200">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-slate-600 text-sm" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t border-slate-100 overflow-hidden transition-all duration-300
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-1 bg-white">
          {['Home', 'Products', 'About'].map((item, i) => (
            <a key={item} href="#"
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                ${i === 0
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2 bg-slate-100 rounded-[9px] px-3 mt-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-400 text-xs" />
            <input type="text" placeholder="Search products..."
              className="bg-transparent border-none outline-none text-sm text-slate-900 w-full py-2.5 font-[inherit]" />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm
            font-semibold py-2.5 rounded-[9px] border-none cursor-pointer transition-colors duration-200 mt-2">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar