import { useState } from "react";

export const useHandleStatus = () => {

    const [statusMessage, setStatusMessage] = useState(null); 

    const handleStatus = (response) => {
        const { status_code, status_description, details } = response;
        
        if (status_code === "ok") {
          setStatusMessage({
            type: 'success',
            message: `Configuration updated successfully: ${status_description} !`,
          });
        } else if (status_code === "partial-success") {
          const failedParams = details.filter(item => item.status === 'failed');
          setStatusMessage({
            type: 'warning',
            message: `${status_description}. ${failedParams.length} parameters failed.`,
          });
        } else if (status_code === "failed") {
          setStatusMessage({
            type: 'error',
            message: `Update failed. ${status_description}`,
          });
        }
      };

      const handleCloseMessage = () => {
        setStatusMessage(null);  // Close the message
      };

    return { handleStatus, statusMessage, setStatusMessage, handleCloseMessage };
}
