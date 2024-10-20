import { Route, Routes } from "react-router-dom";
import { HomePage, SignUpPage } from "./pages";
// import LoginModal from "./components/modal/LoginModal";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/login" element={<LoginModal />} /> */}
      <Route path="/join" element={<SignUpPage />} />
    </Routes>
  );
};
export default App;
