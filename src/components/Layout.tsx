import * as React from "react";
import { LayoutProps } from "@pankod/refine-core";
import Link from "next/link";
import { useSelector } from "react-redux";
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const value = useSelector(state => state.cartSlice.user);
  console.log(value);

  return (
    <div className="flex flex-col items-around ">
      <div className="py-4 px-12 md:py-8 md:px-24 sticky top-0 z-50 bg-[#fff]  flex justify-between items-center">
        <Link href="/">
          <img
            className="w-36 md:w-full"
            src="./refine_logo.png"
            alt="refine logo"
          />
        </Link>
        <Link
          href="/cart"
          className="w-20 h-10 md:w-32 md:h-12  bg-blue-600 text-blue-100  hover:bg-blue-100 hover:text-blue-600 transition-all  rounded mt-2 mb-2 flex items-center justify-center gap-x-4 text-xl"
        >
          Cart
          <p>{value.length}</p>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};
