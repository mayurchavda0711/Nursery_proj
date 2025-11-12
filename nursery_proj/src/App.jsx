import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5 text-center text-success">
        {/* <h2>Welcome to Shree Ram Dharu 🌿</h2> */}
        
      </div>
      <Footer />
    </>
  );
}

export default App;
