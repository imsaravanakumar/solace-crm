import "../styles/layout.css";
import avatar from "../assets/avatar.png";

function Topbar() {
  return (
    <div className="topbar-wrapper">
      <div className="topbar">

        {/* SEARCH */}
        <div className="search-container">
          <i className="bi bi-search"></i>
          <input placeholder="Search agents, inspectors etc" />
        </div>

        {/* RIGHT SECTION */}
        <div className="topbar-right">

          <div className="icon-btn">
            <i className="bi bi-bell"></i>
          </div>

          <div className="profile-card">
            <img src={avatar} alt="profile" />
            <div>
              <span className="profile-name">Dinesh Karthick</span>
              <small style={{display:"block"}}>Admin</small>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Topbar;