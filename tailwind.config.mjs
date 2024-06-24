const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			...colors,
			'primary': '#e11d48',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			}
		},
	},
	plugins: [],
}
