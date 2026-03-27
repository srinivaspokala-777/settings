import { motion } from "framer-motion";
import Toggle from "./Toggle";
export default function PrivacyPanel() {
  return (
    <motion.div
      className="settings-card glass"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="card-title">Privacy Controls</div>
      <Toggle label="Public Profile" settingKey="profilePublic" />
      <Toggle label="Data Sharing" settingKey="dataShare" />
      <Toggle label="Search Engine Indexing" settingKey="searchIndex" />

      <div className="form-group">
        <label>Account Visibility</label>
        <select className="input">
          <option>Public</option>
          <option>Friends Only</option>
          <option>Private</option>
        </select>
      </div>
    </motion.div>
  );
}
