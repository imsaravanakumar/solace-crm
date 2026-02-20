function DataTable() {
  return (
    <div className="activity-card">
      <h6 className="activity-title">Recent Activity</h6>

      <div className="table-wrapper">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Inspection ID</th>
              <th>Property</th>
              <th>Agent</th>
              <th>Inspector</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>INSP - 10245</td>
              <td>Greenview apartment</td>
              <td>Bluenest realty</td>
              <td>John mathews</td>
              <td><span className="status pending">Pending</span></td>
              <td>2 mins ago</td>
              <td className="action-link">View</td>
            </tr>

            <tr>
              <td>INSP - 10244</td>
              <td className="property-link">Palm residency - Villa</td>
              <td>Urbankey estates</td>
              <td>Sarah collins</td>
              <td><span className="status assigned">Assigned</span></td>
              <td>1 hour ago</td>
              <td className="action-link">View</td>
            </tr>

            <tr>
              <td>INSP - 10243</td>
              <td>Lakeview towers</td>
              <td>Bluenest realty</td>
              <td>Mark robinson</td>
              <td><span className="status active">Active</span></td>
              <td>Today, 11:30 AM</td>
              <td className="action-link">View</td>
            </tr>

            <tr>
              <td>INSP - 10242</td>
              <td>Maple street house</td>
              <td>Primelet agents</td>
              <td>Emma watson</td>
              <td><span className="status completed">Completed</span></td>
              <td>2 days ago</td>
              <td className="action-link">View Report</td>
            </tr>

            <tr>
              <td>INSP - 10241</td>
              <td>Sunrise commercial complex</td>
              <td>Urbankey estates</td>
              <td>David lee</td>
              <td><span className="status closed">Closed</span></td>
              <td>3 days ago</td>
              <td className="action-link">View</td>
            </tr>

            <tr>
              <td>INSP - 10240</td>
              <td>Oakwood cottage</td>
              <td>Primelet agents</td>
              <td>Emma watson</td>
              <td><span className="status cancelled">Cancelled</span></td>
              <td>5 days ago</td>
              <td className="action-link">View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;