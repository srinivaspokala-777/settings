import { useState } from "react";
import Toggle from "./Toggle";
import { motion } from "framer-motion";

export default function DevicePanel() {
  const [wifiOn, setWifiOn] = useState(true);
  const [batterySaver, setBatterySaver] = useState(false);
  const [network, setNetwork] = useState("Home WiFi");
  const [battery, setBattery] = useState(76);

  return (
    <>
      {/* ================= INTERNET ================= */}
      <motion.div
        className="settings-card glass"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="card-title">Internet & Connectivity</div>

        <div className="toggle-row">
          <span>Wi‑Fi</span>
          <div
            className={`toggle-switch ${wifiOn ? "active" : ""}`}
            onClick={() => setWifiOn(!wifiOn)}
          >
            <div
              className="toggle-knob"
              style={{
                transform: wifiOn ? "translateX(26px)" : "translateX(0)",
              }}
            />
          </div>
        </div>

        {wifiOn && (
          <div className="form-group">
            <label>Connected Network</label>
            <select
              className="input"
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option>Home WiFi</option>
              <option>Office Network</option>
              <option>Mobile Hotspot</option>
            </select>
          </div>
        )}
      </motion.div>

      {/* ================= BATTERY ================= */}
      <motion.div
        className="settings-card glass"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="card-title">Battery</div>

        <div className="battery-row">
          <span>Battery Level</span>
          <strong>{battery}%</strong>
        </div>

        <div className="battery-bar">
          <div
            className="battery-fill"
            style={{ width: `${battery}%` }}
          />
        </div>

        <Toggle
          label="Battery Saver"
          settingKey="batterySaver"
        />
      </motion.div>
    </>
  );
}