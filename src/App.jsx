import React, { useState } from "react";
import RegisterPage from "./components/registerPage";
import LoginPage from "./components/loginPage";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  const [user, setUser] = useState("");

  return (
    <ThemeProvider>
      <div className="h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage setUser={setUser} />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard user={user} /> : <LoginPage setUser={setUser} />}
            />
            <Route path="/sidebar" element={<Sidebar user={user} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
