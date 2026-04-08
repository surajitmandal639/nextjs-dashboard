import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800 text-center text-slate-500 text-sm">
    <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 text-lg">
            <a href="https://github.com/surajitmandal639" target='_blank' className="hover:text-blue-600"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://linkedin.com/in/surajit-mandal-61bb10302" target='_blank' className="hover:text-blue-600"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <p>© {new Date().getFullYear()} Surajit Portfolio. All rights reserved.</p>
    </div>
    </footer>
  )
}
