"use client";

import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden relative">
      
      {/* ⭐ Stars Background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      {/* 🚀 Floating Astronaut */}
      <div className="relative z-10 animate-float">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
          alt="astronaut"
          className="w-40 md:w-56 drop-shadow-2xl"
        />
      </div>

      {/* 🧠 Text Content */}
      <div className="text-center mt-8 z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          404
        </h1>

        <p className="text-xl mt-4 text-slate-300">
          Oops! You are lost in space 🚀
        </p>

        <p className="text-sm text-slate-400 mt-2">
          Je page ta khujcho, seta ei galaxy te nei 😅
        </p>

        {/* 🔗 Button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg transition-all duration-300"
        >
          Go Home
        </Link>
      </div>

      {/* 🎬 Animation */}
      <style jsx>{`
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;