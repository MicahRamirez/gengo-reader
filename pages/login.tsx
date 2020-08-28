import React from "react";

import { Layout } from "../src/Layout";
import { LoginForm } from "../src/Login";

const Login = () => {
  return (
    <Layout>
      <style global jsx>{`
        body {
          background-color: #556cd6 !important;
        }
      `}</style>
      <LoginForm />
    </Layout>
  );
};

export default Login;
