import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/public/confirm')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Stutas</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v) => (
              <tr key={v._id}>
                <td>{v._id}</td>
                <td>{v.payment === 1 ? "Paid" : "Pending"}</td>
                <td>
                  <button className="btn btn-ghost bg-success btn-xs mr-2">
                    Pay
                  </button>
                  <button className="btn btn-ghost bg-error btn-xs">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
