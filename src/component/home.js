
import React, { useState } from 'react';
import Form from "./form";
import DisplayBadLIst from "./displayBadList";
import DisplayGoodLIst from "./displayGoodList";
import CalculateHours from "./calculateHours";
function Home() {
  
  const [formData, setFormData] = useState({
    task: "",
    hours: "",
    type:"good"
  });
  const [savedTasks, setSavedTasks] = useState([]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    
    if (formData.task && formData.hours) {
      setSavedTasks([...savedTasks, formData]); // Save data
      setFormData({ task: '', hours: '' }); // Clear form
    }
  };
  
  

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12  text-center p-3">
            <h1>Not To do list</h1>
          </div>
        </div>
      </div>
      <div class="container border border-light rounded-5">
        <div class="row p-2 ">
          <Form handleFormSubmit={handleFormSubmit} formData={formData} />
        </div>
      </div>
      <div class="container mt-4">
        <div class="row p-1 ">
          <DisplayGoodLIst formData={formData}/>
          <DisplayBadLIst />
        </div>
      </div>
      <CalculateHours />
    </>
  );
}

export default Home;
