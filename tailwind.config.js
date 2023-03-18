/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'soft-orange': 'hsl(var(--soft-orange) / <alpha-value>)',
				'soft-red': 'hsl(var(--soft-red) / <alpha-value>)',
				'off-white': 'hsl(var(--off-white) / <alpha-value>)',
				'greyish-blue': 'hsl(var(--greyish-blue) / <alpha-value>)',
				'dark-greyish-blue': 'hsl(var(--dark-greyish-blue) / <alpha-value>)',
				'very-dark-blue': 'hsl(var(--very-dark-blue) / <alpha-value>)',
			},
		},
	},
	plugins: [],
};
