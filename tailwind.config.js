module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#707070", "900_26": "#07143c26" },
        white: { A700_e5: "#ffffffe5", A700: "#ffffff" },
        blue: { 50: "#deeffd", A700: "#2c5ff6" },
        amber: { A400: "#ffc700", A400_4c: "#ffc7004c" },
        orange: { 50: "#ffebd8" },
        black: { 900: "#000000" },
        cyan: { 50: "#defdf6", "50_01": "#d9fcf5" },
        indigo: { A700_35: "#144bee35" },
        purple: { 50: "#fcd9ff", "50_01": "#fadffc" },
        blue_gray: { 900: "#1f2041" },
        deep_orange: { 400: "#fd883d" },
      },
      boxShadow: {
        bs2: "0px 4px  4px 0px #ffc7004c",
        bs: "0px 13.43px  39px 0px #144bee35",
        bs1: "0px 3.2px  39px 0px #07143c26",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
