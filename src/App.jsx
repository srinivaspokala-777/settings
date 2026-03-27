import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import { SettingsProvider } from "./context/SettingsContext";

function AnimatedRoutes({ isAuth, setIsAuth }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route
          path="/login"
          element={
            isAuth ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsAuth={setIsAuth} />
            )
          }
        />

        {/* ✅ FIXED: pass setIsAuth */}
        <Route
          path="/signup"
          element={
            isAuth ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <SignUp setIsAuth={setIsAuth} />
            )
          }
        />

        <Route path="/forgot" element={<ForgotPassword />} />

        <Route
          path="/dashboard"
          element={
            isAuth ? (
              <Dashboard setIsAuth={setIsAuth} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <SettingsProvider>
      <BrowserRouter>
        <AnimatedRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
      </BrowserRouter>
    </SettingsProvider>
  );
}