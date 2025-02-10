import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
