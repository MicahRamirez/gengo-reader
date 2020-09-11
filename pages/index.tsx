import React, { useContext } from "react";
import { LandingPage } from "../src/LandingPage";
import { AuthContext } from "../src/AuthContext";
import { AuthenticatedIndex } from "../src/AuthenticatedIndex";

export default function Index() {
  const { user, loadingUser } = useContext(AuthContext);
  // blank page while loading the user to prevent flickering
  // TODO: What would a loading state look like here.
  if (loadingUser) {
    return <div></div>;
  }
  if (!user) {
    return <LandingPage />;
  }
  return <AuthenticatedIndex />;
}
