import React, { ReactElement, useState } from 'react';

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
    }
  };

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    nextStep,
    previousStep,
    goTo,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
