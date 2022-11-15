import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import "src/styles/global.css";
import { Layout } from "@components/Layout";
import { Provider } from "react-redux";
import { store } from "src/store";
import { DataProvider } from "@pankod/refine-strapi-v4";

const API_URL = "https://jsonplaceholder.typicode.com";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const dataProvider = DataProvider(API_URL);
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider}
      Layout={Layout}
      resources={[{ name: "users" }]}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Refine>
  );
}

export default MyApp;
