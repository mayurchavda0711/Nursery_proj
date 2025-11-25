import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Fetch all orders
  const fetchOrders = () => {
    axios
      .get("http://127.0.0.1:8000/api/orders/list/")   // FIXED URL
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
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
              <th>Payment Method</th> {/* ✅ ADDED */}
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="9">No Orders Found</td>
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
                  <td>{o.payment_method}</td> {/* ✅ SHOW PAYMENT METHOD */}
                  <td>{new Date(o.created_at).toLocaleString()}</td>
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
