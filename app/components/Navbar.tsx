'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCode } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from './ThemeToggle'
import LangSwitchButton from './LangSwitchButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT: Logo + Mobile Button */}
          <div className="flex items-center gap-4">
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <FontAwesomeIcon icon={open ? faTimes : faBars} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
              <FontAwesomeIcon icon={faCode} />
              <span>DevPortfolio</span>
            </Link>
          </div>

          {/* CENTER: Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* RIGHT: Toggles */}
          <div className="hidden md:flex items-end gap-3">
            <ThemeToggle />
            <LangSwitchButton />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-4 space-y-3 text-slate-700 dark:text-slate-300">
            
            <a href="#home" onClick={() => setOpen(false)} className="block">Home</a>
            <a href="#services" onClick={() => setOpen(false)} className="block">Services</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block">Contact</a>

            {/* Extra: toggle inside mobile */}
            <div className="flex gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <ThemeToggle />
              <LangSwitchButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

// 'use client';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-solid-svg-icons';
// import ThemeToggle from './ThemeToggle';
// import LangSwitchButton from './LangSwitchButton';

// export default function Navbar() {

//   return (
//     <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
//           <FontAwesomeIcon icon={faCode} />
//           <span>DevPortfolio</span>
//         </Link>

//         {/* Links & Toggle */}
//         <div className="flex items-center gap-6">
//           <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
//             <a href="#home" className="hover:text-blue-600 transition">Home</a>
//             <a href="#services" className="hover:text-blue-600 transition">Services</a>
//             <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
//             <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
//           </div>
          
//           {/* Dark Mode Switcher */}
//           <ThemeToggle />
//           <LangSwitchButton />
//         </div>
//       </div>
//     </nav>
//   );
// }
