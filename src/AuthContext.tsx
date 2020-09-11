import React, { useState, useEffect } from "react";

import { AUTH_TOKEN } from "../lib/constants";
import { useGetUserQuery, Account } from "../clientTypes";

type AuthContext = {
  user: Pick<Account, "email" | "_id" | "firstName" | "lastName"> | undefined;
  setUser: (user: Account) => void;
  setUserToken: (token: string) => void;
  loadingUser: boolean;
};

export const AuthContext = React.createContext<AuthContext>({
  user: undefined,
  setUser: () => ({}),
  setUserToken: () => ({}),
  loadingUser: true,
});
// https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<
    Pick<Account, "email" | "_id" | "firstName" | "lastName">
  >();
  const [userToken, setUserToken] = useState("");

  const { loading } = useGetUserQuery({
    skip: userToken === "" || user !== undefined,
    onCompleted: (data) => {
      setUser(data.getLoggedInUser);
    },
  });

  // on first render check local storage from the token. If we have one set the user Token
  useEffect(() => {
    const authToken = window.localStorage.getItem(AUTH_TOKEN);
    if (authToken) {
      setUserToken(authToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setUserToken: (token: string) => {
          console.log("setUserToken invoked");
          setUserToken(token);
        },
        loadingUser: loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
