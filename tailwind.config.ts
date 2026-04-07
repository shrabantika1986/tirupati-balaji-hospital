import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#e6f0fb',
          100: '#cce1f7',
          200: '#99c3ef',
          300: '#66a5e7',
          400: '#3387df',
          500: '#0057A8',
          600: '#004e97',
          700: '#003d77',
          800: '#002c56',
          900: '#001b35',
          DEFAULT: '#0057A8',
        },
        secondary: {
          50:  '#e6f7f4',
          100: '#ccefe9',
          200: '#99dfd3',
          300: '#66cfbd',
          400: '#33bfa7',
          500: '#009B8A',
          600: '#00887a',
          700: '#006b60',
          800: '#004e46',
          900: '#00312c',
          DEFAULT: '#009B8A',
        },
        accent: {
          50:  '#fdf3e8',
          100: '#fbe7d1',
          200: '#f7cfa3',
          300: '#f3b775',
          400: '#ef9f47',
          500: '#E8832A',
          600: '#d07525',
          700: '#a35c1d',
          800: '#764315',
          900: '#492a0d',
          DEFAULT: '#E8832A',
        },
        neutral: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(135deg, rgba(0,87,168,0.92) 0%, rgba(0,155,138,0.85) 100%)",
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,87,168,0.10)',
        'card-hover': '0 8px 40px rgba(0,87,168,0.18)',
        'button': '0 4px 16px rgba(232,131,42,0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}

export default config
