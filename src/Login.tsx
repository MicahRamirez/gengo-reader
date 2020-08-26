import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const LOGIN = gql`
  mutation doLogin($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const LoginForm: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [login, { data }] = useMutation(LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(children);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login({ variables: { email, password } });
      }}
    >
      {children}
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  typographyGrid: {
    marginBottom: theme.spacing(4),
  },
  loginButton: {
    marginBottom: theme.spacing(2),
  },
}));

export const MainLoginFormBody = (props: any) => {
  const classes = useStyles();
  return (
    <div>
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
      <Paper>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={10} justify="center" container>
            <TextField
              variant="outlined"
              id="email"
              label="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              InputLabelProps={{
                disableAnimation: true,
                shrink: true,
                className: "Mui-focused",
              }}
              required
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item container justify="center" xs={12} sm={10}>
            <TextField
              variant="outlined"
              id="password"
              label="password"
              name="email"
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
              className={classes.loginButton}
              color="primary"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
