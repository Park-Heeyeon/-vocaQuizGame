import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 기존 경로
    "./node_modules/shadcn-ui/**/*.{js,jsx,ts,tsx}", // shadcn/ui 경로 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
