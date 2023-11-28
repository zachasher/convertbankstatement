import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import 'styles/main.css';

// import 'public/fonts/fontstyle.css';

import Hero from '@/components/ui/Hero';
import Details from '@/components/ui/Details';
import FAQ from '@/components/ui/FAQ';

// import localFont from 'next/font/local'

// import { localFont } from 'next/font/local'

// const arimo = localFont({
//   src: '../public/fonts/Arimo-Regular.woff2',
//   display: 'swap',
//   variable: '--font-arimo',
// })

// import { Arimo } from 'next/font/google'
 
// // If loading a variable font, you don't need to specify the font weight
// const arimo = Arimo({
//   subsets: ['latin'],
//   display: 'swap',
// })

import { Arimo } from 'next/font/google'
 
const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
})

const meta = {
  title: 'Bank Statement Converter',
  description: 'Brought to you by Vercel, Stripe, and Supabase.',
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

// import { Arimo } from 'next/font/local'
 
// const inter = Arimo({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-arimo',
// })

 
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${Arimo.variable}`}>
//       <body>{children}</body>
//     </html>
//   )
// }
