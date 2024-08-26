import React, { useState } from 'react';
import Spinner from '../ui/animation/spinner';
import InputField from '../ui/input/dynamic-input'
import { useUpdateParams } from '../../hooks/use-upload-params';
import { useHandleStatus } from '../../hooks/use-handle-submit';
import useHandleParamsChange from '../../hooks/use-handle-params-change';
import './dynamic-form.css'

const DynamicForm = ({ params }) => {
  const { formData, updatedParams, handleChange} = useHandleParamsChange(params);
  const { updateConfig, loading, error, data } = useUpdateParams();  // Use the hook
  const { handleStatus, statusMessage, setStatusMessage, handleCloseMessage } = useHandleStatus();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateConfig(updatedParams);
      if (response) {
        handleStatus(response);
      } 
    } catch (error) {
        setStatusMessage({
          type: 'error',
          message: 'An unexpected error occurred. Please try again.',
        });
      }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className="button-container">
        <button type="submit" disabled={loading}>Submit</button>
      </div>

      <div className={`input-group ${loading ? 'loading' : ''}`}>  {/* Wrapper div for all inputs */}
        {statusMessage && (
          <div className={`status-message ${statusMessage.type}`}>
            <span>{statusMessage.message}</span>
            <button className="close-button" onClick={handleCloseMessage}>
              &times;
            </button>
          </div>
        )}

        <div className='input-section'>
          {params.map((param) => (
            <div key={param.name} className="input-wrapper"> {/* Individual input wrapper div */}
                  <InputField
                    key={param.name}
                    param={param}
                    value={formData[param.name]}
                    onChange={handleChange}
                  />
            </div>
          ))}
          
          {loading && 
            <div className='loading-spinner'>
              <Spinner />
            </div>
          }
        </div>

      </div>
    </form>
  );
};

export default DynamicForm;
