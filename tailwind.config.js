/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      vazir: "vazir",
    },
    extend: {
      padding: {
        20: "20px",
      },
      margin: {
        13: "13px",
      },
      space: {
        6.5: "6.5px",
      },
      fontSize: {
        10: [
          "10rem",
          {
            lineHeight: "5",
            letterSpacing: ".3",
            fontWeight: "bold",
          },
        ],
      },
      listStyleImage: {
        checked: "url(../src/checked.png)",
      },
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
