import UserForm from './components/UserForm';
import useMultiStepForm from './hooks/useMultiStepForm';
import AddressForm from './components/AddressForm';
import AccountForm from './components/AccountForm';
import { useState } from 'react';

type FormData = {
  fname: string;
  lname: string;
  age: number;
  street: string;
  city: string;
  state: string;
  zip: number;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  fname: '',
  lname: '',
  age: 0,
  street: '',
  city: '',
  state: '',
  zip: 0,
  email: '',
  password: '',
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (newData: Partial<FormData>) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const {
    steps,
    currentStepIndex,
    currentStep,
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLastStep) {
      alert(`Form submitted!\n` + JSON.stringify(data, null, 2));
    } else {
      nextStep();
    }
  };

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1rem auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        backgroundColor: '#eee',
        boxShadow: '0 0 0.5rem #ccc',
        position: 'relative',
        fontFamily: 'sans-serif',
        maxWidth: 'max-content',
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {currentStep}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.5rem',
            marginTop: '1rem',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={previousStep}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
