
import TextInput from "./text";
import RangeInput from "./range";
import NumberInput from "./number";
import FloatInput from "./float";
import CheckboxInput from "./checkbox";
import React from 'react';

const InputField = ({ param, value, onChange }) => {
  const { name, input_type } = param;

  switch (input_type) {
    case 'text':
      return (
        <TextInput
          key={param.name}
          name={name}
          value={value}
          description={param.description}
          onChange={onChange}
        />
      );
    case 'range':
      return (
        <RangeInput
          key={param.name}
          name={name}
          value={value}
          description={param.description}
          metaInfo={param.meta_info}
          onChange={onChange}
        />
      );
    case 'number':
      return (
        <NumberInput
          key={param.name}
          name={name}
          value={value}
          description={param.description}
          onChange={onChange}
        />
      );
    case 'float':
      return (
        <FloatInput
          key={param.name}
          name={name}
          value={value}
          description={param.description}
          onChange={onChange}
        />
      );
    case 'checkbox':
      return (
        <CheckboxInput
          key={param.name}
          name={name}
          value={value}
          description={param.description}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
};

export default InputField;