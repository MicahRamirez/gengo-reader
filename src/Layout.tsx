import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import { GengoAppBar } from "./AppBar";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    flexDirection: "column",
  },
}));

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item>
          <GengoAppBar />
        </Grid>
        {children}
      </Grid>
    </div>
  );
};

export { Layout };
