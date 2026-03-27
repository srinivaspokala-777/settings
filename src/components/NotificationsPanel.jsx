import { motion } from "framer-motion";
import Toggle from "./Toggle";
export default function NotificationsPanel() {
  return (
    <motion.div
      className="settings-card glass"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="card-title">Notification Preferences</div>
      <Toggle label="Email Alerts" settingKey="emailAlerts" />
      <Toggle label="Push Notifications" settingKey="pushNotifications" />
      <Toggle label="SMS Alerts" settingKey="smsAlerts" />
      <div className="form-group">
        <label>Notification Frequency</label>
        <select className="input">
          <option>Real-time</option>
          <option>Hourly Digest</option>
          <option>Daily Summary</option>
        </select>
      </div>
    </motion.div>
  );
}