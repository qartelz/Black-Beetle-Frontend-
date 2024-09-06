/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-stock-card': 'linear-gradient(180deg, #2F2F2F 0%, rgba(41, 29, 0, 0.74) 49.5%, #2F2F2F 100%)',
      },
      backgroundColor: {
        success: "#1DF81F",
        danger: "#FF135B",
      },
      colors: {
        success: "#1DF81F",
        danger: "#FF135B",
      },
      animation: {
        'expand-y': 'expand-y 0.3s',
      },
      keyframes: {
        'expand-y': {
          '0%': { scaleY: '0.7',opacity: '0' },
          '100%': { scaleY: '1',opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
