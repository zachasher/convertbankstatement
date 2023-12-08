import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mx-auto md:px-6 bg-white w-full">
      <div className="flex flex-col md:flex-col justify-between w-full pb-4 md:py-8 text-black transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600 bg-white">
        <div className="flex flex-row justify-between">
          <div className="col-span-1 lg:col-span-2 md:w-80">
            <Link
              href="/"
              className="flex items-center flex-initial font-bold mb-4 md:mr-24"
              aria-label="Statement Converter Logo"
            >
              {/* <Logo /> */}
              <img
                src="bsc-logo.webp"
                className="w-12"
                alt="Statement Converter Logo"
              />
              <p className="text-black pl-2 font-bold">ConvertBankStatement</p>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <p className="font-bold text-black">LEGAL</p>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/privacy-policy"
                  className="text-black transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/terms-of-use"
                  className="text-black transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <a href="mailto:info@statementconverter.io" className="font-bold">info@convertbankstatement.io</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8">
          <a href="https://www.facebook.com/convertbankstatement/" target="_blank">
            <img
              src="facebook-logo.png"
              className="w-8 h-8 mr-2"
              alt="Facebook Logo"
            />
          </a>
          <a href="https://twitter.com/bankconverter" target="_blank">
            <img
              src="twitter-logo.png"
              className="w-8 h-8 ml-2"
              alt="Twitter Logo"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between py-6 space-y-4 md:flex-row bg-white">
        <div>
          <span className="text-black">
            &copy; {new Date().getFullYear()} ConvertBankStatement, Inc. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
