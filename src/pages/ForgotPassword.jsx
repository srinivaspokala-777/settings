import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent!");
  };

  return (
    <div className="login-container">
      <motion.form
        className="login-card glass"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="login-title">Forgot Password</h2>

        <input
          className="input"
          placeholder="Enter your email"
          type="email"
          required
        />

        <button className="login-btn">Send Reset Link</button>

        <p className="auth-switch">
          Back to <Link to="/login">Sign in</Link>
        </p>
      </motion.form>
    </div>
  );
}