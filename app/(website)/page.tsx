import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
          </span>
          Available for new projects
        </div>
        
        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-7xl">
          I build <span className="text-blue-600">scalable</span> IT <br /> 
          solutions for your business.
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Full-stack developer specializing in Next.js, Laravel, and Cloud Infrastructure. 
          Let's turn your idea into a high-performance reality.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
            Get Started <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white transition-all">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
