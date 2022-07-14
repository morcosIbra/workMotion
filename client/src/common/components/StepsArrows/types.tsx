export interface Props {
  steps: { key: string; value: string; }[],
  activeStep: string,
  onStepClick: (status: string, employeeId: number) => void,
  onStepClickArgs: [number],
};

export type StepProps = {
  active: boolean
};