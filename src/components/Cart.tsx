import * as React from "react";

import { useSelector } from "react-redux";

const Carts = () => {
  const cartItems = useSelector(state => state.cartSlice.value);
  const items = cartItems.map(item => item);
  console.log(items);

  return (
    <div>
      {items.map(item => (
        <div
          className="max-w-xs pb-2 outline outline-[#042940] relative"
          key={item.title}
        >
          <div className="bg-[#fff] flex justify-center items-center py-4 relative">
            <img
              src={item.image}
              alt={item.title}
              className="max-w-xs h-56 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 z-30"
            />
          </div>
          <div className="px-4">
            <p className="text-lg text-black font-semibold mb-1">
              {item.title}
            </p>
            <div className="flex justify-between">
              <p className="outline outline-[#D6D58E] outline-offset-2 p-1 bg-[#042940] w-fit text-white rounded mt-2 mb-2">
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carts;
