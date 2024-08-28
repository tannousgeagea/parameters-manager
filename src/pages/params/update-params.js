import React from "react";
import { useParams } from "react-router-dom";
import DynamicForm from '../../components/form/dynamic-form';
import useFetchData from "../../hooks/use-fetch-data";

import '../style.css'
import '../service/service.css'
import processorIcon from '../../assets/icons/capability.png'

const ProcessorParamsPage = () => {
  const { processorName } = useParams();
  const { data, loading, error } = useFetchData(`/api/v1/params/${processorName}`)

  const { service_name, params = [] } = data || {};
  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error loading data</p>

  return (
      <div className="app-container">
        <div className="app-content">
  
          <div className='app-header'>
              <div className="section-title">
                  <img src={processorIcon} className="section-title spin" alt="processor-icon"></img>
                  <span>Processor: {processorName.replace(/_/g, " ").toUpperCase()}</span>
              </div>
          </div>
  
          <div className='processor-content'>
            <div className="processor-section">
                <div className='content-section'>
                    <DynamicForm 
                      params={params}
                      url_path={`/api/v1/params/${processorName}`}
                    />
                </div>
            </div>


          </div>
        </div>
      </div>
    );
  };

export default ProcessorParamsPage