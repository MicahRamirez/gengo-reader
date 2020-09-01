import React, { useEffect, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "@apollo/react-hooks";

import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  useLazyQuery,
  gql,
} from "@apollo/client";

import theme from "../src/theme";
import links from "../lib/apolloContextLink";
import { AUTH_TOKEN } from "../lib/constants";

const GET_LOGGED_IN_USER = gql`
  query getUser {
    getLoggedInUser {
      email
      _id
      firstName
      lastName
    }
  }
`;

interface Apollo {
  client: ApolloClient<NormalizedCacheObject>;
}

interface Account {}

type AuthContext = {
  user: Account;
  setUser: (user: Account) => void;
};
export const AuthContext = React.createContext<AuthContext | undefined>(
  undefined
);
// https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [getUser, { data }] = useLazyQuery(GET_LOGGED_IN_USER);
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchAuthenticatedUser() {
      const authToken = window.localStorage.getItem(AUTH_TOKEN);
      if (authToken) {
        try {
          console.log("FETCHING USER");
          await getUser();
          if (data) {
            console.log("SETTING USER", data.getLoggedInUser);
            setUser(data.getLoggedInUser);
          }
        } catch (error) {
          console.warn("Unable to obtain authenticated user");
        }
      }
    }
    // if we have no userdata but we have an auth token then fetch the authenticated user
    if (!data && window.localStorage.getItem(AUTH_TOKEN)) {
      fetchAuthenticatedUser();
    } else {
      // otherwise watch local storage
      window.addEventListener("storage", fetchAuthenticatedUser);
    }

    return () => {
      window.removeEventListener("storage", fetchAuthenticatedUser);
    };
  }, []);

  if (data) {
    console.log(data);
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

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
            <Component {...pageProps} />
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
