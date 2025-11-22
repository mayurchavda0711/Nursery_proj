import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Search } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../../context/CartContext";   // CART CONTEXT

const plants = [
  {
    id: 1,
    name: "Cabbage Plant",
    type: "Vegetables",
    description: "Fresh organic cabbage plant for home garden",
    price: 30,
    image: "/images/cabbage.png",
  },
  {
    id: 2,
    name: "Dianthus-Flower",
    type: "Flower",
    description: "Colorful bell flower perfect for kitchen garden",
    price: 45,
    image: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/dianthus-pink-and-white-flower-pinks-pixabay_11881.jpg",
  },
  {
    id: 3,
    name: " Artichokes Plant",
    type: "Exotic",
    description: " maintaining blood pressure, sugar level, digestive system, ",
    price: 99,
    image: "https://cdn.shopify.com/s/files/1/1380/2059/files/Artichoke-Exotic_480x480.png?v=1654491655",
  },
  {
    id: 4,
    name: "Broccoli Plant",
    type: "Exotic",
    description: "one of the most nutritious vegetables available today",
    price: 40,
    image: "https://www.allthatgrows.in/cdn/shop/products/Broccolli.jpg?v=1598079208&width=1800",
  },
  {
    id: 5,
    name: "Lettuce Plant",
    type: "Exotic",
    description: "Stunning tropical plant with unique flower shape",
    price: 60,
    image: "https://www.allthatgrows.in/cdn/shop/products/Lettuce_Grand_Rapids.jpg?v=1566995208&width=1800",
  },
];

const PlantCollection = () => {
  const { addToCart } = useCart();    
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const plantTypes = ["all", ...new Set(plants.map((p) => p.type))];

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterType === "all" ? true : plant.type === filterType;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Title */}
        <h2 className="text-success mb-4 text-center">Our Plant Collection</h2>

        {/* Search Input */}
        <div className="d-flex justify-content-center mb-3">
          <div className="position-relative" style={{ width: "320px" }}>
            <Search
              size={18}
              className="position-absolute"
              style={{ top: "10px", left: "12px", opacity: 0.6 }}
            />
            <input
              type="text"
              placeholder="Search plants..."
              className="form-control ps-5"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
          {plantTypes.map((type) => (
            <button
              key={type}
              className={`btn ${
                filterType === type ? "btn-success" : "btn-outline-success"
              } rounded-pill px-3`}
              onClick={() => setFilterType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Plant Cards */}
        <div className="row g-4">
          {filteredPlants.map((plant) => (
            <div className="col-md-3 col-sm-6" key={plant.id}>
              <div className="card h-100 shadow-sm border-0">

                <img
                  src={plant.image}
                  alt={plant.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body text-start">
                  <span className="badge bg-success mb-2">{plant.type}</span>
                  <h5>{plant.name}</h5>
                  <p className="text-muted small">{plant.description}</p>
                  <h6 className="fw-bold">₹{plant.price}</h6>
                </div>

                <div className="card-footer bg-transparent border-0">
                  <button
                    className="btn btn-success w-100"
                    onClick={() => addToCart(plant)}
                  >
                    <FaShoppingCart className="me-2" />
                    Add to Cart
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredPlants.length === 0 && (
          <p className="text-muted text-center mt-4">No plants found.</p>
        )}
      </div>
    </section>
  );
};

export default PlantCollection;
