import { Route, Routes } from "react-router-dom";
import { HomePage, SignUpPage } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};
export default App;
