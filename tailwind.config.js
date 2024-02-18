/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "rk-brand": {
        //   DEFAULT: "#D9D9D9", // Default color
        //   dark: "#464646", // Dark color, Text,Call to action
        //   light: "#FFFFFF", // Light color,Text
        //   accent1: "#F57E7E", // Accent color 1
        //   accent2: "#E8EDAA", // Accent color 2
        //   accent3: "#AAACED", // Accent color 3
        // },
        "rk-alto": {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#d9d9d9",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        "rk-masala": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#464646",
          900: "#3d3d3d",
          950: "#262626",
        },
        "rk-geraldine": {
          50: "#fef2f2",
          100: "#fde3e3",
          200: "#fdcbcb",
          300: "#faa7a7",
          400: "#f57e7e",
          500: "#ea4949",
          600: "#d72b2b",
          700: "#b52020",
          800: "#961e1e",
          900: "#7c2020",
          950: "#430c0c",
        },
        "rk-primrose": {
          50: "#f8faec",
          100: "#eff4cd",
          200: "#e8edaa",
          300: "#dade66",
          400: "#d3d23c",
          500: "#c4bc2e",
          600: "#a99825",
          700: "#877121",
          800: "#715b22",
          900: "#614c22",
          950: "#382910",
        },
        "rk-biloba-flower": {
          50: "#f1f1fc",
          100: "#e5e7fa",
          200: "#cfd1f6",
          300: "#aaaced",
          400: "#9793e6",
          500: "#8579db",
          600: "#745ecd",
          700: "#654eb4",
          800: "#514291",
          900: "#453b74",
          950: "#292244",
        },
        "rk-alabaster": {
          50: "#fafafa",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
      },
    },
  },
  plugins: [],
};
