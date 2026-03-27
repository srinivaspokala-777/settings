import { motion } from "framer-motion";

export default function SettingsCard({
  title,
  description,
  status,
  actionText,
  onAction,
}) {
  return (
    <motion.div
      className="op-card glass"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="op-header">
        <div className="op-title">{title}</div>
        <span className={`status-badge ${status?.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <div className="op-desc">{description}</div>

      <button className="op-btn" onClick={onAction}>
        {actionText}
      </button>
    </motion.div>
  );
}