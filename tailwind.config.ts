import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		colors: {
			'dark-main': '#323232',
			'dark-dark': '#212121',
			white: '#fff',
			azure: '#14FFEC',
			'dark-green': '#084C4F',
			red: '#E4473F',
			green: '#2D8F38',
			'light-main': '#F1FCFF',
			'light-light': '#D2E1E9',
			'light-blue': '#0091DF',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
export default config
