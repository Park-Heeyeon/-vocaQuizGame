# Hello, Voca Quiz Game: 언어 학습 앱

이 프로젝트는 **React.js**와 **TypeScript**를 사용하여 개발된 언어 학습 애플리케이션입니다. 사용자에게 단어 학습과 레벨별 퀴즈 기능을 제공하여 효과적으로 학습 진도를 관리하고 맞춤형 퀴즈를 제공합니다.

## 주요 기술 스택

- **React.js** + **TypeScript**: 사용자 인터페이스와 데이터 흐름을 위한 프론트엔드 라이브러리 및 언어
- **Vite**: 빠르고 효율적인 빌드 도구 및 개발 서버
- **pnpm**: 빠른 패키지 관리 도구
- **TailwindCSS**, **scadcn/ui**: 스타일링 및 컴포넌트 기반 UI 구현
- **MSW (Mock Service Worker)**: 개발 환경에서 API 요청을 모킹하여 독립적인 프론트엔드 개발 가능
- **Recoil**: 전역 상태 관리 라이브러리 (회원 정보, 회원 리스트, 로그인 여부, 공통 모달 관리)
- **React-Query**: 서버 상태 관리 라이브러리
- **React Router**: 페이지 분기 처리를 위한 라우팅 라이브러리

## 핵심 기능

- **회원가입, 로그인, 로그아웃**: `react-hook-form`과 `zod`를 이용한 유효성 검사 및 폼 관리
- **단어 학습 및 퀴즈 기능**: 사용자가 단어 카드를 통해 학습하고, 레벨에 맞는 퀴즈를 통해 학습 진도를 점검할 수 있는 기능
- **맞춤형 퀴즈 제공**: 사용자의 학습 진도에 따라 적합한 퀴즈를 제공하여 학습 효율성을 증대
- **공통 모달 관리**: `recoil`을 통해 로그인 및 기타 UI 상호작용을 위한 공통 모달 상태를 관리
- **페이지 분기 처리**: `react-router`를 사용하여 사용자 인터페이스의 페이지 전환 관리

## 사용 라이브러리 및 도구

- **Zod**: TypeScript 기반의 스키마 선언 및 유효성 검사 라이브러리
- **React Hook Form**: 쉽고 효율적인 폼 관리를 위한 React 훅

## 도전 과제

사용자의 학습 진도와 성과를 기반으로 **맞춤형 퀴즈를 제공**하며, 학습 데이터를 효과적으로 관리하여 학습 효율성을 높이는 방식에 집중하였습니다. 이를 통해 사용자에게 보다 효율적인 학습 경험을 제공합니다.

## 주요 페이지
### 진입화면 
<img width="331" alt="스크린샷 2024-10-27 오전 12 05 32" src="https://github.com/user-attachments/assets/157aa1bc-57e4-4841-be82-023c45244ff1">

### 회원가입
<img width="329" alt="스크린샷 2024-10-27 오전 12 05 39" src="https://github.com/user-attachments/assets/035514c3-88fa-4a4b-948d-da6542673da0">
<img width="335" alt="스크린샷 2024-10-27 오전 12 05 47" src="https://github.com/user-attachments/assets/9f60172e-90b4-41c1-8075-8d853a9765fa">
<img width="336" alt="스크린샷 2024-10-27 오전 12 06 01" src="https://github.com/user-attachments/assets/08f721d3-e2d3-4bfe-815b-44403549e290">

### 로그인
<img width="330" alt="스크린샷 2024-10-27 오전 12 17 31" src="https://github.com/user-attachments/assets/dd8de289-3607-4794-8f05-ae0e69547933">
<img width="328" alt="스크린샷 2024-10-27 오전 12 17 42" src="https://github.com/user-attachments/assets/a6fb99bd-2913-4eee-8741-b538c37c0c6b"><img width="330" alt="스크린샷 2024-10-27 오전 12 17 52" src="https://github.com/user-attachments/assets/32158938-dfa9-4e2e-9364-638db723fdf9">

### 메인화면 
'오늘은 그만'을 클릭하면 로그아웃 후 진입화면으로 이동되도록 로직 설계 
로그인한 사용자의 현재 레벨, 레벨 진행률 표시
<img width="330" alt="스크린샷 2024-10-27 오전 12 18 00" src="https://github.com/user-attachments/assets/782a1e0c-6505-4b09-92dc-587123f1e8e7">

### 퀴즈화면
사용자의 레벨에 따른 영어 단어 퀴즈 출제 

<img width="331" alt="스크린샷 2024-10-27 오전 12 21 18" src="https://github.com/user-attachments/assets/121efc2c-e26a-4ac5-b0c2-2d346a4d576b">

### 정답 여부에 따른 모달 표시 
사용자가 정답을 맞춘 후 다음 문제 풀기 버튼을 클릭하면 랜덤 퀴즈 재갱신
레벨업이 된 경우 레벨업 알림 모달 표출 후 다음 레벨의 랜덤 퀴즈 출제 

<img width="329" alt="스크린샷 2024-10-27 오전 12 24 59" src="https://github.com/user-attachments/assets/9efc80d0-85ed-44be-afb2-1047a25af469">
<img width="326" alt="스크린샷 2024-10-27 오전 12 22 24" src="https://github.com/user-attachments/assets/20b75a92-f373-4738-887e-f974b5f56e87">
<img width="327" alt="스크린샷 2024-10-27 오전 12 25 50" src="https://github.com/user-attachments/assets/02f4fec9-23a3-4713-ac75-9a23755cb133">



