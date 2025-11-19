import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 49 : 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-success">Shopping Cart</h2>

      <div className="row">
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

        <div className="col-lg-4">
          <div
            className="card shadow-sm border-0 sticky-top"
            style={{ top: "90px" }}
          >
            <div className="card-body">
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

              <div className="d-flex justify-content-between fs-5 mb-3">
                <strong>Total</strong>
                <strong className="text-success">₹{total}</strong>
              </div>

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
