"use client";

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


import { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
        <div className="flex flex-col justify-between h-6 w-8">
          <span
            className={`block h-1 w-full rounded bg-black transition-all duration-300 ${
              isOpen ? 'transform rotate-45 translate-y-2' : 'translate-y-0'
            }`}
          ></span>
          <span
            className={`block h-1 w-full rounded bg-black transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-1 w-full rounded bg-black transition-all duration-300 ${
              isOpen ? 'transform -rotate-45 translate-y-2' : 'translate-y-0'
            }`}
          ></span>
        </div>
      </button>
      {isOpen && (
        <button onClick={toggleMenu} className="fixed top-0 left-0 w-full h-full bg-black opacity-50" />
      )}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 flex items-center justify-center">
          <div className="bg-white p-4">
            <ul className="py-4">
              <li className="px-4 py-2 text-black">Menu Item 3</li>
              <li className="px-4 py-2 text-black">Menu Item 1</li>
              <li className="px-4 py-2 text-black">Menu Item 2</li>
            </ul>
            <button onClick={toggleMenu} className="block mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;




