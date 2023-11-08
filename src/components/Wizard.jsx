import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Icon1 from "./Icon1";

const steps = [
  {
    label: "Carrier Arrives @ Caleres",
    description: ` Note to guard: All gates must be kept closed and no authorised trucks are allowed into the yard.`,
    icon: <Icon1 />,
  },
  {
    label: "Is the Driver at the right address?!",
    description:
      "Show addresses for CAL1 and CAL2 here. Redirect to alternative address if not",
  },
  {
    label: "Enter PINC tag",
    description: "Pick upp a PINC tag and activate it by scanning it.",
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
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 7 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <br />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Submit Asset" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            All steps completed - Asset successfully submitted!
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            NEW ASSET
          </Button>
        </Paper>
      )}
    </Box>
  );
}
