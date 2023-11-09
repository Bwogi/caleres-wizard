import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import BasicCard from "./BasicCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewGrid() {
  return (
    <Box>
      <Grid container spacing={10}>
        <Grid xs={4}>
          {/* <Item> */}
          <Box
            display="flex"
            // justifyContent="center"
            // alignItems="center"
            // minHeight="100vh"
            gap={2}
          >
            <BasicCard
              title="CALERES 1 Building Address"
              street="15245 Van Vliet Ave,"
              city="Chino"
              state="CA 91710"
            />
            <BasicCard
              title="CALERES 2 Building Address"
              street="8985 Merrill Ave,"
              city="Chino"
              state="CA 91710"
            />
          </Box>

          {/* </Item> */}
        </Grid>
        {/* <Grid xs={4}>
          <Item>
            <BasicCard />
          </Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
