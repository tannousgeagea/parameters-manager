import { useState } from "react";

const useHandleParamsChange = (params = []) => {  // Pass params directly
  const initialFormData = params.reduce((acc, param) => {
    if (['text', 'number', 'float'].includes(param.input_type)) {
      acc[param.name] = '';
    } else {
      acc[param.name] = param.value;
    }
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [updatedParams, setUpdatedParams] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });

    if (value === '') {
      const { [name]: removed, ...rest } = updatedParams;
      setUpdatedParams(rest);
    } else {
      setUpdatedParams({ ...updatedParams, [name]: value });  // Track updated parameters
    }
  };

  return { formData, updatedParams, handleChange };
};

export default useHandleParamsChange;



