import React from 'react';
import FormWrapper from './FormWrapper';

type AddressFormProps = {
  street: string;
  city: string;
  state: string;
  zip: number;
  updateFields: (newData: Partial<AddressFormProps>) => void;
};

// create me the simple address form
const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="User Address">
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label htmlFor="zip">Zip</label>
      <input
        type="number"
        min={1}
        id="zip"
        required
        value={zip}
        onChange={(e) => updateFields({ zip: +e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
