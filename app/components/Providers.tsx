"use client";

import { Toaster } from 'react-hot-toast';
import { LangProvider } from '../context/LangContext';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import Loader from './Loader';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LangProvider>
        <Toaster position="bottom-right" />

        {/* 🔥 mounted safe rendering */}
        {mounted ? children : <Loader />}
      </LangProvider>
    </ThemeProvider>
  );
}