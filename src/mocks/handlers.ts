import { http, HttpResponse } from "msw";
import mockData from "./mockData.json";

const signUpHandler = http.post("/api/signup", () => {
  return HttpResponse.json({
    code: "OK",
    status: 200,
    header: {
      "Content-Type": "application/json",
    },
  });
});

const loginHandler = http.post("/api/login", () => {
  return HttpResponse.json({
    code: "OK",
    statue: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

const logoutHandler = http.post("/api/logout", () => {
  return HttpResponse.json({
    code: "OK",
    statue: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

const wordHandler = http.get("/api/word", ({ request }) => {
  const parsedUrl = new URL(request.url);
  const level = Number(parsedUrl.searchParams.get("level"));

  let responseData;

  switch (level) {
    case 1:
      responseData = mockData.oneLevelWords; // 레벨 1에 대한 데이터
      break;
    case 2:
      responseData = mockData.twoLevelWords; // 레벨 2에 대한 데이터
      break;
    case 3:
      responseData = mockData.threeLevelWords; // 레벨 3에 대한 데이터
      break;
    default:
      return HttpResponse.json(
        { code: "ERROR", message: "Invalid level" },
        { status: 400 }
      );
  }

  // 성공적인 응답
  return HttpResponse.json({
    code: "OK",
    statue: 200,
    headers: {
      "Content-Type": "application/json",
    },
    data: responseData, // 레벨에 따라 가져온 데이터
  });
});

export const handlers = [
  signUpHandler,
  loginHandler,
  logoutHandler,
  wordHandler,
];
