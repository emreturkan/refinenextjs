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

  return (
    <div className="flex  flex-col ">
      {items.map(item => (
        <div
          className="w-[720px] pb-2 outline outline-[#042940] relative mb-8 flex items-center "
          key={item.name}
        >
          <div className="px-4 flex-1">
            <p className="text-lg text-black font-semibold mb-1">{item.name}</p>
            <p className="text-lg text-black font-semibold mb-1">
              {item.username}
            </p>
            <div className="flex justify-between">
              <p className="outline outline-[#D6D58E] outline-offset-2 p-1 bg-[#042940] w-fit text-white rounded mt-2 mb-2">
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
      <div className="relative">
        <div className="w-96 h-12 bg-gray-800 rounded-md absolute right-0 flex items-center justify-around text-white shadow-md">
          <h1 className="text-xl ">Total Amount:</h1>
          <h1 className="text-xl font-bold">$720</h1>
        </div>
        <button className="absolute right-0 top-20 w-32 h-12 bg-blue-600 rounded-md font-bold text-blue-100 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all">
          Check Out!
        </button>
      </div>
    </div>
  );
};

export default Carts;
