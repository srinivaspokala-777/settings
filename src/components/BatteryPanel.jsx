import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BatteryPanel({ showMessage }) {

  const [battery, setBattery] = useState(80);
  const [saver, setSaver] = useState(false);
  const [powerMode, setPowerMode] = useState("Balanced");
  const [sleep, setSleep] = useState("5 min");

  // 🎨 battery color
  const getColor = () => {
    if (battery > 60) return "#22c55e";
    if (battery > 30) return "#f59e0b";
    return "#ef4444";
  };

  // 🔄 auto drain
  useEffect(() => {
    const interval = setInterval(() => {
      setBattery(prev => Math.max(prev - (saver ? 1 : 2), 0));
    }, 3000);
       
    return () => clearInterval(interval);
  }, [saver]);

  // 🔋 saver toggle
  const toggleSaver = () => {
    setSaver(!saver);
    showMessage && showMessage(saver ? "Battery Saver OFF" : "Battery Saver ON");
  };

  return (
    <motion.div
      className="settings-card glass"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
    >

      {/* TITLE */}
      <div className="card-title">Battery & Power</div>

      {/* 🔋 BATTERY DISPLAY */}
      <div className="battery-box">
        <div className="battery-icon">
          <div
            className="battery-level"
            style={{
              width: `${battery}%`,
              background: getColor()
            }}
          />
        </div>

        <div className="battery-percent">{battery}%</div>
      </div>

      {battery <= 20 && (
        <div className="battery-warning">🚨 Low Battery</div>
      )}

      {/* ⚙ POWER MODE */}
      <div className="form-group">
        <label>Power Mode</label>
        <select
          className="input"
          value={powerMode}
          onChange={(e) => {
            setPowerMode(e.target.value);
            showMessage && showMessage(`Mode: ${e.target.value}`);
          }}
        >
          <option>Best Performance</option>
          <option>Balanced</option>
          <option>Power Saver</option>
        </select>
      </div>

      {/* 🌙 SCREEN SLEEP */}
      <div className="form-group">
        <label>Screen Sleep</label>
        <select
          className="input"
          value={sleep}
          onChange={(e) => {
            setSleep(e.target.value);
            showMessage && showMessage(`Sleep: ${e.target.value}`);
          }}
        >
          <option>1 min</option>
          <option>5 min</option>
          <option>10 min</option>
          <option>30 min</option>
          <option>Never</option>
        </select>
      </div>

      {/* 🔋 COLORFUL BATTERY SAVER */}
      <button
        className={`battery-btn ${saver ? "active" : ""}`}
        onClick={toggleSaver}
      >
        {saver ? "⚡ Battery Saver ON" : "Enable Battery Saver"}
      </button>

      {/* 💡 ENERGY RECOMMENDATIONS (DROPDOWN) */}
      <div className="form-group">
        <label>Energy Recommendation</label>

        <select
          className="input"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "🌙 Enable battery saver") setSaver(true);
            showMessage && showMessage(`${value} applied`);
          }}
        >
          <option>Select recommendation</option>
          <option>💡 Lower screen brightness</option>
          <option>🔕 Turn off background apps</option>
          <option>🌙 Enable battery saver</option>
          <option>📶 Disable unused networks</option>
        </select>
      </div>

    </motion.div>
  );
}