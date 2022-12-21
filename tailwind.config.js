/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: [
		"./public/index.html",
		"./src/**/*.{html,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			screens: {
				mobile: '0px',
				'mobile-md': '320px',
				'mobile-lg': '375px',
				tablet: '425px',
				'tablet-md': '600px',
				'tablet-lg': '768px',
				laptop: '1024px',
				'laptop-lg': '1366px',
				desktop: '1440px',
				hd: '1290px'
			},
			fontFamily: {
				sfpro: ["SF Pro Display", "sans-serif"]
			},
			colors: {
				'main-white': '#EEE',
				'main-black': '#111'
			},
			animation: {
				copytext: 'copyText 200ms linear forwards'
			},
			keyframes: {
				copyText: {
					'0%': {
						transform: 'scaleY(1)'
					},
					'50%': {
						transform: 'scaleY(0)'
					},
					'100%': {
						transform: 'scaleY(1)'
					}
				}
			}
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.font-condensed': {
					'font-stretch': 'condensed'
				}
			})
		})
	],
}
