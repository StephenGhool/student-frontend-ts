import SidebarPage from "./pages/sidebar";
import "./index.css";
import { Signin } from "./components/signin";
import { RegisterUser } from "./components/signup/register";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        {user && <Route path="/" element={<SidebarPage />} />}
        {!user && <Route path="/signin" element={<Signin />} />}
        {!user && <Route path="/register" element={<RegisterUser />} />}
      </Routes>
    </div>
  );
}
