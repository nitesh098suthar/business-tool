"use client";
import Image from "next/image";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 2,
      imageUrl: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      quantity: 1,
      imageUrl: "/path/to/image2.jpg",
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
            <Image
              width={400}
              height={400}
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-medium mb-2">{item.name}</h2>
            <p className="text-gray-600">Price: ₹{item.price}</p>

            <div className="mt-2 flex items-center space-x-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              className="mt-4 text-red-600 underline"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>

            <p className="mt-2 font-semibold">
              Total: ₹{item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {cartItems.length > 0 ? (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <p>Total Amount: ₹{totalAmount}</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="mt-6 text-center">Your cart is empty!</p>
      )}
    </div>
  );
};

export default CartPage;
