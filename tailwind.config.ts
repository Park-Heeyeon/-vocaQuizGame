/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 기존 경로
    "./node_modules/shadcn-ui/**/*.{js,jsx,ts,tsx}", // shadcn/ui 경로 추가
  ],
  theme: {
  	extend: {
  		colors: {
  			customBlueColor: '#61acc5',
  			customGrayColor: '#babbbb'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
