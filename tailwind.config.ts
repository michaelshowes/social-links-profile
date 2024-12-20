import { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			green: '#C4F82A',
			gray: {
				700: '#333333',
				800: '#1f1f1f',
				900: '#141414'
			}
		},
		fontFamily: { sans: ['Inter', 'sans-serif'] },
		fontSize: {
			base: ['14px', { lineHeight: '1.5' }],
			lg: ['24px', { lineHeight: '1.5', fontWeight: '600' }]
		},
		spacing: {
			50: '4px',
			100: '8px',
			150: '12px',
			200: '16px',
			300: '24px',
			500: '40px'
		},
		borderRadius: {
			100: '8px',
			150: '12px',
			full: '9999px'
		},
		screens: {
			md: '768px',
			lg: '1024px'
		},
		extend: {}
	},
	plugins: []
} satisfies Config;
