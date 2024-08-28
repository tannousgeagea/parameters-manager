import { useState } from 'react';
import { updateParams } from '../components/api/upload-params'; 

export const useUpdateParams = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const updateConfig = async (url_path, params, restart = false) => {
    setLoading(true);
    setError(null);
    setData(null);  // Clear previous data
    try {
      console.log(restart)
      const response = await updateParams(url_path, params, restart);
      setData(response);  // Store the response data
      return response;  // Return the response data
    } catch (err) {
      setError(err);
      throw err;  // Ensure the error is propagated to the caller
    } finally {
      setLoading(false);
    }
  };

  return { updateConfig, loading, error, data };
};
