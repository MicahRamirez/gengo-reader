import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";

import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from "@apollo/client";

import theme from "../src/theme";
import links from "../lib/apolloContextLink";
import { AuthProvider } from "../src/AuthContext";
import { App } from "../src/App";

interface Apollo {
  client: ApolloClient<NormalizedCacheObject>;
}

const MyApp = (props: AppProps & Apollo) => {
  const { Component, pageProps, client } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Gengo Reader</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ApolloProvider client={client}>
          <AuthProvider>
            <App>
              <Component {...pageProps} />
            </App>
          </AuthProvider>
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

const RenderProp = (props: AppProps) => {
  const ac = new ApolloClient({
    link: links,
    cache: new InMemoryCache(),
  });
  return <MyApp {...props} client={ac} />;
};

export default RenderProp;
