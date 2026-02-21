function DataTable({ title, columns, data }) {
  return (
    <div className="mt-4">
      {title && (
        <h6 className="fw-semibold mb-3 small">{title}</h6>
      )}

      <div className="card border-0 shadow-sm rounded overflow-hidden">

        {/* ================= DESKTOP TABLE ================= */}
        <div className="d-none d-md-block">
          <table
            className="table table-sm align-middle mb-0 text-center"
            style={{
              tableLayout: "fixed",
              fontSize: "11px",
            }}
          >
            <thead
              style={{ backgroundColor: "#bac3da" }}
              className="text-muted"
            >
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="text-nowrap py-2 px-3"
                    style={{ backgroundColor: "#dde2ed" }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} style={{ height: "50px" }}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="text-nowrap px-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARD VIEW ================= */}
        <div className="d-block d-md-none p-3">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border rounded-4 p-3 mb-3 bg-white shadow-sm"
              style={{ fontSize: "13px" }}
            >
              {row.map((cell, cellIndex) => {
                const label = columns[cellIndex];
                const isStatus = label === "Status";

                return (
                  <div
                    key={cellIndex}
                    className="row align-items-center py-2"
                  >
                    {/* Label */}
                    <div className="col-5 text-muted fw-medium">
                      {label}
                    </div>

                    {/* Value */}
                    <div className="col-7 text-end">
                      {isStatus ? (
                        <div className="w-100">
                          {cell}
                        </div>
                      ) : (
                        cell
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DataTable;