import { Link, useLocation } from "react-router-dom";
import "../styles/layout.css";
import logo from "../assets/logo.png";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: "bi-grid-fill", path: "/dashboard" },
    { name: "Agents", icon: "bi-person", path: "/agents" },
    { name: "Inspectors", icon: "bi-person-dash", path: "#" },
    { name: "Properties", icon: "bi-building", path: "#" },
    { name: "Inspections", icon: "bi-clipboard-check", path: "#" },
    { name: "Reports", icon: "bi-bar-chart", path: "#" },
    { name: "Audit Logs", icon: "bi-file-earmark-text", path: "#" },
    { name: "Settings", icon: "bi-gear", path: "#" },
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="logo" />
        <span>Solace</span>
      </div>

      {menu.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`menu-item ${
            location.pathname === item.path ? "active" : ""
          }`}
        >
          <i className={`bi ${item.icon}`}></i>
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;