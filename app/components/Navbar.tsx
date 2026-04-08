'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle'; // একই ফোল্ডারে থাকলে সরাসরি ইমপোর্ট
import PrintButton from './PrintButton';
import { useLang } from '../context/LangContext';
import LangSwitchButton from './LangSwitchButton';

export default function Navbar() {

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600 dark:text-blue-400">
          <FontAwesomeIcon icon={faCode} />
          <span>DevPortfolio</span>
        </Link>

        {/* Links & Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          
          {/* Dark Mode Switcher */}
          <ThemeToggle />
          <LangSwitchButton />
        </div>
      </div>
    </nav>
  );
}

{/* <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">Surajit IT</h1>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#home" className="hover:text-blue-600 transition">Home</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 transition-all">
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-yellow-500" />
            </button>
          </div>
        </div>
      </nav> */}
