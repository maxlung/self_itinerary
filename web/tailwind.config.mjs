/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'zen-maru': ['"Zen Maru Gothic"', 'sans-serif'],
        'sans': ['"Zen Maru Gothic"', 'sans-serif', 'system-ui'],
      },
      colors: {
        'rice': '#FAF6F1',
        'rice-dark': '#EBE6E1',
        'ink': '#2D2D2D',
        'ink-light': '#595959',
        'accent': '#D64B4B', // 日式红色
        'accent-light': '#F7CAC3', // 浅粉色
        'accent-dark': '#8C3B3B', // 深红色
      },
      boxShadow: {
        'washi': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
} 