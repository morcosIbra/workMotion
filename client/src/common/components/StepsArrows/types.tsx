export interface Props {
  steps: { key: string; value: string; }[],
  activeStep: string,
  onStepClick: (status: string, employeeId: number) => void,
  onStepClickArgs: [any],
};

export type StepProps = {
  active: boolean
};