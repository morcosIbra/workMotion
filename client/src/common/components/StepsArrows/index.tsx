import React from "react";
import { Step, StepsWrapper } from "./style";
import { Props } from "./types";



const StepsArrows: React.FC<Props> = ({ steps, activeStep, onStepClick, onStepClickArgs }) => {
  return (
    <StepsWrapper>
      {steps.map(({ key, value }) => (
        <Step
          key={key}
          active={key === activeStep}
          onClick={() => onStepClick(key, ...onStepClickArgs  )}
        >
          {value}
        </Step>
      ))}
    </StepsWrapper>
  );
};

export default StepsArrows;
