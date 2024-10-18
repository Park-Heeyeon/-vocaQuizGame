/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 기존 경로
    "./node_modules/shadcn-ui/**/*.{js,jsx,ts,tsx}", // shadcn/ui 경로 추가
  ],
  theme: {
    extend: {
      colors: {
        customBlueColor: "#61acc5", // 원하는 색상 추가
        customGrayColor: "#babbbb",
      },
    },
  },
  plugins: [],
};
