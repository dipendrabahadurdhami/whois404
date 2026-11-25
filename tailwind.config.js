const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        card: token("card"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
