"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import LangSwitchButton from "../components/LangSwitchButton";
import PrintButton from "../components/PrintButton";
import { useLang } from "../context/LangContext";

/* =========================
   TYPES
========================= */
type ProjectItem = {
  title: string;
  tech: string;
  desc: string;
};

type ContentType = {
  role: string;
  profileTitle: string;
  profileDesc: string;
  projectsTitle: string;
  eduTitle: string;
  contactTitle: string;
  skillsTitle: string;
  projects: ProjectItem[];
  skills: string[];
};

/* =========================
   CONTENT
========================= */
const content: Record<"en" | "bn", ContentType> = {
  en: {
    role: "Full Stack Web Developer",
    profileTitle: "About Me",
    profileDesc:
      "Passionate Full Stack Developer. Expert in building scalable, high-performance applications.",

    projectsTitle: "Key Projects",
    eduTitle: "Education",
    contactTitle: "Contact",
    skillsTitle: "Technical Skills",

    skills: [
      "PHP",
      "Laravel",
      "Next.js",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind",
      "MySQL",
      "MongoDB",
    ],

    projects: [
      {
        title: "Invoices Management System",
        tech: "Next.js | PostgreSQL | Tailwind",
        desc: "A full-fledged dashboard featuring invoice tracking.",
      },
      {
        title: "Personal Portfolio",
        tech: "Next.js | Framer Motion",
        desc: "A modern portfolio with dark mode.",
      },
    ],
  },

  bn: {
    role: "ফুল স্ট্যাক ওয়েব ডেভেলপার",
    profileTitle: "আমার সম্পর্কে",
    profileDesc:
      "প্যাশনেট ফুল স্ট্যাক ডেভেলপার। স্কেলেবল এবং হাই-পারফরম্যান্স অ্যাপ তৈরি করি।",

    
    eduTitle: "শিক্ষা",
    contactTitle: "যোগাযোগ",
    skillsTitle: "টেকনিক্যাল স্কিল",

    skills: [
      "PHP",
      "Laravel",
      "Next.js",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind",
      "MySQL",
      "MongoDB",
    ],

    projectsTitle: "উল্লেখযোগ্য প্রজেক্ট",
    projects: [
      {
        title: "ইনভয়েস ম্যানেজমেন্ট সিস্টেম",
        tech: "Next.js | PostgreSQL | Tailwind",
        desc: "একটি পূর্ণাঙ্গ ড্যাশবোর্ড যেখানে ইনভয়েস ট্র্যাকিং রয়েছে।",
      },
      {
        title: "পার্সোনাল পোর্ফোলিও",
        tech: "Next.js | Framer Motion",
        desc: "ডার্ক মোডসহ একটি আধুনিক ওয়েবসাইট।",
      },
    ],
  },
};

/* =========================
   COMPONENT
========================= */
export default function ResumePage() {
  const { lang } = useLang();
  const data = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4">
      {/* Control Panel (Language & Print) */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-end gap-4 no-print">
        <LangSwitchButton />
        <PrintButton />
      </div>

      {/* Resume Sheet */}
      <div className="resume-card max-w-5xl mx-auto bg-white dark:bg-slate-900 shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[1100px]">
        {/* Left Sidebar (Image & Contact) */}
        <aside className="w-full md:w-80 bg-slate-900 text-slate-300 p-8 flex flex-col items-center border-r border-slate-800">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden mb-8 ring-4 ring-blue-600/30">
            <Image
              src="/profile.jpg" // public/profile.jpg ফোল্ডারে আপনার ছবি রাখুন
              alt="Surajit Mandal"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="w-full space-y-6">
            <section>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">
                {data.contactTitle}
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-500"
                  />{" "}
                  surajitmandal639@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-500"
                  />{" "}
                  West Bengal, India
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-blue-500"
                  />{" "}
                  https://linkedin.com/in/surajit-mandal-61bb10302
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-blue-500"
                  />{" "}
                  https://github.com/surajitmandal639
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 text-[10px] px-2 py-1 rounded text-slate-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">
                Education
              </h3>
              <div className="text-sm">
                <p className="text-white font-bold">BCA</p>
                <p className="text-xs text-slate-400">University Name</p>
                <p className="text-xs text-blue-500">2021 - 2024</p>
              </div>
            </section>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 p-10 md:p-16 bg-white dark:bg-slate-900">
          <header className="mb-12">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">
              Surajit <span className="text-blue-600">Mandal</span>
            </h1>
            <h2 className="text-xl font-medium text-slate-500 dark:text-slate-400 tracking-[0.2em] uppercase">
              {data.role}
            </h2>
          </header>

          <section className="mb-12">
            <h3 className="text-blue-600 text-xs font-black uppercase tracking-widest mb-4">
              {data.profileTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
              {data.profileDesc}
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6 border-l-4 border-blue-600 pl-3">
              {data.projectsTitle}
            </h3>
            <div className="space-y-6">
              {data.projects.map((project, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800"
                >
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7.5px] top-1.5"></div>
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {project.tech}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        @media print {
        
          /* পেজ সেটিংস */
          @page {
            size: A4;
            /* margin: 0;  আমরা কন্টেইনারে প্যাডিং ব্যবহার করব */
          }

          /* অপ্রয়োজনীয় এলিমেন্ট হাইড করা */
          .no-print {
            display: none !important;
          }

          /* মেইন কন্টেইনার ফিক্স */
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
          }

          .resume-card {
            display: flex !important;
            flex-direction: row !important;
            height: 297mm !important; /* A4 এর সঠিক উচ্চতা */
            width: 210mm !important; /* A4 এর সঠিক প্রস্থ */
            overflow: hidden !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
          }

          /* সাইডবার এবং মেইন কন্টেন্ট ফিক্স */
          aside {
            width: 31% !important;
            background: #0f172a !important; /* ডার্ক ব্যাকগ্রাউন্ড নিশ্চিত করা */
            color: #cbd5e1 !important;
            height: 90% !important;
            padding: 5px !important;
            margin: 5px !important;
          }

          main {
            width: 70% !important;
            background: white !important;
            height: 90% !important;
            padding: 5px !important;
            margin: 5px !important;
          }

          /* টেক্সট সাইজ একটু ছোট করা যাতে সবকিছু এক পেজে ধরে */
          p, li {
        font-size: 12px !important;
        }

        /* সাইডবারের টেক্সট কালার (ডার্ক ব্যাকগ্রাউন্ডের জন্য) */
        aside p, 
        aside li, 
        aside span {
        color: #cbd5e1 !important;
        }

        /* মেইন সেকশনের টেক্সট কালার (সাদা ব্যাকগ্রাউন্ডের জন্য) */
        main p, 
        main li, 
        main h4 {
        color: #1e293b !important; /* Slate 800 বা গাঢ় কোনো রঙ */
        }

          /* লিঙ্ক কালার ফিক্স */
          .text-blue-600 {
            color: #2563eb !important;
          }
        }
      `}</style>
    </div>
  );
}
