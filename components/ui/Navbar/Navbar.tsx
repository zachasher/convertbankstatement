import Hamburger from '../Hamburger';
import s from './Navbar.module.css';
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import React from 'react';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      {/* <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a> */}
      <div>
        <div className="relative flex flex-row md:flex-row justify-between py-4 align-center items-center md:py-3">
          <div className="flex items-center justify-between flex-1 mb-8 md:mb-0">
            <Link href="/" className={s.logo} aria-label="Logo">
              {/* <Logo /> */}
              <img src="bsc-logo.webp" className="w-12 md:w-12" />
              <p className="text-black pl-2 text-xl font-bold">
                Statement Converter
              </p>
            </Link>
            <Hamburger />
            <nav className="hidden ml-6 space-x-2 lg:block">
              {/* <Link href="/" className={s.link}>
                Pricing
              </Link> */}
              {user && (
                <Link href="/account" className={s.link}>
                  Account
                </Link>
              )}
            </nav>
          </div>
          
          <div className="hidden md:visible md:flex justify-end flex-1 space-x-8">
            {user ? (
              <SignOutButton />
            ) : (
              <div>
                <Link href="/login" className={s.link}>
                  Log in
                </Link>
                <Link href="/login" className={s.navbarbutton}>
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
