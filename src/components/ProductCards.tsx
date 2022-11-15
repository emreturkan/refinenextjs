import * as React from "react";

import { useDispatch } from "react-redux";
import { addCart } from "src/store/CartSlice";
export interface Props {
  id: number;
  name: string;
  username: string;
}

const ProductCards: React.FC<Props> = ({ name, username, id }) => {
  const dispatch = useDispatch();

  const addToCart = (addItem: object) => {
    dispatch(addCart(addItem));
    // console.log(addItem);
  };

  return (
    <div className="max-w-xs pb-2 outline outline-[#042940] relative">
      <div className="bg-[#fff] flex justify-center items-center py-4 relative">
        <p>{username}</p>
      </div>
      <div className="px-4">
        <p className="text-lg text-black font-semibold mb-1">{name}</p>
        <div className="flex justify-between">
          <p className="outline outline-[#D6D58E] outline-offset-2 p-1 bg-[#042940] w-fit text-white rounded mt-2 mb-2">
            20
          </p>
          <button
            onClick={() => addToCart({ id, name, username })}
            className="outline outline-[#D6D58E] outline-offset-2 p-1 bg-[#042940] w-fit text-white rounded mt-2 mb-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
