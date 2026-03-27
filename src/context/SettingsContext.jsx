import { createContext, useContext, useState } from "react";
const SettingsContext = createContext();
export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    darkMode: localStorage.getItem("theme") === "dark",
    autoUpdate: false,
    emailAlerts: true,
    pushNotifications: false,
  });
  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    if (key === "darkMode") {
      document.body.classList.toggle("dark", value);
      localStorage.setItem("theme", value ? "dark" : "light");
    }
  };
  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}
export const useSettings = () => useContext(SettingsContext);