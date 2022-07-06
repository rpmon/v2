/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		screens: {
			sm: { max: '640px' },
			md: { max: '768px' },
			lg: { max: '1024px' },
			xl: { max: '1280px' },
			'2xl': { max: '1536px' },
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
		colors: {
			white: '#f7fbfc',
			grey: '#d6e6f2',
			light: '#b9d7ea',
			sky: '#b9d7ea',
			blue: '#769fcd',
			purple: '#9f7aea',
			darksky: '#5ea0eb',
			green: '#64ffda',
			black: '#212121',
			slate: '#323232',
			aqua: '#0d7377',
			cyan: '#14ffec',
			darkblue: '#00008B',
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
		},
	},
	plugins: [],
};
