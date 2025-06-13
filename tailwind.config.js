// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         darkblue: "#05163b",
//       },
//       fontSize: {
//         13: "13px",
//       },
//       lineHeight: {
//         15.7: "15.7px",
//       },
//       keyframes: {
//         colorChange: {
//           "0%": { backgroundColor: "#0F172A" },
//           "20%": { backgroundColor: "#1E293B" },
//           "50%": { backgroundColor: "white" },
//           "75%": { backgroundColor: "#05163B" },
//           "100%": { backgroundColor: "#111827" },
//         },
//         typing: {
//           "from": { width: "0%" },
//           "to": { width: "100%" },
//         },
//         blink: {
//           "50%": { borderColor: "transparent" },
//         },
//       },
//       animation: {
//         "color-change": "colorChange 8s infinite alternate",
//         typing: "typing 6s steps(90, end) forwards", // Adjusted steps to match the text length
//         blink: "blink 0.7s step-end infinite",
//       },
//       fontFamily: {
//         productSans: ["Product Sans", "sans-serif"],
//       },
//       screens: {
//         // Custom breakpoints for responsiveness
//         xs: "480px", // Custom small screen
//         sm: "640px", // Tailwind's default sm breakpoint
//         md: "768px", // Tailwind's default md breakpoint
//         lg: "1024px", // Tailwind's default lg breakpoint
//         xl: "1280px", // Tailwind's default xl breakpoint
//         "2xl": "1536px", // Tailwind's default 2xl breakpoint
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',  // 👈 add this line
  theme: {
    extend: {
      colors: {
        darkblue: "#05163b",
      },
      fontSize: {
        13: "13px",
      },
      lineHeight: {
        15.7: "15.7px",
      },
      keyframes: {
        colorChange: {
          "0%": { backgroundColor: "#0F172A" },
          "20%": { backgroundColor: "#1E293B" },
          "50%": { backgroundColor: "white" },
          "75%": { backgroundColor: "#05163B" },
          "100%": { backgroundColor: "#111827" },
        },
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        "color-change": "colorChange 8s infinite alternate",
        typing: "typing 6s steps(90, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
      fontFamily: {
        productSans: ["Product Sans", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
