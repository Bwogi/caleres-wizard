import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Icon1 from "./Icon1";
import { purple, grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";
import NewGrid from "./NewGrid";
import BasicCard from "./BasicCard";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: grey,
  },
});

const steps = [
  {
    label: "Carrier Arrives @ Caleres",
    description: ` All gates must be kept closed.`,
    // description1: `Unauthorised trucks are NOT allowed into the yard.`,

    // icon: <Icon1 />,
  },
  {
    label: "Is the Driver at the right address?!",
    // description: "CAL1, CAL2 addresses.",
  },
  {
    label: "Enter PINC tag",
    description: "Pick up a PINC tag. Scan to activate.",
  },
  {
    label: "Capture driver information",
    description: `Enter driver information component here`,
  },
  {
    label: "Capture Carrier and Asset Information",
    description: `Select Asset type...`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
              // optional={
              //   index === 7 ? (
              //     <Typography variant="caption">Last step</Typography>
              //   ) : null
              // }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                {/* <Typography>{step.description}</Typography> */}
                {/* <NewGrid /> */}

                <br />
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Submit Asset" : "Proceed"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      PREVIOUS STEP
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography color="secondary">
              Asset submitted successfully!
            </Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              ENTER NEW ASSET
            </Button>
          </Paper>
        )}
      </ThemeProvider>
    </Box>
  );
}
