import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

type Status = "LOGIN_ERROR" | "REGISTRATION_ERROR" | "UNIQUE_EMAIL" | "";
const LOGIN_ERROR = "LOGIN_ERROR";
const REGISTRATION_ERROR = "REGISTRATION_ERROR";
const UNIQUE_EMAIL = "UNIQUE_EMAIL";

// Kinda weird to be importing app logic types from a layout component
// TODO: Maybe error types and status defs should be moved to constants
export const errorStatuses = {
  LOGIN_ERROR,
  REGISTRATION_ERROR,
  UNIQUE_EMAIL,
};

const useStyles = makeStyles((theme) => ({
  typographyGrid: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  paper: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));

export const LoginRegistrationFormLayout: React.FC<{
  headerText: string;
  status: Status;
  setStatus: (status: Status) => void;
  children: React.ReactNode;
}> = ({ headerText, status, setStatus, children }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        className={classes.typographyGrid}
      >
        <Typography color="textSecondary" variant="h4">
          {headerText}
        </Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper className={classes.paper}>
            <StatusHeader status={status} setStatus={setStatus} />
            <Grid container justify="center" alignItems="center" spacing={3}>
              {children}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export const StatusHeader: React.FC<{
  status: Status;
  setStatus: (status: Status) => void;
}> = ({ status, setStatus }) => {
  const getStatusErrorText = (status: Status) => {
    let errorText = "";
    switch (status) {
      case LOGIN_ERROR:
        errorText = "Invalid username or password.";
        break;
      case REGISTRATION_ERROR:
        errorText = "Unable to register user.";
        break;
      case UNIQUE_EMAIL:
        errorText = "This account already exists.";
        break;
    }
    return errorText;
  };
  return status ? (
    <Alert severity="error" onClose={() => setStatus("")}>
      {getStatusErrorText(status)}
    </Alert>
  ) : null;
};
