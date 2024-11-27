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
      keyframes: {
        circlePulse: {
          '0%': {
            strokeWidth: '24',
          },
          '50%': {
            strokeWidth: '40',
          },
          '100%': {
            strokeWidth: '24',
          }
        }
      },
      animation: {
        'circle-pulse': 'circlePulse 2s ease-in-out infinite',
      }
    },
  }, 
  plugins: [],
} satisfies Config;
