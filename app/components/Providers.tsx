'use client';

import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

// providers.tsx ফাইলের একদম উপরে যোগ করুন
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) return;
    originalError.apply(console, args);
  };
}

// ThemeProvider-কে ডাইনামিকভাবে ইমপোর্ট করা হচ্ছে
const NextThemesProvider = dynamic(
  () => import('next-themes').then((mod) => mod.ThemeProvider),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster position="bottom-right" />
      {children}
    </NextThemesProvider>
  );
}
