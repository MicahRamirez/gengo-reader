import React from "react";

import { Layout } from "../src/Layout";
import { Registration } from "../src/Registration";

const Register = () => {
  return (
    <Layout>
      <style global jsx>{`
        body {
          background-color: #556cd6 !important;
        }
      `}</style>
      <Registration />
    </Layout>
  );
};

export default Register;
