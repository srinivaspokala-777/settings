import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="toast modern-toast"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <span className="toast-icon">✔</span>
          <span className="toast-text">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}