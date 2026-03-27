import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Toggle from "./Toggle";

export default function GeneralPanel({ showMessage, resetAll }) {

  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("India");

  // 🔄 RESET LOGIC
  useEffect(() => {
    if (resetAll) {
      setLanguage("English");
      setTimezone("India");
    }
  }, [resetAll]);
    
  return (
    <motion.div
      className="settings-card glass"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="card-title">General Settings</div>

      {/* TOGGLES */}
      <Toggle label="Dark Mode" showMessage={showMessage} resetAll={resetAll} />
      <Toggle label="Auto Updates" showMessage={showMessage} resetAll={resetAll} />
      <Toggle label="System Notifications" showMessage={showMessage} resetAll={resetAll} />
      <Toggle label="System Sounds" showMessage={showMessage} resetAll={resetAll} />
      <Toggle label="Auto Save Settings" showMessage={showMessage} resetAll={resetAll} />

      {/* LANGUAGE */}
      <div className="form-group">
        <label>Language</label>
        <select
          className="input"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            showMessage && showMessage(`Language: ${e.target.value}`);
          }}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Tamil</option>
        </select>
      </div>

      {/* TIMEZONE */}
      <div className="form-group">
        <label>Time Zone</label>
        <select
          className="input"
          value={timezone}
          onChange={(e) => {
            setTimezone(e.target.value);
            showMessage && showMessage(`Timezone: ${e.target.value}`);
          }}
        >
          <option>India</option>
          <option>USA</option>
          <option>Australia</option>
        </select>
      </div>

    </motion.div>
  );
}