import { GetServerSideProps } from "next";
import dataProvider from "@pankod/refine-simple-rest";
import { GetListResponse, LayoutWrapper, useTable } from "@pankod/refine-core";
import ProductCards from "@components/ProductCards";
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  products: object;
}

type ItemProp = {
  products: GetListResponse<IProduct>;
};

const ProductList: React.FC<ItemProp> = ({ products }) => {
  const { tableQueryResult } = useTable<IProduct>({
    resource: "products",
    queryOptions: {
      initialData: products,
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
              products={product}
              key={product.id}
              title={product.title}
              category={product.category}
              description={product.description}
              cardImage={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </LayoutWrapper>
  );
};

export default ProductList;

export const getStaticProps: GetServerSideProps = async context => {
  const data = await dataProvider("https://fakestoreapi.com").getList<IProduct>(
    {
      resource: "products",
    }
  );

  return {
    props: { products: data },
  };
};
