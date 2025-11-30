import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((s, p) => s + p.price * p.qty, 0).toFixed(2);

  if (cart.length === 0) {
    return <div className="p-6">Your cart is empty</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="bg-white p-3 rounded mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={item.image} alt={item.title} className="h-12 object-contain" />
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-600">${item.price} x {item.qty}</div>
            </div>
          </div>
          <div>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
          </div>
        </div>
      ))}

      <div className="mt-4 flex justify-between items-center">
        <div className="font-bold">Total: ${total}</div>
        <div>
          <button onClick={clearCart} className="mr-2 px-4 py-2 bg-gray-200 rounded">Clear</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
}
