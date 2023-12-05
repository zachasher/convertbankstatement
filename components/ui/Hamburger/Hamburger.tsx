'use client';

// // import React, { useState } from 'react';

// // function Hamburger() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handleClick = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <button
// //       onClick={handleClick}
// //       className="flex flex-col justify-center items-center bg-black"
// //     >
// //       <span
// //         className={`bg-steel-500 block transition-all duration-300 ease-out
// //                     h-0.5 w-6 rounded-sm ${
// //                       isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
// //                     }`}
// //       ></span>
// //       <span
// //         className={`bg-steel-500 block transition-all duration-300 ease-out
// //                     h-0.5 w-6 rounded-sm my-0.5 ${
// //                       isOpen ? 'opacity-0' : 'opacity-100'
// //                     }`}
// //       ></span>
// //       <span
// //         className={`bg-steel-500 block transition-all duration-300 ease-out
// //                     h-0.5 w-6 rounded-sm ${
// //                       isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
// //                     }`}
// //       ></span>
// //     </button>
// //   );
// // }

// // export default Hamburger;

// import React, { useState } from 'react';

// function Hamburger({ isOpen, toggleMenu }) {

//   const handleClick = () => {
//     toggleMenu(!isOpen);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="flex flex-col justify-center items-center bg-black p-2 focus:outline-none"
//     >
//       <span
//         className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
//           isOpen ? 'transform rotate-45 translate-y-1' : ''
//         }`}
//       ></span>
//       <span
//         className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
//           isOpen ? 'opacity-0' : ''
//         }`}
//       ></span>
//       <span
//         className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
//           isOpen ? 'transform -rotate-45 translate-y-1' : ''
//         }`}
//       ></span>
//     </button>
//   );
// }

// export default Hamburger;
import s from './Hamburger.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div className="flex items-center md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none" aria-label='Hambuger Menu'>
        <div className="flex items-center justify-center h-6 w-8">
          {!isOpen && (
            <div className="flex flex-col justify-between h-6 w-8">
              <span className="block h-1 w-full rounded bg-black transition-all duration-300"></span>
              <span className="block h-1 w-full rounded bg-black transition-opacity duration-300"></span>
              <span className="block h-1 w-full rounded bg-black transition-all duration-300"></span>
            </div>
          )}
          {isOpen && (
            <div className="flex flex-col items-center justify-center h-6 w-8">
              <span className="block h-1 w-full rounded translate-y-0.5 bg-black transition-all duration-300 transform rotate-45"></span>
              <span className="block h-1 w-full rounded -translate-y-0.5 bg-black transition-all duration-300 transform -rotate-45"></span>
            </div>
          )}
        </div>
      </button>
      {isOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-48 left-0 bg-black opacity-50"
        />
      )}
      {isOpen && (
        <div className="fixed top-24 left-0 w-full z-10 flex items-center justify-center">
          <div className="bg-white h-96 p-4 w-full flex flex-col items-center justify-center drop-shadow-xl border-black border-opacity-10 border-b-2">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex w-full flex-col items-center justify-center mb-16">
                <Link href="/login" className={s.navbarbutton}>
                  Sign up
                </Link>
                <Link href="/login" className={s.link}>
                  Log in
                </Link>
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <a href="mailto:info@statementconverter.io" className='text-black text-lg font-bold py-4 hover:text-[#1FAB89]'>Contact</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
