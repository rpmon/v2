/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Heebo', 'sans-serif'],
			mono: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xxs: '0.75rem',
			xs: '0.8125rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			xxl: '1.375rem',
			heading: '2rem',
		},
		colors: {
			white: '#f7fbfc',
			grey: '#d6e6f2',
			light: '#b9d7ea',
			sky: '#b9d7ea',
			blue: '#769fcd',
			purple: '#9f7aea',
			green: '#64ffda',
			black: '#212121',
			slate: '#323232',
			aqua: '#0d7377',
			cyan: '#14ffec',
		},
	},
	plugins: [],
};
