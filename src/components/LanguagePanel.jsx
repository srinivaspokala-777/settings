import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LanguagePanel() {

  const languages = [
    { name: "English", flag: "🇬🇧" },
    { name: "Hindi", flag: "🇮🇳" },
    { name: "Telugu", flag: "🇮🇳" },
    { name: "Tamil", flag: "🇮🇳" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "French", flag: "🇫🇷" }
  ];

  const [language, setLanguage] = useState(languages[0]);
  const [timeFormat, setTimeFormat] = useState("24h");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: timeFormat === "12h"
  });

  const formattedDate = time.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <motion.div
      className="settings-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <h2>Language & Time Settings</h2>

      {/* TIME DISPLAY */}

      <div className="time-container">

        <div className="time-left">
          <div className="time-main">{formattedTime}</div>
          <div className="time-date">{formattedDate}</div>
        </div>

        <div className="time-right">

          <div className="time-info">
            <span className="time-icon">🕒</span>
            <div>
              <div className="time-label">Time zone</div>
              <div className="time-value">
                (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
              </div>
            </div>
          </div>

          <div className="time-info">
            <span className="time-icon">🌍</span>
            <div>
              <div className="time-label">Region</div>
              <div className="time-value">India</div>
            </div>
          </div>

        </div>

      </div>


      {/* LANGUAGE SECTION */}

      <div className="language-select">

        {languages.map((lang) => (
          <div
            key={lang.name}
            className={`language-option ${
              language.name === lang.name ? "active-lang" : ""
            }`}
            onClick={() => setLanguage(lang)}
          >
            <span className="flag">{lang.flag}</span>
            {lang.name}
          </div>
        ))}

      </div>


      {/* TIME FORMAT */}

      <div className="time-settings">

        <div className="profile-item">
          <label className="profile-label">Time Format</label>

          <select
            className="input"
            value={timeFormat}
            onChange={(e) => setTimeFormat(e.target.value)}
          >
            <option value="12h">12 Hour</option>
            <option value="24h">24 Hour</option>
          </select>
        </div>


        <div className="profile-item">
          <label className="profile-label">Date Format</label>

          <select
            className="input"
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
          >
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY/MM/DD</option>
          </select>
        </div>

      </div>

    </motion.div>
  );
}