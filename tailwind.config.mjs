/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--brand-50)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          900: 'var(--brand-900)',
          950: 'var(--brand-950)',
        },
        dark: {
          800: 'var(--dark-800)',
          900: 'var(--dark-900)',
        }
      }
    },
  },
  plugins: [],
}
