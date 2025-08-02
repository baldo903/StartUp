module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#f4f4f6', // $color-1
        secondary: '#33333b', // $color-5
        gray2: '#e6e6e9', // $color-2
        gray3: '#9999a1', // $color-3
        gray4: '#66666e', // $color-4
        // Add dark theme colors
        darkbg: '#18181b',
        darkprimary: '#23232a',
        darksecondary: '#fafafc',
      },
      fontFamily: {
        roboto: ['RobotoFlex', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
