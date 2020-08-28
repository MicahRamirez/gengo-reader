import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as yup from "yup";

import { AUTH_TOKEN } from "../lib/constants";
import {
  LoginRegistrationFormLayout,
  errorStatuses,
} from "./LoginRegistrationFormLayout";

export const LOGIN = gql`
  mutation doLogin($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const useStyles = makeStyles((theme) => ({
  emailField: {
    marginTop: theme.spacing(2),
  },
}));

const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(32, "Password is too long")
    .required("Required"),
});

export const LoginForm: React.FC<{}> = () => {
  const [login] = useMutation(LOGIN);
  const router = useRouter();
  // validation/normalization functions
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        let res;
        try {
          res = await login({ variables: { ...values } });
          window.localStorage.setItem(AUTH_TOKEN, res.data.login);
          router.push("/home");
        } catch (error) {
          actions.setStatus(errorStatuses.LOGIN_ERROR);
        }
      }}
    >
      {({ status, setStatus }) => (
        <Form>
          <LoginRegistrationFormLayout
            headerText="Log in to Gengo"
            status={status}
            setStatus={setStatus}
          >
            <Grid item xs={12} sm={10} justify="center" container>
              <Field
                className={classes.emailField}
                name="email"
                label="Email"
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
                label="Password"
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
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </LoginRegistrationFormLayout>
        </Form>
      )}
    </Formik>
  );
};
