import Navbar from '../components/Navbar';

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      {/* চাইলে এখানে Footer যোগ করতে পারেন */}
    </>
  );
}
