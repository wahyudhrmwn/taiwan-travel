import type { TailwindConfig } from 'tailwindcss';
import daisyui from 'daisyui';

const config: TailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Pastikan mencakup folder 'app'
    './components/**/*.{js,ts,jsx,tsx}', // Jika ada folder components
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'taiwan-logo': "url('/assets/images/taiwan-logo.png')",
        'about-us': "url('/assets/images/about-us.png')",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
