import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mx-auto md:px-6 bg-white w-full">
      <div className="flex flex-col md:flex-row justify-between w-full pb-4 md:py-12 text-black transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-white">
        <div className="col-span-1 lg:col-span-2 md:w-80">
            <Link href="/" className="flex items-center flex-initial font-bold mb-4 md:mr-24" aria-label="Statement Converter Logo">
              {/* <Logo /> */}
              <img src="bsc-logo.webp" className='w-12' alt='Statement Converter Logo'/>
              <p className='text-black pl-2 font-bold'>Statement Converter</p>
            </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold text-black">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className="text-black transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <p className='font-bold'>info@statementconverter.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row bg-white">
        <div>
          <span className='text-black'>
            &copy; {new Date().getFullYear()} Statment Converter, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
