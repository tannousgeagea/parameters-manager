import React, { useState } from 'react';
import Spinner from '../ui/animation/spinner';
import InputField from '../ui/input/dynamic-input'
import { useUpdateParams } from '../../hooks/use-upload-params';
import { useHandleStatus } from '../../hooks/use-handle-submit';
import useHandleParamsChange from '../../hooks/use-handle-params-change';
import './dynamic-form.css'

const DynamicForm = ({ url_path, params }) => {
  const { formData, updatedParams, handleChange} = useHandleParamsChange(params);
  const { updateConfig, loading, error, data } = useUpdateParams();  // Use the hook
  const { handleStatus, statusMessage, setStatusMessage, handleCloseMessage } = useHandleStatus();

  const handleSubmit = async (e, restart = false) => {
    e.preventDefault();
    try {
      const response = await updateConfig(url_path, updatedParams, restart);
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
    <form className='form'>
      <div className="button-container">
        <button type="button" disabled={loading} className='button-container normal' onClick={(e) => handleSubmit(e, false)}>Update Params</button>
        <button type="button" disabled={loading} className='button-container danger' onClick={(e) => handleSubmit(e, true)}>Update Params & Restart</button>
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
