import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import { GengoAppBar } from "./AppBar";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GengoAppBar />
      <Grid container spacing={3}>
        {children}
      </Grid>
    </div>
  );
};

export { Layout };
