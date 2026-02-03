import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams(); // ✅ GET ID
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://artiststation.co.in/prrahi-api/api/products/${id}`)
   
      .then((res) => res.json(
      ))
      .then((data) => {
        console.log("product",data)
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;


  return (
    <div className="container mt-4">
      <Link className="btn btn-secondary mb-3" to={"/"}>
        ⬅ Back
      </Link>

      <h2>{product.name}</h2>
      <h4 className="text-success">₹{product.price}</h4>
      <p><strong>Burn Time:</strong> {product.burningTime}</p>

      <div
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></div>
    </div>
  );
};

export default Product;
