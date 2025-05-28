/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        ring: 'var(--color-ring)',
        // Dacă mai ai alte variabile folosite ca culori, adaugă-le aici
      },
      outline: {
        ring: ['2px solid var(--color-ring)', '0'], // definește outline-ring
      },
    },
  },
  plugins: [],
}
