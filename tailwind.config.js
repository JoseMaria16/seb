/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "home": "linear-gradient(149deg, #ffffff 45%, #5e93eb 98%, #ffffff 100%);",
        "text" : "linear-gradient(90deg, rgba(202,60,60,1) 0%, rgba(235,53,53,1) 25%, rgba(51,73,84,1) 72%, rgba(0,0,0,1) 100%)",
        "button": "linear-gradient(90deg, rgba(202,60,60,1) 0%, rgba(235,53,53,1) 25%, rgba(51,73,84,1) 72%, rgba(0,0,0,1) 100%)"
      },
    },
  },
  plugins: [],
}
