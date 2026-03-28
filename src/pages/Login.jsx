import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Login({ setIsAuth }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const [errors, setErrors] = useState({});   // ⭐ error state

  const generateCaptcha = () => {
    const chars = "546789";
    let result = "";

    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = (e) => {

    e.preventDefault();

    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = true;
    }

    if (!password || password.trim().length < 6) {
      newErrors.password = true;
    }

    if (!userCaptcha || userCaptcha !== captcha) {
      newErrors.captcha = true;
      generateCaptcha();
      setUserCaptcha("");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsAuth(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">

      <motion.form
        className="login-card glass"
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <h2 className="login-title">Sign In</h2>

        {/* EMAIL */}

        <input
          type="email"
          className={`input ${errors.email ? "input-error" : ""}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}

        <div className="password-wrapper">

          <input
            type={showPassword ? "text" : "password"}
            className={`input password-input ${errors.password ? "input-error" : ""}`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="forgot-link">
            <Link to="/forgot">Forgot password?</Link>
          </p>

          <button
            type="button"
            className="toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img
              src="eye.png"
              alt="👁️"
              className={`eye-img ${showPassword ? "active" : ""}`}
            />
          </button>

        </div>

        {/* CAPTCHA */}

        <div className="captcha-box">

          <div className="captcha-row">

            <div className="captcha-text">
              {captcha}
            </div>

            <button
              type="button"
              className="captcha-refresh"
              onClick={generateCaptcha}
            >
              <img src="refresh.png" alt="🔄️" />
            </button>

          </div>

          <input
            className={`input ${errors.captcha ? "input-error" : ""}`}
            placeholder="Enter captcha"
            value={userCaptcha}
            onChange={(e) => setUserCaptcha(e.target.value)}
          />

        </div>

        <button className="login-btn">
          Login
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </motion.form>

    </div>
  );
}