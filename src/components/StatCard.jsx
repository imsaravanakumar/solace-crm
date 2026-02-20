import "../styles/dashboard.css";

function StatCard({ title, value, color, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{title}</span>
        <i className={`bi ${icon} stat-icon ${color}`}></i>
      </div>

      <h3>{value}</h3>

      <div className="progress-bar-bg">
        <div className={`progress-fill ${color}`}></div>
      </div>
    </div>
  );
}

export default StatCard;