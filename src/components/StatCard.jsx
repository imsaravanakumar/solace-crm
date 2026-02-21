function StatCard({ title, value, color, icon,bg }) {
  return (
    <div className="col-md">
      <div className="card border-0 shadow-sm p-3 h-100">
        
          <p className="text-muted text-nowrap" style={{fontSize:"12px"}}>{title}</p>
          
        <div className="d-flex justify-content-between align-items-center">
        <h4>{value}</h4>
        <i className={`bi ${icon} text-${color} text-center rounded-circle`}style={{backgroundColor:`${bg}`,height:"26px",width:"26px" }}></i>
        </div>
        <div className="progress mt-3" style={{ height: "4px" }}>
          <div className={`progress-bar bg-${color}`} style={{ width: "60%" }}></div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;