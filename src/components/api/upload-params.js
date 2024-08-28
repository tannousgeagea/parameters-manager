import axios from 'axios';

const API_BASE_URL = 'http://10.7.0.6:23085';

export const updateParams = async (url_path, formData, restart = false) => {
  const payload = { ...formData, restart };

  console.log(payload)
  try {
    const response = await axios.put(`${API_BASE_URL}${url_path}`, payload, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating configuration:', error);
    throw error;  // Re-throw the error to be handled by the calling function
  }
};