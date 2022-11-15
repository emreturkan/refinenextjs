import * as React from "react";

import { useDispatch } from "react-redux";
import { addCart } from "src/store/CartSlice";
export interface Props {
  price: number;
  category: string;
  title: string;
  description: string;
  cardImage: string;
  products: object;
}

const ProductCards: React.FC<Props> = ({
  price,
  title,
  category,
  description,
  cardImage,
  products,
}) => {
  // console.log(products);

  const dispatch = useDispatch();

  const addToCart = (addItem: object) => {
    dispatch(addCart(addItem));
    // console.log(addItem);
  };

  return (
    <div className="max-w-xs pb-2 outline outline-[#042940] relative">
      <div className="bg-[#fff] flex justify-center items-center py-4 relative">
        <img
          src={cardImage}
          alt={`${title}`}
          className="max-w-xs h-56 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 z-30"
        />
      </div>
      <div className="px-4">
        <p className="text-lg text-black font-semibold mb-1">{title}</p>
        <div className="flex justify-between">
          <p className="outline outline-[#D6D58E] outline-offset-2 p-1 bg-[#042940] w-fit text-white rounded mt-2 mb-2">
            ${price}
          </p>
          <button
            onClick={() => addToCart(products)}
            className="outline outline-[#D6D58E] outline-offset-2 p-1 bg-[#042940] w-fit text-white rounded mt-2 mb-2"
          >
            Add to cart
          </button>
        </div>
        <p>{`${(description || []).slice(0, 100)}`}...</p>
        <p className=" px-2 py-0.5 py text-sm bg-[#D6D58E] w-fit text-gray-600 rounded-3xl mt-2">
          {category}
        </p>
      </div>
    </div>
  );
};

export default ProductCards;
