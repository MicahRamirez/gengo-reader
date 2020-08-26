import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { TextField } from "formik-material-ui";

const LOGIN = gql`
  mutation doLogin($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  typographyGrid: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
}));

export const LoginForm: React.FC<{}> = () => {
  const [login, { data }] = useMutation(LOGIN);
  // validation/normalization functions
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, actions) => {
        const res = await login({ variables: { ...values } });
        console.log(res);
        console.log(actions);
        console.log(data);
      }}
    >
      {(props) => (
        <Form>
          <Grid
            className={classes.typographyGrid}
            container
            item
            justify="center"
            alignItems="center"
          >
            <Typography color="textSecondary" variant="h4">
              Log in to Gengo
            </Typography>
          </Grid>
          <Paper className={classes.paper}>
            <Grid container justify="center" alignItems="center" spacing={3}>
              <Grid item xs={12} sm={10} justify="center" container>
                <Field
                  name="email"
                  label="email"
                  component={TextField}
                  variant="outlined"
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                    className: "Mui-focused",
                  }}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item container justify="center" xs={12} sm={10}>
                <Field
                  name="password"
                  label="password"
                  component={TextField}
                  variant="outlined"
                  id="password"
                  placeholder="********"
                  fullWidth
                  margin="normal"
                  required
                  type="password"
                  InputLabelProps={{
                    disableAnimation: true,
                    shrink: true,
                    className: "Mui-focused",
                  }}
                />
              </Grid>
              <Grid item container xs={12} sm={10} justify="center">
                <Button color="primary" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};
