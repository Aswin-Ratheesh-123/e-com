import './globals.css';
import type { Metadata } from 'next';
import { Poppins as PoppinsFont } from 'next/font/google';
import Navbar from './components/nav/NavBar';
import Footer from './components/Footer/Footer';

const poppins = PoppinsFont({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'e-com',
  description: 'e commerce app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${poppins.className} text-slate-700'}>
        < div className="flex flex-col min-h-screen" >
          <Navbar />
          <main className="flex-grow" >{children}</main>
          <Footer />
        </div>
      </body>
    </html >
  );
};