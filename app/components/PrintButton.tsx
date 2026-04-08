// import { faLanguage, faPrint } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
// import { useLang } from '../context/LangContext'

// export default function PrintButton() {
//   const {lang} = useLang();
  
//   return (
//     <button 
//         onClick={() => window.print()}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2"
//     >
//         <FontAwesomeIcon icon={faPrint} /> Print ({lang.toUpperCase()})
//     </button>
//   )
// }

"use client";

import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useLang } from '../context/LangContext'

export default function PrintButton() {
  const { lang } = useLang();

  const handlePrint = () => {
    // ১. চেক করা হচ্ছে পেজটি ডার্ক মোডে আছে কি না
    const isDarkMode = document.documentElement.classList.contains("dark");

    // ২. ডার্ক মোড সরিয়ে নেওয়া (যাতে প্রিন্ট সাদা আসে)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    }

    // ৩. সামান্য সময় দিয়ে প্রিন্ট ডায়ালগ ওপেন করা
    setTimeout(() => {
      window.print();

      // ৪. প্রিন্ট হয়ে যাওয়ার পর আবার ডার্ক মোড ফিরিয়ে আনা
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      }
    }, 100);
  };

  return (
    <button 
        onClick={handlePrint}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2"
    >
        <FontAwesomeIcon icon={faPrint} /> 
        {lang === 'en' ? 'Print Resume' : 'সিভি প্রিন্ট করুন'}
    </button>
  )
}
