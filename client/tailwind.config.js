module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ripple: (theme) => ({
      colors: theme("colors"),
      darken: 0.1,
    }),
    extend: {},
  },
  plugins: [require("tailwindcss-ripple")()],
};
