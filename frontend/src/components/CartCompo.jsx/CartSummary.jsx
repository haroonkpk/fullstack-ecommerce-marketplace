import React, { useEffect } from "react";
import { useState } from "react";

export default function CartSummary() {
    const dummyCartItems = [
      {
        id: "1",
        name: "iPhone",
        price: 999,
        image: "/Image/tech/1.jpg",
        quantity: 1,
      },
      {
        id: "2",
        name: "Macbook",
        price: 1999,
        image: "/Image/tech/2.jpg",
        quantity: 2,
      },
    ];
    const [cartItems, setCartItems] = useState(dummyCartItems);

  useEffect(()=>{
      console.log(cartItems);
  },[cartItems])

  const handleQuantityChange = (productId, newQty) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQty } : item
    );
    setCartItems(updatedCart);
  };
  

  

  return (
    <div className="w-full max-w-[1180px] h-auto flex justify-between gap-3 ">
      <div className="p-3 container border border-gray-300 rounded mt-7  space-y-2 bg-base-100">
        {/* product */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="w-full flex justify-between gap-2 border-b border-gray-300 pb-2"
          >
            <div className="flex gap-2">
              <div className="w-[90px] h-[90px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
                <div className="flex gap-2">
                  <button className="btn">Remove</button>
                  <button className="btn">Save for later</button>
                </div>
              </div>
            </div>
            <div>
              <h1>${item.price}</h1>
              <div className="flex items-center gap-2 border rounded px-2 py-1">
                <label>Qty:</label>
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[280px] p-3 container border border-gray-300 rounded mt-7 bg-base-100">
        5
      </div>
    </div>
  );
}
