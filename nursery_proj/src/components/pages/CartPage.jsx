import React, { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // FORM STATES
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("COD");

  // PAYMENT STATES
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 49 : 0;
  const total = subtotal + shipping;

 const handlePlaceOrder = async () => {
  if (!user) return navigate("/login");

  if (!fullName || !phone || !address || !city || !pincode) {
    alert("Please fill all address details!");
    return;
  }

  if (payment === "UPI" && !upiId) {
    alert("Please enter UPI ID!");
    return;
  }

  if (payment === "Card" && (!cardNumber || !expiry || !cvv)) {
    alert("Please fill all card details!");
    return;
  }

  // Convert cart items to comma-separated strings
  const itemNames = cartItems.map(item => item.name).join(", ");
  const quantities = cartItems.map(item => item.quantity).join(",");

  const orderData = {
    full_name: fullName,
    phone: phone,
    address: address,
    city: city,
    pincode: pincode,
    payment_method: payment,
    total_amount: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + (cartItems.length > 0 ? 49 : 0),
    item_name: itemNames,
    qty: quantities
  };

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/orders/", orderData);

    console.log("Order Saved in Django:", res.data);

    clearCart();

    if (payment === "COD") navigate("/order-success");
    else if (payment === "UPI") navigate("/upi-payment");
    else if (payment === "Card") navigate("/card-payment");

  } catch (error) {
    console.error("Order API Error:", error);
    alert("Something went wrong while placing the order!");
  }
};


  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-success">Shopping Cart</h2>
      <div className="row">
        {/* CART ITEMS */}
        <div className="col-lg-8">
          {cartItems.length === 0 && (
            <p className="text-muted">Your cart is empty.</p>
          )}

          {cartItems.map((item) => (
            <div key={item.id} className="card shadow-sm mb-3 border-0">
              <div className="card-body d-flex align-items-center gap-3">
                <div
                  style={{ width: "100px", height: "100px" }}
                  className="bg-light rounded overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="flex-grow-1">
                  <h5 className="mb-1 text-success">{item.name}</h5>
                  <p className="mb-2 text-success fw-bold">₹{item.price}</p>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="btn btn-outline-success btn-sm"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="fw-bold">{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="btn btn-outline-success btn-sm"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="text-end">
                  <button
                    className="btn text-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={20} />
                  </button>

                  <p className="fw-bold text-success mb-0">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE ORDER SUMMARY + ADDRESS FORM */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: "90px" }}>
            <div className="card-body">

              {/* ORDER SUMMARY */}
              <h4 className="text-success mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <strong>₹{shipping}</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-5 mb-4">
                <strong>Total</strong>
                <strong className="text-success">₹{total}</strong>
              </div>

              {/* ADDRESS FORM */}
              <h5 className="text-success mb-3">Delivery Details</h5>

              <input
                className="form-control mb-2"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                className="form-control mb-2"
                placeholder="Full Address"
                rows="2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <input
                className="form-control mb-2"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <input
                className="form-control mb-3"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />

              {/* PAYMENT METHOD */}
              <h6 className="text-success">Payment Method</h6>

              <select
                className="form-control mb-4"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI Payment</option>
                <option value="Card">Credit/Debit Card</option>
              </select>

              {payment === "UPI" && (
                <input
                  className="form-control mb-3"
                  placeholder="Enter UPI ID (example: name@upi)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              )}

              {payment === "Card" && (
                <>
                  <input
                    className="form-control mb-2"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />

                  <input
                    className="form-control mb-2"
                    placeholder="Expiry Date (MM/YY)"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />

                  <input
                    className="form-control mb-3"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </>
              )}

              <button
                className="btn btn-success w-100 py-2"
                onClick={handlePlaceOrder}
              >
                {user ? "Place Order" : "Login to Place Order"}
              </button>

              {!user && (
                <p className="text-center text-muted mt-2">
                  Please login to continue
                </p>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
