import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/dashboard.css";

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
    name: "Olivia harris",
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

      <div className="page-container">
        <Topbar />

        <div className="content-wrapper">

          {/* HEADER SECTION */}
          <div className="agents-header">
            <div className="search-small">
              <i className="bi bi-search"></i>
              <input placeholder="Search agents" />
            </div>

            <div className="agents-actions">
              <select className="status-filter">
                <option>Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </select>

              <button className="add-btn">
                + Add Agents
              </button>
            </div>
          </div>

          {/* TABLE CARD */}
          <div className="agents-table-card">
            <table className="agents-table">
              <thead>
                <tr>
                  <th>Agent Name</th>
                  <th>Company Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Properties</th>
                  <th>Inspections</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {agentsData.map((agent, index) => (
                  <tr key={index}>
                    <td>{agent.name}</td>
                    <td>{agent.company}</td>
                    <td>{agent.email}</td>
                    <td>{agent.phone}</td>
                    <td>{agent.properties}</td>
                    <td>{agent.inspections}</td>
                    <td>
                      <span className={`status ${agent.status.toLowerCase()}`}>
                        {agent.status}
                      </span>
                    </td>
                    <td className="actions">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-pencil"></i>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="pagination-bar">
              <span>1 of 100 rows selected</span>

              <div className="pagination-controls">
                <button>Previous</button>
                <button className="active-page">1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>100</button>
                <button>Next</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Agents;