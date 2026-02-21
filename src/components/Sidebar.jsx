import { Link, useLocation } from "react-router-dom";
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
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <div
        className="d-none d-lg-flex flex-column position-fixed top-0 start-0 vh-100 text-white p-4"
        style={{
          width: "260px",
          background: "linear-gradient(180deg,#0d1633,#14224a)",
        }}
      >
        <SidebarContent menu={menu} location={location} />
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className="offcanvas offcanvas-start d-lg-none text-white"
        tabIndex="-1"
        id="mobileSidebar"
        style={{
          background: "linear-gradient(180deg,#0d1633,#14224a)",
          width: "260px",
        }}
      >
        <div className="offcanvas-body p-4">
          <SidebarContent menu={menu} location={location} />
        </div>
      </div>
    </>
  );
}

function SidebarContent({ menu, location }) {
 const handleClose = () => {
  const offcanvasEl = document.getElementById("mobileSidebar");

  if (offcanvasEl && window.bootstrap) {
    const instance =
      window.bootstrap.Offcanvas.getInstance(offcanvasEl);

    if (instance) {
      instance.hide();
    }
  }

  const backdrop = document.querySelector(".offcanvas-backdrop");
  if (backdrop) {
    backdrop.remove();
  }

  document.body.classList.remove("offcanvas-backdrop");
  document.body.style.overflow = "auto";
};

  return (
    <>
      {/* Logo */}
      <div className="position-relative mb-4 pb-3">
        <div className="d-flex align-items-center gap-2">
          <img src={logo} width="28" alt="logo" />
          <span className="fw-semibold">Solace</span>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
          }}
        ></div>
      </div>

      {/* Menu */}
      <ul className="nav flex-column gap-2">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.name} className="nav-item">
              <Link
                to={item.path}
                onClick={handleClose}
                className="nav-link d-flex align-items-center gap-2 rounded-3"
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(90deg,#e9edf4 0%,#eaf1ff 60%,#3f6feb 100%)",
                        color: "black",
                      }
                    : { color: "white" }
                }
              >
                <i className={`bi ${item.icon}`}></i>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Sidebar;