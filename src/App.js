import React from "react";
import Wizard from "./components/Wizard";
import { Box } from "@mui/material";
// import NewGrid from "./components/NewGrid";
// import Step from "./components/Step";
// import NewGrid from "./components/NewGrid";

const App = () => {
  return (
    // <Grid
    //   container
    //   spacing={0}
    //   direction="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   sx={{ minHeight: "100vh" }}
    // >
    //   <Grid item xs={3}>
    //     <Wizard />
    //   </Grid>
    // </Grid>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
    >
      <Wizard />
    </Box>
  );
};

export default App;
