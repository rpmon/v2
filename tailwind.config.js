/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		screens: {
			'2xl': { max: '1536px' },
			xl: { max: '1280px' },
			lg: { max: '1024px' },
			md: { max: '768px' },
			sm: { max: '640px' },
			xs: { max: '480px' },
			'xs-min': '480px',
			'sm-min': '640px',
			'md-min': '768px',
			'lg-min': '1024px',
			'xl-min': '1280px',
			'2xl-min': '1536px',
			'xs-md': { raw: '(max-width: 480px) and (min-height: 700px)' },
		},
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
			typography: 'clamp(1rem, 3vw + 1rem, 4rem)',
		},

		extend: {
			animation: {
				'loader-before': 'typewriter 2s steps(24) 1s forwards',
				'loader-after':
					'typewriter 2s steps(24) 1s forwards, blink 750ms steps(24) infinite',
			},
			keyframes: {
				typewriter: {
					'100%': { left: '100%' },
				},
				blink: {
					'100%': { background: 'transparent' },
				},
			},
			colors: {
				white: '#f7fbfc',
				grey: '#d6e6f2',
				light: '#b9d7ea',
				sky: '#b9d7ea',
				lightblue: '#769fcd',
				purple: '#9f7aea',
				darksky: '#5ea0eb',
				green: '#64ffda',
				black: '#212121',
				slate: '#323232',
				'slate-light': '#3c3c3c',
				aqua: '#0d7377',
				cyan: '#14ffec',
				yellow: '#ffc107',
				darkblue: '#00008B',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.link': {
					'text-decoration': 'none',
					'text-decoration-skip-ink': 'auto',
					position: 'relative',
					cursor: 'pointer',
					transition: 'var(--transition)',
				},
				'.flex-center': {
					display: 'center',
					'justify-content': 'center',
					'align-items': 'center',
				},
			});
		}),
	],
};
