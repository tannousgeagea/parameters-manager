import React from 'react';
import './App.css'
import HomePage from './pages/home/home';
import ServicePage from './pages/service/service';
import ProcessorPage from './pages/processor/processor';
import ProcessorParamsPage from './pages/params/update-params';
import ServiceParamsPage from './pages/params/service-params';
import Layout from './components/ui/common/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  // const params = [
  //   {
  //     name: "db_url",
  //     value: "http://localhost:16052/api/v1/event/waste_segments",
  //     input_type: "text",
  //     description: "API url to send segments results to waste db writer",
  //     meta_info: null,
  //   },
  //   {
  //     name: "correction_factor",
  //     value: 0.01,
  //     input_type: "float",
  //     description: "correction factor is used to correct pixel value to metric value",
  //     meta_info: null,
  //   },
  //   {
  //     name: "weights",
  //     value: "/home/appuser/data/models/segments/yolov8.brewa_blu_01.pt",
  //     input_type: "text",
  //     description: "parameters weights of the trained model",
  //     meta_info: null,
  //   },
  //   {
  //     name: "conf",
  //     value: 0.25,
  //     input_type: "range",
  //     description: "confidence threshold of the trained model to filter detection",
  //     meta_info: {
  //       min: "0",
  //       max: "1",
  //       step: "0.05",
  //     },
  //   },
  //   {
  //     name: "mode",
  //     value: "track",
  //     input_type: "text",
  //     description: "mode of detection. options are track | detect",
  //     meta_info: null,
  //   },
  //   {
  //     name: "kafka_publish_topic",
  //     value: "cvision-dl-ops-core-waste-segments",
  //     input_type: "text",
  //     description: "Kakfa topic name to which segments publish its results to",
  //     meta_info: null,
  //   },
  //   {
  //     name: "kafla_retention_ms",
  //     value: 10000,
  //     input_type: "number",
  //     description: "Retain deleted messages for given milliseconds",
  //     meta_info: null,
  //   },
  //   {
  //     name: "tasks",
  //     value: {
  //       publish_to_kafka: true,
  //       save_results_into_db: true,
  //     },
  //     input_type: "checkbox",
  //     description: "tasks to be executed with the waste segments results",
  //     meta_info: null,
  //   },
  // ];

//   return (
//     <div className='app-container'>
//       <h1>Dynamic Form Example</h1>
//       <div className='app-content'>
//         <DynamicForm params={params} />
//       </div>
//     </div>
//   );
// };

// export default App;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path='/params' element={<ServiceParamsPage />} />
          <Route path='/services/:processorName' element={<ProcessorPage />} />
          <Route path='/params/:processorName' element={<ProcessorParamsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;