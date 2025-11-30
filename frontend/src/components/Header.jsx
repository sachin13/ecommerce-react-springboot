import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((s, p) => s + p.qty, 0);

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-indigo-600 text-xl font-semibold">MyStore</Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm">Home</Link>
          <Link to="/cart" className="text-sm flex items-center gap-2">
            Cart
            <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
