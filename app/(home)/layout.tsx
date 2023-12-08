import SupabaseProvider from '../supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import 'styles/main.css';

import Hero from '@/components/ui/Hero';
import Details from '@/components/ui/Details';
import FAQ from '@/components/ui/FAQ';

import { Arimo } from 'next/font/google'
 
const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
})

const meta = {
  title: 'Convert PDF Bank Statements to Excel/CSV (FREE)',
  description: 'Accurate AI-Powered conversions of any bank statement worldwide into Excel/CSV. Start converting now for easier financial management.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://subscription-starter.vercel.app',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {

  return (
    <html lang="en" className={`${arimo.variable}`}>
      <body className='bg-white loading flex flex-col items-center'>
        <div className='w-5/6 md:w-2/3 flex flex-col items-center justify-center'>
          <SupabaseProvider>
          {/* @ts-expect-error */}
          <Navbar />
          <Hero/>
          <Details/>
          <FAQ/>
          {/* <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main> */}
          
          <Footer />
        </SupabaseProvider>
        </div>
      </body>
    </html>
  );
}
