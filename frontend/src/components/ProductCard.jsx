import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
        <h3 className="mt-3 text-sm font-medium line-clamp-2">{product.title}</h3>
      </Link>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-indigo-600 font-bold">${product.price}</div>
        <button
          onClick={() => onAdd(product)}
          className="bg-indigo-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
