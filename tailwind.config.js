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
		colors: {
			white: '#f7fbfc',
			grey: '#d6e6f2',
			light: '#b9d7ea',
			sky: '#b9d7ea',
			blue: '#769fcd',
			green: '#64ffda',
			black: '#212121',
			slate: '#323232',
			aqua: '#0d7377',
			cyan: '#14ffec',
		},
	},
	plugins: [],
};
