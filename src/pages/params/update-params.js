import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/ui/animation/spinner";
import { useParams } from "react-router-dom";
import DynamicForm from '../../components/form/dynamic-form';
import useFetchData from "../../hooks/use-fetch-data";

import '../style.css'
import './update-params.css'
import '../service/service.css'
import processorIcon from '../../assets/icons/capability.png'

const ProcessorParamsPage = () => {
  const { processorName } = useParams();
  const { data: processorData, loading: processorLoading, error: processorError } = useFetchData('/api/v1/processor')
  const { data, loading, error } = useFetchData(`/api/v1/params/${processorName}`)

  const { service_name, params = [] } = data || {};
  if (error || processorError) return <p>Error loading data</p>
  // if (loading) return <p>Loading ...</p>

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
            <div className="processor-section-small">
              {Object.keys(processorData).map((item, idx) => (
                  <Link to={`/params/${item}`} key={idx} className="no-underline-link">
                    <div className="processor-section-item">
                      <span>{item.replace("_", " ").toUpperCase()}</span>
                    </div>
                  </Link>
              ))}

              {processorLoading && 
                <div className='loading-spinner'>
                  <Spinner />
                </div>
              }

            </div>

            <div className="processor-section">
              {loading ? (
                <div className='loading-spinner'>
                  <Spinner />
                </div>
              ) : (
                <div className='content-section'>
                  <DynamicForm 
                    params={params}
                    url_path={`/api/v1/params/${processorName}`}
                  />
                </div>
              )
              }

            </div>


          </div>
        </div>
      </div>
    );
  };

export default ProcessorParamsPage