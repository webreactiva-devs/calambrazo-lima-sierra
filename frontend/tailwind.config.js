/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'dark:text-gray',
    'dark:border-[#c1a178]',
    'bg-primary-700',
    'hover:bg-primary-800',
    'focus:ring-primary-300',
    'dark:bg-green-600',
    'dark:hover:bg-primary-700',
    'dark:focus:ring-primary-800',
    'text-primary-600',
    'dark:text-primary-500',
    'text-gray-500',
    'dark:text-gray-400',
    'text-gray-900',
    'dark:text-gray-900'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          600: '#c1a178',
          700: '#a38264',
          800: '#8b6e56',
        },
        gray: {
          DEFAULT: '#6b7280',
          400: '#9ca3af',
          500: '#6b7280',
          700: '#374151',
          900: '#111827'
        }
      }
    },
  },
  plugins: [],
}

