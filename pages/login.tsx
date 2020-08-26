import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import { Layout } from "../src/Layout";
import { LoginForm, MainLoginFormBody } from "../src/Login";

const useStyles = makeStyles(() => ({
  root: {
    margin: "auto",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Layout>
      <style global jsx>{`
        body {
          background-color: #556cd6 !important;
        }
      `}</style>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <LoginForm>
          <MainLoginFormBody />
        </LoginForm>
      </Grid>
    </Layout>
  );
};

export default Login;
