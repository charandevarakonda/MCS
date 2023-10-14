import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router
import Details from "./Details";
import './Sample.css'; // You may need to adjust the path to your CSS file
import image1 from "./image1.png"
import image2 from "./image2.png"

function HomePage() {
  const [name, setName] = useState("");
  const [customers, setCustomers] = useState([]);
  const [namedcustomers, setNamedcustomers] = useState([]);
  const [clickedcustomer, setClickedcustomer] = useState(null);

  function handleClick(id) {
    let clickednamed = customers.find((customer) => customer.id === id);
    setClickedcustomer(clickednamed);
  }

  useEffect(() => {
    axios
      .get("http://localhost:1090/data")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const customs = customers;
    const filtered =
      name === ""
        ? []
        : customs.filter((customer) =>
            customer.name.toLowerCase().includes(name.toLowerCase())
          );
    setNamedcustomers(filtered);
  }, [name, customers]);

  return (
    <Router> {/* Wrap your component in the Router component */}
        <div className="image-container">
          <img src={image1} alt="Image 1" className="image1" />
          <img src={image2} alt="Image 2" className="image2" />
       </div>
      <div className="searching">
        {window.location.pathname === "/" && (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputclass"
            />
            <button className="searchbut">Search</button>
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              namedcustomers.length === 0 ? (
                <p>No customers found</p>
              ) : (
                namedcustomers.map((customer) => (
                  <div key={customer.id}>
                    <Link to={`/details/${customer.id}`}>
                      <button style={{ color: 'black' }} onClick={() => handleClick(customer.id)}>
                        {customer.name}
                      </button>
                    </Link>
                  </div>
                ))
              )
            }
          />
          <Route
            path="/details/:id"
            element={
              clickedcustomer ? (
                <Details customer={clickedcustomer} />
              ) : (
                <p>No customer details available</p>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;
