import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: "1em",
  },
  appBarText: {
    em: "12",
  },
}));

const GengoAppBar: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              Gengo Reader
            </Typography>
          </Link>
          <Link href="/login">
            <Button data-cy="nav-login" color="inherit">
              Login
            </Button>
          </Link>
          <Link href="/registration">
            <Button
              data-cy="nav-registration"
              variant="outlined"
              color="inherit"
            >
              Get Started
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { GengoAppBar };
