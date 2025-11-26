import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch Orders
  const fetchOrders = () => {
    axios
      .get("http://127.0.0.1:8000/api/orders/list/")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  // 🔥 DELETE ORDER FUNCTION
  const deleteOrder = (orderId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete Order ${orderId}?`
    );

    if (!confirmDelete) {
      alert("Delete canceled!");
      return;
    }

    axios
      .delete(`http://127.0.0.1:8000/api/orders/delete/${orderId}/`)
      .then(() => {
        alert("Order deleted successfully!");
        fetchOrders(); // Auto refresh after delete
      })
      .catch((err) => {
        alert("Failed to delete order!");
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Full Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Total Amount</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Action</th> {/* ⭐ NEW COLUMN */}
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="10">No Orders Found</td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.order_id}</td>
                  <td>{o.full_name}</td>
                  <td>{o.phone}</td>
                  <td>{o.address}</td>
                  <td>{o.item_name}</td>
                  <td>{o.qty}</td>
                  <td>₹{o.total_amount}</td>
                  <td>{o.payment_method}</td>
                  <td>{new Date(o.created_at).toLocaleString()}</td>

                  {/* ⭐ DELETE BUTTON */}
                  <td>
                    <button
                      onClick={() => deleteOrder(o.order_id)}
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
