import React from 'react';
import FormWrapper from './FormWrapper';

type UserFormProps = {
  fname: string;
  lname: string;
  age: number;
  updateFields: (newData: Partial<UserFormProps>) => void;
};

const UserForm = ({ fname, lname, age, updateFields }: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="fname">First name</label>
      <input
        type="text"
        id="fname"
        autoFocus
        required
        value={fname}
        onChange={(e) => updateFields({ fname: e.target.value })}
      />
      <label htmlFor="lname">Last name</label>
      <input
        type="lname"
        id="lname"
        required
        value={lname}
        onChange={(e) => updateFields({ lname: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        min={1}
        id="age"
        required
        value={age}
        onChange={(e) => updateFields({ age: +e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
