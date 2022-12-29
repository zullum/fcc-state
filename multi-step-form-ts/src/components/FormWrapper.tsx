import React, { ReactNode } from 'react';

type FormrapperProps = {
  title: string;
  children: ReactNode;
};

// create me the simple form wrapper with grid style and children
const FormWrapper = ({ title, children }: FormrapperProps) => {
  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          margin: '0',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: 'grid',
          gap: '1rem',
          justifyContent: 'flex-start',
          gridTemplateColumns: 'auto minmax(auto, 400px)',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
