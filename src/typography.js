import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Heebo",
      styles: ["800", "700", "500", "400", "300"],
    },
    {
      name: "Merriweather",
      styles: ["300"],
    },
  ],
  headerFontFamily: [
    "Heebo",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Heebo", "Georgia", "serif"],
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export const { scale, rhythm, options } = typography
export default typography
