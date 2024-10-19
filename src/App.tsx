import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<SignUpPage />} />
    </Routes>
  );
};
export default App;
