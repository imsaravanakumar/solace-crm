import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import "../styles/dashboard.css";
import QuickActions from "../components/Quickactions";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Topbar />

        <div className="cards-row">
          <StatCard
            title="Total Clients"
            value="200"
            color="green"
            icon="bi-people"
          />
          <StatCard
            title="Total Properties"
            value="10"
            color="green"
            icon="bi-building"
          />
          <StatCard
            title="Total Inspections"
            value="2"
            color="red"
            icon="bi-clipboard-check"
          />
          <StatCard
            title="Bending Inspections"
            value="2"
            color="red"
            icon="bi-clipboard-check"
          />
          <StatCard
            title="Closed Inspections"
            value="10"
            color="yellow"
            icon="bi-check-circle"
          />
        </div>
        <QuickActions/>
        <DataTable />
      </div>
    </>
  );
}

export default Dashboard;