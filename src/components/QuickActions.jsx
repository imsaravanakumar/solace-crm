function QuickActions() {
  const actions = [
    { icon: "bi-pencil-square", text: "Create Inspection" },
    { icon: "bi-plus-lg", text: "Add Property" },
    { icon: "bi-plus-lg", text: "Add Agent" },
    { icon: "bi-plus-lg", text: "Add Inspector" },
  ];

  return (
    <div className="mt-5">
      <h6 className="fw-semibold">Quick actions</h6>

      <div className="row g-4 mt-2">
        {actions.map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="card border shadow-sm text-center py-4"style={{cursor:"pointer"}}>
              
              <div className="d-flex justify-content-center">
                <div className="border rounded-3 py-1 px-2">
                  <i className={`bi ${item.icon} fs-5`}></i>
                </div>
              </div>

              <span className="fw-medium">
                {item.text}
              </span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;