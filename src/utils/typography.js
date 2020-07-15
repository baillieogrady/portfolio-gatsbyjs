import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.7,
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;