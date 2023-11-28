// const { fontFamily } = require('tailwindcss/defaultTheme');

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: ['class', '[data-theme="dark"]'],
//   content: [
//     'app/**/*.{ts,tsx}',
//     'components/**/*.{ts,tsx}',
//     'pages/**/*.{ts,tsx}'
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['var(--font-sans)', ...fontFamily.sans]
//       }
//     }
//   },
//   plugins: []
// };

// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     './pages/**/*.{js,ts,jsx,tsx}',
// //     './components/**/*.{js,ts,jsx,tsx}',
// //     './app/**/*.{js,ts,jsx,tsx}',
// //   ],
// //   theme: {
// //     extend: {
// //       fontFamily: {
// //         sans: ['var(--font-arimo)', 'sans-serif'],
// //       },
// //     },
// //   },
// //   plugins: [],
// // }

// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     './pages/**/*.{js,ts,jsx,tsx}',
// //     './components/**/*.{js,ts,jsx,tsx}',
// //     './app/**/*.{js,ts,jsx,tsx}',
// //   ],
// //   theme: {
// //     extend: {
// //       fontFamily: {
// //         sans: ['var(--font-arimo)'],
// //       },
// //     },
// //   },
// //   plugins: [],
// // }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-arimo)'],
      },
    },
  },
  plugins: [],
}
