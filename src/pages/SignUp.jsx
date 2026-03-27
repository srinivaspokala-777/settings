import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp({ setIsAuth }) {

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form[0].value.trim();
    const email = form[1].value.trim();
    const password = form[2].value.trim();
    const confirm = form[3].value.trim();

    let newErrors = {};

    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!password) newErrors.password = true;
    if (password !== confirm) newErrors.confirm = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsAuth(true); // ✅ existing logic
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">

      <motion.form
        className="login-card glass"
        onSubmit={handleSignup}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h2 className="login-title">Create Account</h2>

        <input
          className={`input ${errors.name ? "input-error" : ""}`}
          placeholder="Full Name"
          required
        />

        <input
          className={`input ${errors.email ? "input-error" : ""}`}
          placeholder="Email"
          type="email"
          required
        />

        <input
          className={`input ${errors.password ? "input-error" : ""}`}
          placeholder="Password"
          type="password"
          required
        />

        <input
          className={`input ${errors.confirm ? "input-error" : ""}`}
          placeholder="Confirm Password"
          type="password"
          required
        />

        <label className="terms-line">
          <input type="checkbox" required />
          <span>
            I agree to the <a href="#">Terms & Conditions</a>
          </span>
        </label>

        <button className="login-btn">Sign Up</button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

      </motion.form>

    </div>
  );
}