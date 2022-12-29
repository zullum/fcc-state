import React from 'react';
import FormWrapper from './FormWrapper';

type AccountFormProps = {
  email: string;
  password: string;
  updateFields: (newData: Partial<AccountFormProps>) => void;
};

// create me the simple account form with email and password
const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
