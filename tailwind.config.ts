import type {Config} from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@solana/wallet-adapter-react-ui/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#fff',
        black: '#000',
        'violet-light': '#6120FD',
        'violet-dark': '#5000FF',
        accent: '#33FFEE',
        'accent-hover': '#E64DFF'
      },
    },
  }, 
  plugins: [],
} satisfies Config;
