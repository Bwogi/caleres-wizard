import React from "react";
import Wizard from "./components/Wizard";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Wizard />
      </Grid>
    </Grid>
  );
};

export default App;
