import React from "react";
import useFetchData from "../../hooks/use-fetch-data";
import DynamicForm from '../../components/form/dynamic-form';
import '../style.css'
import '../service/service.css'
import paramsIcon from '../../assets/icons/cloud.png'

const ServiceParamsPage = () => {
  const { data, loading, error } = useFetchData('/api/v1/params/segmentation');
  
  if (error) return <p>Error loading data</p>; 
  if (loading) return <p>Loading data...</p>; 

  const { service_name, params = [] } = data || {};  // Ensure params is an array even if undefined

  console.log(params)

  return (
      <div className="app-container">
        <div className="app-content">
  
          <div className='app-header'>
              <div className="section-title">
                  <img src={paramsIcon} alt="param-icon" className="section-title rotateY"></img>
                  <span>Service Parameters: {service_name}</span>
              </div>
          </div>
  
          <div className='content-section'>
            <DynamicForm params={params}/>
          </div>

        </div>
      </div>
    );
  };

export default ServiceParamsPage