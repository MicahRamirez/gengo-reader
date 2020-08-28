import React from "react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";

import {
  LoginRegistrationFormLayout,
  errorStatuses,
} from "./LoginRegistrationFormLayout";
import { LOGIN } from "./Login";
import { AUTH_TOKEN } from "../lib/constants";
const REGISTER = gql`
  mutation doRegistration(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      email
    }
  }
`;

const RegistrationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password is too long")
    .required("Required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match"),
});

export const Registration = () => {
  const [register] = useMutation(REGISTER);
  const [login] = useMutation(LOGIN);
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirm: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={async (values, actions) => {
        let registerResult;
        let loginResult;
        try {
          registerResult = await register({
            variables: {
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
            },
          });
        } catch (error) {
          console.log(error.message);
          console.log(error.message.endsWith("not unique."));
          if (error.message.endsWith("not unique.")) {
            actions.setStatus(errorStatuses.UNIQUE_EMAIL);
          } else {
            actions.setStatus(errorStatuses.REGISTRATION_ERROR);
          }
        }
        if (registerResult) {
          try {
            loginResult = await login({
              variables: { email: values.email, password: values.password },
            });
            window.localStorage.setItem(AUTH_TOKEN, loginResult.data.login);
            router.push("/home");
          } catch (error) {
            // should not happen in this flow, but maybe the service goes down
            actions.setStatus(errorStatuses.LOGIN_ERROR);
          }
        }
      }}
    >
      {({ status, setStatus }) => (
        <Form>
          <LoginRegistrationFormLayout
            headerText="Create an account"
            status={status}
            setStatus={setStatus}
          >
            <Grid item xs={12} sm={10} justify="center" container>
              <Field
                name="firstName"
                label="First name"
                component={TextField}
                variant="outlined"
                id="firstName"
                placeholder="First name"
                InputLabelProps={{
                  disableAnimation: true,
                  shrink: true,
                  className: "Mui-focused",
                }}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={10} justify="center" container>
              <Field
                name="lastName"
                label="Last name"
                component={TextField}
                variant="outlined"
                id="lastName"
                placeholder="Last name"
                InputLabelProps={{
                  disableAnimation: true,
                  shrink: true,
                  className: "Mui-focused",
                }}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={10} justify="center" container>
              <Field
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
                fullWidth
                required
                type="password"
                placeholder="Choose password"
                InputLabelProps={{
                  disableAnimation: true,
                  shrink: true,
                  className: "Mui-focused",
                }}
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={10}>
              <Field
                name="confirm"
                label="Confirm password"
                component={TextField}
                variant="outlined"
                id="confirm"
                fullWidth
                required
                type="password"
                placeholder="Confirm password"
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
                Create account
              </Button>
            </Grid>
          </LoginRegistrationFormLayout>
        </Form>
      )}
    </Formik>
  );
};
