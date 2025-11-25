import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import CartPage from "./components/pages/CartPage";
import OrderSuccess from "./components/pages/OrderSuccess";
import AdminDashboard from "./components/pages/AdminDashboard";   // <-- ADD THIS



function App() {
  return (
    <>
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />


        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
