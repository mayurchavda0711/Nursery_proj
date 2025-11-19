import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import CartPage from "./components/pages/CartPage";

import { CartProvider } from "./context/CartContext";  // ✅
import { AuthProvider } from "./context/AuthContext";  // ✅

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>

          <Header />

          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>

          <Footer />

        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
