/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'], // Fonte mais "dev"
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Archivo Black', 'Inter', 'sans-serif'],
          },
          colors: {
            'n8n-red': '#ff6d5a',
            'n8n-dark': '#1a1a1a',
            'electric-cyan': '#00f0ff',
            'neon-yellow': '#ccff00',
            'paper': '#f4f4f0',
          },
          boxShadow: {
            'hard': '6px 6px 0px 0px #000000',
            'hard-xl': '12px 12px 0px 0px #000000',
            'hard-hover': '2px 2px 0px 0px #000000',
            'glow': '0 0 10px rgba(255, 109, 90, 0.5)',
          },
          animation: {
            'marquee': 'marquee 20s linear infinite',
            'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'float': 'float 3s ease-in-out infinite',
          },
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          }
        },
      },
      plugins: [],
    }
