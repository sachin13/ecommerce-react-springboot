import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Failed to load product:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow flex gap-6">
      <img className="h-72 object-contain" src={product.image} alt={product.title} />
      <div className="flex-1">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p className="mt-3 text-gray-600">{product.description}</p>
        <div className="mt-4 text-indigo-600 text-xl font-bold">${product.price}</div>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
