/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			"colors": {
				"bunker": {
					50: "#f7f7f8",
					100: "#eeeef0",
					200: "#d9d9de",
					300: "#b8b9c1",
					400: "#91939f",
					500: "#747583",
					600: "#5e5f6b",
					700: "#4c4d58",
					800: "#42424a",
					900: "#3a3a40",
					950: "#19191c",
					1000: "#0E0D11",
				},
				"bunker-ux": {
					50: "#F6F6F9",
					100: "#ECEDF2",
					200: "#D5D7E2",
					300: "#B0B3C9",
					400: "#8589AB",
					500: "#666B91",
					600: "#515578",
					700: "#434561",
					800: "#3A3C52",
					900: "#2E2F3F",
					950: "#22232F",
					1000: "#0E0D11",
				},
			},
			"backgroundImage": {
				// "dev-noise": "url('/bg/noise.png')",
				"dev-noise": "url('/bg/noise.png')",
				"uxui-noise": "url('/bg/noise-uxui.png')",
			},
			"animation": {
				"fade-in": "fade-in 0.6s ease-in",
			},
			"fade-in": {
				"0%": {
					opacity: "0",
				},
				"100%": {
					opacity: "1",
				},
			},
		},
	},
	plugins: [],
};
