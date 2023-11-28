import Link from 'next/link';
import { createServerSupabaseClient } from '@/app/supabase-server';

import Logo from '@/components/icons/Logo';
import SignOutButton from './SignOutButton';

import s from './Navbar.module.css';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div>
        <div className="relative flex flex-row justify-between py-4 align-center items-center md:py-3">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              {/* <Logo /> */}
              <img src="bsc-logo.webp" className='w-12'/>
              <p className='text-black pl-2 font-bold'>Statement Converter</p>
            </Link>
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/" className={s.link}>
                Pricing
              </Link>
              {user && (
                <Link href="/account" className={s.link}>
                  Account
                </Link>
              )}
            </nav>
          </div>
          <div className="flex justify-end flex-1 space-x-8">
            {user ? (
              <SignOutButton />
            ) : (
              <div><Link href="/login" className={s.link}>
                Log in
              </Link>
              <Link href="/signup" className={s.navbarbutton}>
                Sign up
              </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
