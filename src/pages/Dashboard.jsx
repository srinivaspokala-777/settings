import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import AccountsPanel from "../components/AccountsPanel";
import GeneralPanel from "../components/GeneralPanel";
import NotificationsPanel from "../components/NotificationsPanel";
import PrivacyPanel from "../components/PrivacyPanel";
import InternetPanel from "../components/InternetPanel";
import BatteryPanel from "../components/BatteryPanel";
import LanguagePanel from "../components/LanguagePanel";
import VolumePanel from "../components/VolumePanel";
import Toast from "../components/Toast";

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

  // 💾 Save Theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app-layout ${theme}`}>

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

          {/* AVATAR */}
          <img 
  src={`${import.meta.env.BASE_URL}user.png`} 
  alt="avatar" 
  className="avatar-img" 
/>

          {/* 🔥 LOGOUT BUTTON */}
          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
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

          {active === "Internet" && (
            <motion.div key="internet" className="card-grid">
              <InternetPanel showMessage={showMessage} />
            </motion.div>
          )}

          {active === "Notifications" && (
            <motion.div key="notifications" className="card-grid">
              <NotificationsPanel showMessage={showMessage} />
            </motion.div>
          )}

          {active === "Privacy" && (
            <motion.div key="privacy" className="card-grid">
              <PrivacyPanel showMessage={showMessage} />
            </motion.div>
          )}

          {active === "Accounts" && (
            <motion.div key="accounts" className="card-grid">
              <AccountsPanel showMessage={showMessage} />
            </motion.div>
          )}

          {active === "Language" && (
            <motion.div key="language" className="card-grid">
              <LanguagePanel showMessage={showMessage} />
            </motion.div>
          )}

          {active === "Volume" && (
            <motion.div key="volume" className="card-grid">
              <VolumePanel showMessage={showMessage} />
            </motion.div>
          )}

        </AnimatePresence>

        {/* 🔔 TOAST */}
        <Toast message={toastMsg} show={showToast} />

      </div>
    </div>
  );
}