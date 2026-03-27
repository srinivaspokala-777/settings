import { useState, useEffect } from "react";

export default function Toggle({ label, showMessage, resetTrigger }) {

  const [enabled, setEnabled] = useState(false);

  const handleToggle = () => {
    const newState = !enabled;
    setEnabled(newState);

    showMessage &&
      showMessage(`${label} ${newState ? "Enabled" : "Disabled"}`);
  };

  // 🔄 RESET
  useEffect(() => {
    setEnabled(false);
  }, [resetTrigger]);

  return (
    <div className="toggle-row" onClick={handleToggle}>
      
      <span className="toggle-label">{label}</span>

      <div className={`toggle-switch ${enabled ? "active" : ""}`}>
        <div className="toggle-circle" />
      </div>

    </div>
  );
}