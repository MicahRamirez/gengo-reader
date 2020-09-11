import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "./AuthContext";

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      console.log("APP: there is no user and I should do something");
      console.log(router.pathname);
    } else {
      console.log("APP: there is a user");
      console.log(user);
    }
    console.log("APP: effect called");
  }, [router.pathname, user]);
  return <>{children}</>;
};
