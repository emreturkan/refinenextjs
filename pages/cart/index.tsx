import { GetListResponse, LayoutWrapper, useTable } from "@pankod/refine-core";
import Carts from "@components/Cart";

const ProductList = () => {
  return (
    <LayoutWrapper>
      <div className="flex items-center my-8">
        <Carts />
      </div>
    </LayoutWrapper>
  );
};

export default ProductList;
