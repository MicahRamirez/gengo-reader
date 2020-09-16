import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { useGetAllLanguagesQuery } from "../clientTypes";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export const SetUserTypeFlow: React.FC<{ userId: string }> = ({ userId }) => {
  const { data } = useGetAllLanguagesQuery();
  console.log(data?.getAllLanguages);
  return (
    <Grid
      container
      alignContent={"center"}
      alignItems="center"
      xs={12}
      justify="center"
    >
      <Grid container item xs={12} justify="center">
        <Grid item>
          <Typography variant="h5">Welcome to Gengo Reader</Typography>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Paper>
          <Typography variant="h5">A student: </Typography>
          <ul>
            <li>
              <Box fontStyle="italic">Works with a teacher</Box>
            </li>
            <li>
              <Box fontStyle="italic">Works on discussion sections</Box>
            </li>
            <li>
              <Box fontStyle="italic">Reads articles</Box>
            </li>
          </ul>
          <Grid container alignItems="center">
            <InputLabel id="language-type">Learning Language</InputLabel>
            <Select value="" labelId="language-type" id="select">
              {data
                ? data.getAllLanguages.map((language) => {
                    return (
                      <MenuItem value={language?.code}>
                        {language?.language_string}
                      </MenuItem>
                    );
                  })
                : []}
            </Select>
            <Button>Continue as Student</Button>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper>
          <Typography variant="h5">A teacher: </Typography>
          <ul>
            <li>
              <Box fontStyle="italic">Works with students</Box>
            </li>
            <li>
              <Box fontStyle="italic">
                Creates articles for language learners
              </Box>
            </li>
            <li>
              <Box fontStyle="italic">
                Can utilize existing articles for language learning
              </Box>
            </li>
          </ul>
          <Grid container alignItems="center">
            <Button>Continue as Teacher</Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
