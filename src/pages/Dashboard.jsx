import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import GeneralPanel from "../components/GeneralPanel";
import BatteryPanel from "../components/BatteryPanel";
import Toast from "../components/Toast";

// ✅ IMPORT IMAGES (FINAL FIX)
import userImg from "../assets/user.png";
import bg from "../assets/bg.png";

export default function Dashboard({ setIsAuth }) {

  const [active, setActive] = useState("General");
  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [theme, setTheme] = useState("dark");

  const navigate = useNavigate();

  // 🔓 Logout
  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  // 🔔 Toast
  const showMessage = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // 💾 Theme Save
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (

    // 🔥 BACKGROUND APPLIED HERE
    <div
      className={`app-layout ${theme}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >

      {/* SIDEBAR */}
      <Sidebar active={active} setActive={setActive} />

      <div className="dashboard">

        {/* 🔝 TOP BAR */}
        <div className="top-bar">

          {/* THEME BUTTON */}
          <button
            className="theme-btn"
            onClick={() => {
              const newTheme = theme === "dark" ? "light" : "dark";
              setTheme(newTheme);
              showMessage(`${newTheme} mode enabled`);
            }}
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* ✅ USER IMAGE WORKING */}
          <img src={userImg} alt="avatar" className="avatar-img" />

          {/* LOGOUT */}
          <button className="logout-btn" onClick={handleLogout}>
            🔙 Logout
          </button>

        </div>

        {/* TITLE */}
        <motion.h1
          className="dashboard-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Settings Dashboard
        </motion.h1>

        {/* PANELS */}
        <AnimatePresence mode="wait">

          {active === "General" && (
            <motion.div key="general" className="card-grid">
              <GeneralPanel showMessage={showMessage} />
            </motion.div>
          )}

          {active === "Battery" && (
            <motion.div key="battery" className="card-grid">
              <BatteryPanel showMessage={showMessage} />
            </motion.div>
          )}

        </AnimatePresence>

        {/* TOAST */}
        <Toast message={toastMsg} show={showToast} />

      </div>
    </div>
  );
}