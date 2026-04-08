import SideNav from '@/app/ui/dashboard/sidenav';
import Navbar from '../components/Navbar';
 export const metadata = {
  title: {
    template: '%s | Portfolio',
    default: 'Portfolio',
  },
  description: 'The best app ever.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Navbar />
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}