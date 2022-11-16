import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { inc, desc, removeItem } from "src/store/CartSlice";

const Carts = () => {
  const cartItems = useSelector(state => state.cartSlice.user);
  const items = cartItems.map(item => item);
  console.log(items);
  const dispatch = useDispatch();
  const incKey = id => {
    dispatch(inc(id));
  };
  const descKey = id => {
    dispatch(desc(id));
  };
  const deleteItem = id => {
    dispatch(removeItem(id));
  };

  if (items.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="px-24 py-6 rounded-md shadow-md mb-6 text-white bg-gray-800">
          <h1>You do not have a product on the card.</h1>
        </div>
        <Link href="/">
          <span className="px-8 py-3  bg-blue-600 text-blue-100 rounded-md shadow-md">
            Go back
          </span>
        </Link>
      </div>
    );
  }

  if (items.length >= 1) {
    return (
      <div className="grid grid-col-1 px-48 ">
        {items.map(item => (
          <div
            className="md:w-[720px] pb-2 outline outline-[#042940] relative mb-8 flex items-center "
            key={item.name}
          >
            <div className="px-4 flex-1">
              <p className="text-lg text-black font-semibold mb-1">
                {item.name}
              </p>
              <p className="text-lg text-black font-semibold mb-1">
                {item.username}
              </p>
              <div className="flex justify-between">
                <p className=" w-12 h-8 flex items-center justify-center bg-gray-800 text-gray-200   rounded mt-2 mb-2">
                  $720
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 mr-12">
              <button
                className="w-8 h-6 bg-blue-600 text-blue-100 rounded-md"
                onClick={() => descKey(item.id)}
              >
                -
              </button>
              <div>{item.cartQuantity}</div>
              <button
                className="w-8 h-6 bg-blue-600 text-blue-100 rounded-md"
                onClick={() => incKey(item.id)}
              >
                +
              </button>
            </div>
            <div>
              <button
                className="w-24 h-10 bg-red-600 text-red-100 rounded-md mr-4"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-end items-end  ">
          <div className="w-96 h-12 mb-4 bg-gray-800 rounded-md  flex items-center justify-around text-white shadow-md">
            <h1 className="text-xl ">Total Amount:</h1>
            <h1 className="text-xl font-bold">$720</h1>
          </div>
          <button className="  w-32 h-12 bg-blue-600 rounded-md font-bold text-blue-100 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all">
            Check Out!
          </button>
        </div>
      </div>
    );
  }
};

export default Carts;
