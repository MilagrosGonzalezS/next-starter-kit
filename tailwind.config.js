/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}'
]
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      md: '1.5 rem',
      lg: '2rem'
    }
  }
}
export const plugins = []
