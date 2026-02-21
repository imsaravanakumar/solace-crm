import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import QuickActions from "../components/Quickactions";
import DataTable from "../components/DataTable";

function Dashboard() {

  const columns = [
    "Inspection ID",
    "Property",
    "Agent",
    "Inspector",
    "Status",
    "Last Updated",
    "Action",
  ];

  const data = [
  [
    "INSP - 10245",
    "Greenview apartment",
    "Bluenest realty",
    "John mathews",
    <span className="badge bg-warning text-dark w-75 py-2  rounded">
      Pending
    </span>,
    "2 mins ago",
    <span className="text-primary fw-medium" role="button">
      View
    </span>,
  ],
  [
    "INSP - 10244",
    <span className="text-decoration-underline text-primary">
      Palm residency - Villa
    </span>,
    "Urbankey estates",
    "Sarah collins",
    <span className="badge bg-primary-subtle text-primary w-75 py-2  rounded">
      Assigned
    </span>,
    "1 hour ago",
    <span className="text-primary fw-medium" role="button">
      View
    </span>,
  ],
  [
    "INSP - 10243",
    "Lakeview towers",
    "Bluenest realty",
    "Mark robinson",
    <span className="badge bg-success-subtle text-success w-75 py-2  rounded">
      Active
    </span>,
    "Today, 11:30 AM",
    <span className="text-primary fw-medium" role="button">
      View
    </span>,
  ],
  [
    "INSP - 10242",
    "Maple street house",
    "Primelet agents",
    "Emma watson",
    <span className="badge bg-success w-75 py-2  rounded">
      Completed
    </span>,
    "2 days ago",
    <span className="text-primary fw-medium" role="button">
      View Report
    </span>,
  ],
  [
    "INSP - 10241",
    "Sunrise commercial",
    "Urbankey estates",
    "David lee",
    <span className="badge bg-secondary w-75 py-2  rounded">
      Closed
    </span>,
    "3 days ago",
    <span className="text-primary fw-medium" role="button">
      View
    </span>,
  ],
  [
    "INSP - 10240",
    "Oakwood cottage",
    "Primelet agents",
    "Emma watson",
    <span className="badge bg-danger w-75 py-2 rounded">
      Cancelled
    </span>,
    "5 days ago",
    <span className="text-primary fw-medium" role="button">
      View
    </span>,
  ],
];

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
        <Topbar showSearch={true} />

        {/* Stat Cards */}
        <div className="row g-4 mt-3">
          <StatCard title="Total Clients" value="200" color="success" icon="bi-people" bg="#2ecc7048"/>
          <StatCard title="Total Properties" value="10" color="success" icon="bi-building" bg="#2ecc7048"/>
          <StatCard title="Total Inspections" value="2" color="danger" icon="bi-clipboard-check" bg="#e74d3c31"/>
          <StatCard title="Pending Inspections" value="2" color="warning" icon="bi-clipboard-check" bg="#f4b3002c"/>
          <StatCard title="Closed Inspections" value="10" color="warning" icon="bi-check-circle" bg="#f4b3002c"/>
        </div>

        <QuickActions />

        {/* Reusable DataTable */}
        <DataTable
          title="Recent Activity"
          columns={columns}
          data={data}
        />

      </div>
    </>
  );
}

export default Dashboard;