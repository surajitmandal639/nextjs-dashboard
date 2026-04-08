import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Providers } from './components/Providers';
import { LangProvider } from './context/LangContext';

export const metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Portfolio',
  },
  description: 'The best app ever.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-950 transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
