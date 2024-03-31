module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#DCC38B",
        textGray: "#898989",
        lightGray: "#C3D2DC",
        footerBg: "#2E2124",
      },
      boxShadow: {
        selected: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        blockShadow: "0px 0px 20px 0px #00000014",
      },
    },
  },

  plugins: [],
};
