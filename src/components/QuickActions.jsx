function QuickActions() {
  return (
    <div className="quick-section">
      <h6>Quick actions</h6>

      <div className="quick-grid">
        <div className="quick-card">
          <i className="bi bi-pencil-square"></i>
          <span>Create Inspection</span>
        </div>

        <div className="quick-card">
          <i className="bi bi-plus-lg"></i>
          <span>Add Property</span>
        </div>

        <div className="quick-card">
          <i className="bi bi-plus-lg"></i>
          <span>Add Agent</span>
        </div>

        <div className="quick-card">
          <i className="bi bi-plus-lg"></i>
          <span>Add Inspector</span>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;