import React from "react";
import Grid from "@material-ui/core/Grid";

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
