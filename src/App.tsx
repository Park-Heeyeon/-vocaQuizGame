import { Route, Routes } from "react-router-dom";
import { Home, Login, Join } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
};
export default App;
