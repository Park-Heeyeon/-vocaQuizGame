import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, QuizPage, SignUpPage } from "./pages";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./atom/isLoggedInState";

const App: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/" /> : <SignUpPage />}
      />
      <Route
        path="/quiz"
        element={isLoggedIn ? <QuizPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
