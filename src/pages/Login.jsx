import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100 d-flex justify-content-around">

        {/* LEFT SIDE */}
        <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center justify-content-center bg-white px-4 py-5">
          <div className="w-100" style={{ maxWidth: "400px" }}>

            <h3 className="fw-bold mb-2 text-center">
              Welcome to Solace
            </h3>
            <p className="text-black mb-4 text-center fw-medium ">
              Sign in to your account
            </p>

            {/* Email */}
            <div className="floating-pill mb-4">
              <input
                type="email"
                id="email"
                className="form-control rounded-pill shadow-none"
                placeholder=" "
                required
              />
              <label htmlFor="email">Email address</label>
            </div>

            {/* Password */}
            {/* Password */}
            <div className="floating-pill mb-4 position-relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control rounded-pill shadow-none pe-5"
                placeholder=" "
                required
              />
              <label htmlFor="password">Password</label>

              <i
                className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}
    position-absolute top-50 end-0 translate-middle-y me-4`}
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>

            {/* Remember + Forgot */}
            <div className="d-flex justify-content-between small mb-4 flex-wrap">
              <div className="mb-2 mb-sm-0">
                <input type="checkbox" className="me-1" />
                Remember me
              </div>
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "#4f46e5" }}
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              className="btn w-100 rounded-pill text-white"
              style={{
                background: "#2d4aa5",
                height: "50px",
              }}
              onClick={() => navigate("/dashboard")}
            >
              Login
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="col-12 col-md-6 col-lg-4 rounded-5 my-2 d-flex align-items-center justify-content-center text-center p-5"
          style={{
            background: "linear-gradient(160deg, #0B1530 70%, #1f3d88 100%)",
          }}
        >
          <img
            src={logo}
            className="img-fluid"
            style={{ maxWidth: "200px" }}
            alt="logo"
          />
        </div>

      </div>
    </div>
  );
}

export default Login;