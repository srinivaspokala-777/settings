import { motion } from "framer-motion";
import { useState } from "react";

export default function VolumePanel({ showMessage }) {

  const [volume, setVolume] = useState(39);
  const [muted, setMuted] = useState(false);

  const increaseVolume = () => {
    const newVol = Math.min(volume + 5, 100); // ✅ max limit 100
    setVolume(newVol);
    setMuted(false);

    showMessage && showMessage(`Volume: ${newVol}%`);
  };

  const decreaseVolume = () => {
    const newVol = Math.max(volume - 5, 0); // ✅ min limit 0
    setVolume(newVol);

    showMessage && showMessage(`Volume: ${newVol}%`);
  };

  const toggleMute = () => {
    setMuted(!muted);
    showMessage && showMessage(muted ? "Unmuted" : "Muted");
  };

  const getIcon = () => {
    if (muted || volume === 0) return "🔇";
    if (volume < 40) return "🔉";
    return "🔊";
  };

  return (
    <motion.div
      className="settings-card glass"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="card-title">Volume Control</div>

      {/* DISPLAY */}

      <div className="volume-display">
        {getIcon()} Volume: {muted ? 0 : volume}%
      </div>

      {/* BUTTONS */}

      <div className="volume-controls">

        <button className="vol-btn" onClick={decreaseVolume}>
          ➖
        </button>

        <button className="vol-btn primary" onClick={increaseVolume}>
          ➕
        </button>

      </div>

      {/* MUTE */}

      <button className="mute-btn" onClick={toggleMute}>
        {muted ? "Unmute 🔊" : "Mute 🔇"}
      </button>

    </motion.div>
  );
}