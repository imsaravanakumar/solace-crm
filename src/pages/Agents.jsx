import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const agentsData = [
  {
    name: "Michael",
    company: "Bluenest realty",
    email: "michael@bluenest.com",
    phone: "+44 7911 234567",
    properties: 18,
    inspections: 42,
    status: "Active",
  },
  {
    name: "Olivia Harris",
    company: "Urbankey estates",
    email: "olivia@urbankey.com",
    phone: "+44 8911 234567",
    properties: 2,
    inspections: 10,
    status: "Active",
  },
  {
    name: "Daniel",
    company: "Bluenest realty",
    email: "daniel@primelet.com",
    phone: "+44 7822 456789",
    properties: 18,
    inspections: 20,
    status: "Inactive",
  },
  {
    name: "Sophie",
    company: "City homes",
    email: "sophie@cityhomes.com",
    phone: "+44 7700 112233",
    properties: 12,
    inspections: 10,
    status: "Suspended",
  },
];

function Agents() {
  return (
    <>
      <Sidebar />

      <div
        className="bg-light content-wrapper"
        style={{
          minHeight: "100vh",
          padding: "10px 30px",
        }}
      >
        <Topbar />

        {/* Search + Action Bar */}
        <div className="d-flex justify-content-between align-items-center my-3 flex-wrap gap-2">
          <div className="input-group" style={{ maxWidth: "250px" }}>
            <span className="input-group-text bg-white border-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search agents"
            />
          </div>

          <div className="d-flex gap-2">
            <select className="form-select">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>

            <button
              className="btn text-white text-nowrap"
              style={{ backgroundColor: "#1e3a8a" }}
            >
              + Add Agents
            </button>
          </div>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="card border-0 shadow-sm rounded overflow-hidden d-none d-md-block">
          <table
            className="table align-middle mb-0"
            style={{ tableLayout: "fixed", fontSize: "12px" }}
          >
            <thead style={{ backgroundColor: "#dde2ed" }}>
              <tr className="text-muted">
                <th>Agent Name</th>
                <th>Company Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="text-center">Properties</th>
                <th className="text-center">Inspections</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {agentsData.map((agent, index) => (
                <tr key={index} style={{ height: "55px" }}>
                  <td>{agent.name}</td>
                  <td>{agent.company}</td>
                  <td className="text-truncate">{agent.email}</td>
                  <td>{agent.phone}</td>
                  <td className="text-center">{agent.properties}</td>
                  <td className="text-center">{agent.inspections}</td>

                  <td className="text-center">
                    <span
                      className={`badge w-100 py-2 rounded-3 ${
                        agent.status === "Active"
                          ? "bg-success-subtle text-success"
                          : agent.status === "Inactive"
                          ? "bg-warning-subtle text-warning"
                          : "bg-danger-subtle text-danger"
                      }`}
                    >
                      {agent.status}
                    </span>
                  </td>

                  <td className="text-center">
                    <div className="d-flex justify-content-center gap-2">
                      <i className="bi bi-eye text-secondary"></i>
                      <i className="bi bi-pencil text-secondary"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARD VIEW ================= */}
        <div className="d-block d-md-none mt-3">
          {agentsData.map((agent, index) => (
            <div
              key={index}
              className="bg-white rounded-4 shadow-sm p-3 mb-3"
              style={{ fontSize: "13px" }}
            >
              <div className="fw-semibold mb-2">{agent.name}</div>

              <div className="text-muted small mb-2">
                {agent.company}
              </div>

              <div className="mb-2">{agent.email}</div>
              <div className="mb-2">{agent.phone}</div>

              <div className="d-flex justify-content-between mb-2">
                <span>Properties</span>
                <span>{agent.properties}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Inspections</span>
                <span>{agent.inspections}</span>
              </div>

              <div className="mb-3">
                <span
                  className={`badge w-100 py-2 rounded-3 ${
                    agent.status === "Active"
                      ? "bg-success-subtle text-success"
                      : agent.status === "Inactive"
                      ? "bg-warning-subtle text-warning"
                      : "bg-danger-subtle text-danger"
                  }`}
                >
                  {agent.status}
                </span>
              </div>

              <div className="d-flex justify-content-end gap-3">
                <i className="bi bi-eye text-secondary"></i>
                <i className="bi bi-pencil text-secondary"></i>
                <i className="bi bi-trash text-danger"></i>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Agents;