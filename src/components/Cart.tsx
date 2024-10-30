import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center gap-4 py-4 border-b">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-blue-600">${item.price}</p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
}