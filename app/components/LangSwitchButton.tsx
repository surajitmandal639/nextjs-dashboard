"use client";

import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLang } from '../context/LangContext';

export default function LangSwitchButton() {
  const { lang, setLang } = useLang();

  return (
    <button 
      onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
      className="bg-white dark:bg-slate-800 
                 border border-slate-200 dark:border-slate-700 
                 px-4 py-2 rounded-lg font-bold 
                 flex items-center gap-2 shadow-sm 
                 hover:bg-slate-50 dark:hover:bg-slate-700 
                 transition-all
                 text-black dark:text-white"
    >
      <FontAwesomeIcon icon={faLanguage} className="text-blue-600" />
      
      {lang === 'en' ? 'বাংলায় দেখুন' : 'Switch to English'}
    </button>
  )
}