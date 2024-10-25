import { http, HttpResponse } from "msw";

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

export const handlers = [signUpHandler, loginHandler, logoutHandler];
