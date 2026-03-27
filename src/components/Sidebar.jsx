import { motion } from "framer-motion";

export default function Sidebar({ active, setActive }) {

  const menuItems = [
    "General",
    "Internet",
    "Battery",
    "Notifications",
    "Privacy",
    "Accounts",
    "Language",
    "Volume"
  ];

  return (
    <div className="sidebar glass">

      <h2 className="logo">Settings</h2>

      {menuItems.map((item) => (
        <motion.div
          key={item}
          className={`menu-item ${active === item ? "active" : ""}`}
          onClick={() => setActive(item)}
          whileHover={{ scale: 1.05 }}
        >
          {item}
        </motion.div>
      ))}

    </div>
  );
}