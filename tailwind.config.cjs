/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{ts,tsx,astro}',
    './components/**/*.{ts,tsx,astro}',
    './app/**/*.{ts,tsx,astro}',
    './src/**/*.{ts,tsx,astro}',
  ],
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
}
