/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          // Palette "Nuit Étoilée" - Sophistiquée et moderne
          primary: {
            DEFAULT: '#1A1F3A', // Bleu nuit profond
            light: '#2E3856',
            dark: '#0F1419',
          },
          accent: {
            DEFAULT: '#E8D5B7', // Beige doré clair
            light: '#F2E6D8',
            dark: '#D4C0A0',
          },
          secondary: {
            DEFAULT: '#4A5568', // Gris ardoise
            light: '#5F6B7A',
            dark: '#3A4453',
          },
          neutral: {
            cream: '#FAFAF8',
            stone: '#F5F5F0',
            gray: '#6B6B6B',
            border: '#E8E8E8',
          }
        },
        fontFamily: {
          // Typographies élégantes
          serif: ['Playfair Display', 'Georgia', 'serif'],
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        spacing: {
          '18': '4.5rem',
          '22': '5.5rem',
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-out forwards',
          'slide-up': 'slideUp 0.8s ease-out forwards',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(40px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        boxShadow: {
          'elegant': '0 10px 40px rgba(0, 0, 0, 0.08)',
          'soft': '0 4px 20px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    plugins: [],
  }