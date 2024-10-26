import { Route, Routes } from "react-router-dom";
import { HomePage, QuizPage, SignUpPage } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};
export default App;
