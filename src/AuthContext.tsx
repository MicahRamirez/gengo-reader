import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { AUTH_TOKEN } from "../lib/constants";
import { useGetUserQuery, Account } from "../clientTypes";

type AuthContext = {
  user: Pick<Account, "email" | "_id" | "firstName" | "lastName"> | undefined;
  setUser: (user: Account) => void;
  setUserToken: (token: string) => void;
};

export const AuthContext = React.createContext<AuthContext>({
  user: undefined,
  setUser: () => ({}),
  setUserToken: () => ({}),
});
// https://codesandbox.io/s/react-ts-complex-context-function-f1cv4?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.tsx
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<
    Pick<Account, "email" | "_id" | "firstName" | "lastName">
  >();
  const [userToken, setUserToken] = useState("");
  useGetUserQuery({
    skip: userToken === "" || user !== undefined,
    onCompleted: (data) => {
      setUser(data.getLoggedInUser);
      router.push("/home");
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
    <AuthContext.Provider value={{ user, setUser, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};
