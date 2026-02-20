import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can add validation later
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="login-left">
          <h2 className="login-title">Welcome to Solace</h2>
          <p className="login-subtitle">Sign in to your account</p>

          <div className="input-group-custom">
            <input type="text" placeholder="Email address" />
          </div>

          <div className="input-group-custom password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <i
              className={`bi ${
                showPassword ? "bi-eye"  : "bi-eye-slash"
              } eye-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <div className="login-options">
            <div className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>

        <div className="login-right">
          <img src={logo} alt="logo" className="login-logo" />
        </div>

      </div>
    </div>
  );
}

export default Login;