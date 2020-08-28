import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import isEmail from "validator/es/lib/isEmail";
// import normalizeEmail from "validator/es/lib/normalizeEmail";
import { Layout } from "../src/Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(),
    },
    subtitle: {
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(4),
    },
    gridbackgroundcolor: {
      backgroundColor: theme.palette.primary.main,
      paddingBottom: theme.spacing(12),
    },
    root: {
      color: "white",
      border: theme.palette.secondary.main,
    },
    formItem: {
      paddingRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  };
});

export default function Index() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <Grid
        className={classes.gridbackgroundcolor}
        container
        spacing={3}
        justify="center"
      >
        <Grid container item justify="center">
          <Grid item xs={10}>
            <Typography
              className={classes.heading}
              variant="h4"
              align="center"
              gutterBottom
              color="secondary"
            >
              Learn a language with articles
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="subtitle1"
              align="center"
              color="secondary"
              gutterBottom
            >
              The easiest place for teachers and students to interactively learn
              together!
            </Typography>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={10} md={4} className={classes.formItem}>
              <TextField
                key={email}
                classes={{ root: classes.root }}
                id="email"
                label="Email"
                color="secondary"
                variant="outlined"
                InputProps={{ className: classes.root }}
                fullWidth
                size="small"
                value={email}
                onChange={(val) => {
                  setEmail(val.target.value);
                }}
              />
            </Grid>
            <Grid item xs={10} md={2} className={classes.formItem}>
              <Button color="secondary" variant="outlined" fullWidth>
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
