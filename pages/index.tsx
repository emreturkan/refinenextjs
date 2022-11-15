import { GetServerSideProps } from "next";
import { GetListResponse, LayoutWrapper, useTable } from "@pankod/refine-core";
import ProductCards from "@components/ProductCards";
import { DataProvider } from "@pankod/refine-strapi-v4";
interface IProduct {
  id: number;
  name: string;
  username: string;
}

type ItemProp = {
  users: GetListResponse<IProduct>;
};

const ProductList: React.FC<ItemProp> = ({ users }) => {
  const { tableQueryResult } = useTable<IProduct>({
    resource: "users",
    queryOptions: {
      initialData: users,
    },
  });

  //   console.log(products.data);

  return (
    <LayoutWrapper>
      <div className="grid grid-cols-4 gap-6 px-24 my-8">
        {tableQueryResult?.data?.data?.map(product => {
          console.log(product);

          return (
            <ProductCards
              id={product.id}
              name={product.name}
              username={product.username}
            />
          );
        })}
      </div>
    </LayoutWrapper>
  );
};

export default ProductList;

export const getStaticProps: GetServerSideProps = async context => {
  const data = await DataProvider(
    "https://jsonplaceholder.typicode.com"
  ).getList<IProduct>({
    resource: "users",
  });

  return {
    props: { users: data },
  };
};
