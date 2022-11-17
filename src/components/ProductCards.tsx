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
    <div className=" md:mr-4 pb-2 outline outline-[#042940] relative">
      <div className="bg-[#fff] flex justify-center items-center py-4 relative">
        <p>{username}</p>
      </div>
      <div className="px-4">
        <p className="text-lg text-black font-semibold mb-1">{name}</p>
        <div className="flex items-center justify-between">
          <p className=" w-8 h-8 bg-[#042940] mr-2 md:mr-0  text-white rounded mt-2 mb-2 flex items-center justify-center">
            20
          </p>
          <button
            onClick={() => addToCart({ id, name, username })}
            className=" w-24 h-10 bg-blue-600 text-blue-100  hover:bg-blue-100 hover:text-blue-600 transition-all rounded mt-2 mb-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
