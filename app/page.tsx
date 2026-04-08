"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLayerGroup,
  faEnvelope,
  faMapMarkerAlt,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faPhp,
  faLaravel,
  faReact,
  faNodeJs,
  faJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./components/ContactForm";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { useLang } from "@/app/context/LangContext";

export default function Portfolio() {
  const { lang } = useLang();

  type LangType = "en" | "bn";

  type ContentType = {
    heroTitle1: string;
    heroTitle2: string;
    heroTitle3: string;
    heroDesc: string;

    servicesTitle: string;

    webDevTitle: string;
    webDevDesc: string;

    uiTitle: string;
    uiDesc: string;

    skillsTitle: string;

    contactTitle: string;
    contactDesc: string;

    emailLabel: string;
    locationLabel: string;

    viewResume: string;
    print: string;
  };

  const content: Record<LangType, ContentType> = {
    en: {
      heroTitle1: "Tech",
      heroTitle2: "Expertise",
      heroTitle3: "for You",
      heroDesc: "Modern IT solutions and software development services.",

      servicesTitle: "Services",

      webDevTitle: "Web Development",
      webDevDesc: "Super fast websites using Next.js and Tailwind.",

      uiTitle: "UI/UX Design",
      uiDesc: "Modern and responsive user interface design.",

      skillsTitle: "Technical Skills",

      contactTitle: "Let's work together",
      contactDesc: "Have an idea? Message me directly or check my resume.",

      emailLabel: "Email Me",
      locationLabel: "Location",

      viewResume: "View Resume",
      print: "Print",
    },

    bn: {
      heroTitle1: "টেক",
      heroTitle2: "এক্সপার্টিজ",
      heroTitle3: "আপনার জন্য",
      heroDesc: "মডার্ন আইটি সল্যুশন এবং সফটওয়্যার ডেভেলপমেন্ট সার্ভিস।",

      servicesTitle: "সার্ভিসসমূহ",

      webDevTitle: "ওয়েব ডেভেলপমেন্ট",
      webDevDesc: "Next.js এবং Tailwind দিয়ে সুপার ফাস্ট ওয়েবসাইট।",

      uiTitle: "UI/UX ডিজাইন",
      uiDesc: "আধুনিক এবং রেসপনসিভ ইউজার ইন্টারফেস ডিজাইন।",

      skillsTitle: "টেকনিক্যাল স্কিল",

      contactTitle: "চলুন একসাথে কাজ করি",
      contactDesc:
        "আপনার কোনো আইডিয়া আছে? আমাকে মেসেজ দিন অথবা আমার সিভি দেখুন।",

      emailLabel: "ইমেইল",
      locationLabel: "লোকেশন",

      viewResume: "রিজিউম দেখুন",
      print: "প্রিন্ট",
    },
  };

  const data = content[lang];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            {data.heroTitle1}{" "}
            <span className="text-blue-600 font-mono">
              {data.heroTitle2}
            </span>{" "}
            {data.heroTitle3}
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            {data.heroDesc}
          </p>
          
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/surajitmandal639"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/surajit-mandal-61bb10302"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-slate-50 dark:bg-slate-900/50 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <FontAwesomeIcon
              icon={faCode}
              className="text-3xl text-blue-600 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              {data.webDevTitle}
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {data.webDevDesc}
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-3xl text-blue-600 mb-4"
            />
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-slate-500 dark:text-slate-400">
              আধুনিক এবং রেসপনসিভ ইউজার ইন্টারফেস ডিজাইন।
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">
        <Project />
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">{data.skillsTitle}</h3>
          <div className="flex flex-wrap justify-center gap-10 opacity-70">
            <SkillIcon icon={faPhp} name="PHP" />
            <SkillIcon icon={faLaravel} name="Laravel" />
            <SkillIcon icon={faJs} name="JavaScript" />
            <SkillIcon icon={faBootstrap} name="Bootstrap" />
            <SkillIcon icon={faCode} name="JQuery" />
            <SkillIcon icon={faReact} name="Next.js" />
            <SkillIcon icon={faNodeJs} name="Node.js" />
            {/* <SkillIcon icon={faPython} name="Python" /> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Side: Contact Info & Resume */}
          <div className="space-y-10">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                {data.contactTitle}{" "} 
                {/* <span className="text-blue-600">together</span> */}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {data.contactDesc}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              <ContactMethod
                icon={faEnvelope}
                label={data.emailLabel}
                value="surajitmandal639@gmail.com"
              />
              <ContactMethod
                icon={faMapMarkerAlt}
                label={data.locationLabel}
                value="West Bengal, India"
              />
            </div>

            {/* Resume Buttons Group */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/resume"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                <FontAwesomeIcon icon={faFileDownload} /> {data.viewResume}
              </Link>

              {/* <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <FontAwesomeIcon icon={faPrint} /> {data.print}
              </button> */}
            </div>
          </div>

          {/* Right Side: Smart Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

function SkillIcon({ icon, name }: { icon: any; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 hover:text-blue-600 transition-colors cursor-default group">
      <FontAwesomeIcon
        icon={icon}
        className="text-5xl group-hover:scale-110 transition-transform"
      />
      <span className="text-xs font-bold uppercase tracking-widest">
        {name}
      </span>
    </div>
  );
}

function ContactMethod({
  icon,
  label,
  value,
}: {
  icon: any;
  label: any;
  value: any;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">
          {label}
        </p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
