import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Ariststation = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://artiststation.co.in/prrahi-api/api/products?page=1&limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);


  return (
    <div className="container mt-4">
      <h3>Product List</h3>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>

           
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ariststation;
