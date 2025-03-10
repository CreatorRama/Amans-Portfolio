export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure it includes JSX/TSX
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};