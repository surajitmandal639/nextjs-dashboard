import React from 'react'
import Image from 'next/image' // Image কম্পোনেন্ট ইমপোর্ট করুন

export default function Project() {
  const projects = [
    {
        id: 1,
        title: "Panchayati Raj Project Management System (PPMS)",
        description: "A comprehensive e-governance solution developed for the Government of Odisha. This platform streamlines infrastructure project tracking, fund allocation, and real-time monitoring across various Panchayats.",
        tags: ["Laravel", "MySQL", "jQuery", "Bootstrap 5"],
        previewUrl: "https://ppms.odisha.gov.in/",
        image: "/projects/ppms.png" // public/projects/ppms.png ফোল্ডারে ইমেজটি রাখুন
    },
    {
      id: 2,
      title: "IT Dashboard",
      description: "রিয়েল-টাইম ডেটা মনিটরিং এবং ইনভয়েস ম্যানেজমেন্ট সিস্টেম।",
      tags: ["React", "Supabase", "Tailwind"],
      previewUrl: "#",
      image: "/projects/dashboard.jpg"
    },
    {
      id: 3,
      title: "Inventory System",
      description: "ব্যবসার স্টক এবং সেলস ট্র্যাক করার জন্য একটি ইনভেন্টরি সফটওয়্যার।",
      tags: ["Laravel", "MySQL", "Inertia"],
      previewUrl: "#",
      image: "/projects/inventory.jpg"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "একটি আধুনিক ই-কমার্স সল্যুশন যেখানে পেমেন্ট গেটওয়ে যুক্ত আছে।",
      tags: ["Next.js", "Laravel", "Postgres"],
      previewUrl: "#",
      image: "/projects/ecommerce.jpg" 
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold">Selected Projects</h3>
            <p className="text-slate-500 mt-2">সাম্প্রতিক কিছু কাজ যা আমি সম্পন্ন করেছি।</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">View All</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 transition-all hover:shadow-xl">
              
              {/* Image Container */}
              <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Preview Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/40 backdrop-blur-sm z-10">
                  <a href={project.previewUrl} target="_blank" rel="noopener noreferrer"  className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Preview
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded uppercase font-bold">
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
  )
}
