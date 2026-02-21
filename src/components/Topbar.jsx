import avatar from "../assets/avatar.png";

function Topbar({ showSearch = false }) {
  return (
    <div className="bg-secondary bg-opacity-10 gap-3 rounded-3 p-2 p-md-2 p-lg-3 d-flex justify-content-between align-items-center">

      {/* LEFT SECTION */}
      <div className="d-flex align-items-center gap-2 gap-lg-3 flex-grow-1">

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="btn p-1 p-lg-2 d-lg-none"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          <i className="bi bi-list fs-5 fs-lg-4"></i>
        </button>

        {/* Search */}
        {showSearch && (
          <div
            className="input-group"
            style={{ maxWidth: "500px" }}
          >
            <span className="input-group-text bg-white border-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              style={{ fontSize: "12px" }}
              placeholder="Search agents, inspectors etc"
            />
          </div>
        )}
      </div>

      {/* RIGHT SECTION */}
      <div className="d-flex align-items-center gap-2 gap-lg-3">

        <button
          className="btn btn-light bg-white p-1 p-lg-2"
          style={{ height: "32px" }}
        >
          <i className="bi bi-bell fs-6 fs-lg-5"></i>
        </button>

        <div
          className="d-flex align-items-center bg-white rounded-3 px-2 px-lg-3 gap-2"
          style={{ height: "32px" }}
        >
          <img
            src={avatar}
            width="26"
            className="rounded-circle"
            alt="avatar"
          />
          <div className="d-none d-sm-flex flex-column">
            <div className="fw-medium" style={{ fontSize: "12px" }}>
              Dinesh Karthick
            </div>
            <small className="text-muted" style={{ fontSize: "10px" }}>
              Admin
            </small>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Topbar;