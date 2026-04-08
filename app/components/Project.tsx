"use client";

import React from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";

/* =========================
   TYPES
========================= */
type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  previewUrl: string;
  image: string;
};

type ContentType = {
  projectSectionTitle: string;
  projectSectionDesc: string;
  viewAll: string;
  projects: ProjectType[];
};

/* =========================
   CONTENT
========================= */
const content: Record<"en" | "bn", ContentType> = {
  en: {
    projectSectionTitle: "Selected Projects",
    projectSectionDesc: "Recent work that I have completed.",
    viewAll: "View All",
    projects: [
      {
        id: 1,
        title: "Panchayati Raj Project Management System (PPMS)",
        description:
          "A comprehensive e-governance solution developed for the Government of Odisha.",
        tags: ["Laravel", "MySQL", "jQuery", "Bootstrap 5"],
        previewUrl: "https://ppms.odisha.gov.in/",
        image: "/projects/ppms.png",
      },
      {
        id: 2,
        title: "IT Dashboard",
        description:
          "Real-time data monitoring and invoice management system.",
        tags: ["React", "Supabase", "Tailwind"],
        previewUrl: "#",
        image: "/projects/ppms.png",
      },
    ],
  },

  bn: {
    projectSectionTitle: "নির্বাচিত প্রজেক্ট",
    projectSectionDesc: "সাম্প্রতিক কিছু কাজ যা আমি সম্পন্ন করেছি।",
    viewAll: "সব দেখুন",
    projects: [
      {
        id: 1,
        title: "পঞ্চায়েত রাজ প্রজেক্ট ম্যানেজমেন্ট সিস্টেম (PPMS)",
        description:
          "ওড়িশা সরকারের জন্য তৈরি একটি ই-গভর্নেন্স সল্যুশন।",
        tags: ["Laravel", "MySQL", "jQuery", "Bootstrap 5"],
        previewUrl: "https://ppms.odisha.gov.in/",
        image: "/projects/ppms.png",
      },
      {
        id: 2,
        title: "আইটি ড্যাশবোর্ড",
        description:
          "রিয়েল-টাইম ডেটা মনিটরিং এবং ইনভয়েস ম্যানেজমেন্ট সিস্টেম।",
        tags: ["React", "Supabase", "Tailwind"],
        previewUrl: "#",
        image: "/projects/ppms.png",
      },
    ],
  },
};

/* =========================
   COMPONENT
========================= */
export default function Project() {
  const { lang } = useLang();

  const data = content[lang];

  const { projectSectionTitle, projectSectionDesc, viewAll, projects } = data;

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold">
              {projectSectionTitle}
            </h3>
            <p className="text-slate-500 mt-2">
              {projectSectionDesc}
            </p>
          </div>

          <button className="text-blue-600 font-semibold hover:underline">
            {viewAll}
          </button>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 transition-all hover:shadow-xl"
            >
              
              {/* Image */}
              <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/40 backdrop-blur-sm z-10">
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Preview
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded uppercase font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}