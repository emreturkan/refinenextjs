import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import "src/styles/global.css";
import { Layout } from "@components/Layout";
import { Provider } from "react-redux";
import { store } from "src/store";

const API_URL = "https://fakestoreapi.com";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      Layout={Layout}
      resources={[{ name: "products" }]}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Refine>
  );
}

export default MyApp;
