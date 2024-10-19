import { http, HttpResponse } from "msw";

const loginRequest = http.post("/api/login", () => {
  return HttpResponse.json({
    code: "OK",
    statue: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
});

const signUpRequest = http.post("/api/signup", () => {
  return HttpResponse.json({
    code: "OK",
    status: 200,
    header: {
      "Content-Type": "application/json",
    },
  });
});

export const handlers = [loginRequest, signUpRequest];
