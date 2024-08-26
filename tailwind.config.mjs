/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
			  sm: "100%",
			  md: "100%",
			  lg: "1024px",
			  xl: "1440px",
			},
		  },
		extend: {},
	},
	plugins: [],
}