/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',      // Vibrant purple
        secondary: '#EC4899',    // Pink
        accent: '#F59E0B',       // Golden accent
        warm: {
          50: '#FDFBF7',
          100: '#F9F5ED',
          200: '#F0E8D6',
          300: '#E4D4B8',
          400: '#D4BC94',
          500: '#C4A470',
          600: '#B08A5A',
          700: '#8B7355',
          800: '#6F5C44',
          900: '#5D4E37',
        },
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6B21A8',
          900: '#581C87',
        },
        pink: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.8s ease-out 0.1s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.8s ease-out 0.3s forwards',
        'fade-in-up-delay-4': 'fadeInUp 0.8s ease-out 0.4s forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}
