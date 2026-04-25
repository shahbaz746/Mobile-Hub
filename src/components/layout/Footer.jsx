import React from 'react'

const Footer = () => {
  const aboutLinks = ['Our Story', 'Team', 'Careers', 'Press', 'Blog']
  const storeLinks = ['All Products', 'Smartphones', 'Accessories', 'Deals & Offers', 'New Arrivals']

  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-7 px-6 lg:px-16">

      {/* Newsletter Bar */}
      <div className="bg-slate-800 rounded-xl p-5 mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-100 mb-1">Stay in the loop</h4>
            <p className="text-xs text-slate-500">Get the latest deals & new arrivals straight to your inbox.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-lg
                px-4 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none
                transition-colors duration-200 w-full sm:w-52 font-[inherit]"
            />
            <button className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 text-white
              text-sm font-semibold px-4 py-2 rounded-lg border-none cursor-pointer
              transition-all duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
              {/* phone icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-100 tracking-tight">
              Mobile<span className="text-blue-500">Hub</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-[240px]">
            Your one-stop destination for the latest smartphones, accessories, and tech gadgets.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2.5">
            {[
              { label: 'Facebook', cls: 'hover:bg-[#1877f2] hover:border-[#1877f2]', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="#94a3b8"/> },
              { label: 'Instagram', cls: 'hover:bg-[#e1306c] hover:border-[#e1306c]', icon: <><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="#94a3b8" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="#94a3b8" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="0.8" fill="#94a3b8"/></> },
              { label: 'TikTok', cls: 'hover:bg-black hover:border-[#69c9d0]', icon: <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 12.67 0V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1-.07z" fill="#94a3b8"/> },
              { label: 'YouTube', cls: 'hover:bg-[#ff0000] hover:border-[#ff0000]', icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#94a3b8"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1e293b"/></> },
              { label: 'Twitter', cls: 'hover:bg-[#1da1f2] hover:border-[#1da1f2]', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" fill="#94a3b8"/> },
            ].map(({ label, cls, icon }) => (
              <a key={label} href="#"
                className={`w-[38px] h-[38px] rounded-[9px] border border-slate-800 bg-slate-800
                  flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 ${cls}`}>
                <svg width="15" height="15" viewBox="0 0 24 24">{icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <p className="text-xs font-semibold text-slate-100 uppercase tracking-wider mb-4">About</p>
          <ul className="space-y-2.5">
            {aboutLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-200 hover:pl-1.5
                  transition-all duration-200 inline-block relative
                  before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2
                  before:w-1 before:h-1 before:rounded-full before:bg-blue-500
                  before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Store */}
        <div>
          <p className="text-xs font-semibold text-slate-100 uppercase tracking-wider mb-4">Store</p>
          <ul className="space-y-2.5">
            {storeLinks.map(link => (
              <li key={link}>
                <a href="#" className="text-sm text-slate-500 hover:text-slate-200 hover:pl-1.5
                  transition-all duration-200 inline-block relative
                  before:absolute before:left-[-8px] before:top-1/2 before:-translate-y-1/2
                  before:w-1 before:h-1 before:rounded-full before:bg-blue-500
                  before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold text-slate-100 uppercase tracking-wider mb-4">Contact</p>
          <div className="space-y-3">
            {[
              { text: '123 Tech Street, Lahore, Pakistan', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0' },
              { text: '+92 300 0000000', icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.49 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' },
              { text: 'hello@mobilehub.pk', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6' },
            ].map(({ text, icon }) => (
              <div key={text} className="flex items-start gap-2.5 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
                    <path d={icon}/>
                  </svg>
                </div>
                <span className="text-sm text-slate-500 group-hover:text-slate-200 leading-relaxed transition-colors duration-200">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-slate-800 mb-6" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          &copy; 2026 <span className="text-blue-500">MobileHub</span>. All rights reserved.
        </p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
            <a key={link} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer