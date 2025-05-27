/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your file structure
  ],
  theme: {
    extend: {
      keyframes: {
               fadeInDown: {
                 '0%': { opacity: 0, transform: 'translateY(-20px)' },
                 '100%': { opacity: 1, transform: 'translateY(0)' },
               },
               fadeInLeft: {
                 '0%': { opacity: 0, transform: 'translateX(-20px)' },
                 '100%': { opacity: 1, transform: 'translateX(0)' },
               },
               fadeIn: {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
                fadeInRight: {
                 '0%': { opacity: 0, transform: 'translateX(20px)' },
                 '100%': { opacity: 1, transform: 'translateX(0)' },
               },
             },
             animation: {
               'fade-in-down': 'fadeInDown 1s ease-out',
               fade: "fadeIn 1s ease-in-out",

               'fade-in-left': 'fadeInLeft 1s ease-out',
               'fade-in-right': 'fadeInRight 1s ease-out',
            },
    },
  },
  plugins: [],
};



// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeInDown: {
//           '0%': { opacity: 0, transform: 'translateY(-20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//         fadeInLeft: {
//           '0%': { opacity: 0, transform: 'translateX(-20px)' },
//           '100%': { opacity: 1, transform: 'translateX(0)' },
//         },
//         fadeInRight: {
//           '0%': { opacity: 0, transform: 'translateX(20px)' },
//           '100%': { opacity: 1, transform: 'translateX(0)' },
//         },
//       },
//       animation: {
//         'fade-in-down': 'fadeInDown 1s ease-out',
//         'fade-in-left': 'fadeInLeft 1s ease-out',
//         'fade-in-right': 'fadeInRight 1s ease-out',
//       },
//     },
//   },
// };
