import React, { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

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

interface Account {}

type AuthContext = {
  user: Account;
  setUser: (user: Account) => void;
  userToken: string;
  setUserToken: (userToken: string) => void;
};

export const AuthContext = React.createContext<AuthContext | undefined>(
  undefined
);
// https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [getUser, { data }] = useLazyQuery(GET_LOGGED_IN_USER);
  const router = useRouter();

  const [user, setUser] = useState({});
  const [userToken, setUserToken] = useState("");

  // on first render check local storage from the token. If we have one set the user Token
  useEffect(() => {
    const checkAuthToken = () => {
      const authToken = window.localStorage.getItem(AUTH_TOKEN);
      console.log("saved auth token", authToken);
      if (authToken) {
        setUserToken(authToken);
      }
    };
    checkAuthToken();
    window.addEventListener("storage", checkAuthToken);
    return () => {
      window.removeEventListener("storage", checkAuthToken);
    };
  }, []);

  useEffect(() => {
    async function fetchAuthenticatedUser() {
      if (userToken) {
        try {
          await getUser();
        } catch (error) {
          console.log(error);
          console.warn("Unable to obtain authenticated user");
        }
      }
    }
    if (data && data.getLoggedInUser) {
      setUser(data.getLoggedInUser);
      router.push("/home");
      console.log("rendering");
    }
    if (Object.keys(user).length === 0 && userToken) {
      fetchAuthenticatedUser();
    }
    // issue with dependency array keeps component rerendering.
  }, [userToken, data.email]);

  return (
    <AuthContext.Provider value={{ user, setUser, userToken, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};
