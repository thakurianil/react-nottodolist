import React, { useState } from 'react';
import "../App.css";

function Form({ onSubmitData }) {  // Accept a prop to handle data submission
  const [formData, setFormData] = useState({
    task: "",
    hours: "",
    type: "good",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (formData.task && formData.hours) {
      const data = {
        task: formData.task,
        hours: formData.hours,
        type: formData.type,
      };
      
      onSubmitData(data); // Pass the data to parent component
      console.log("Submitted Data:", data);

      // Clear form
      setFormData({ task: "", hours: "", type: "good" });
    }
  };

  return (
    <div className="Form">
      <form name="myForm" onSubmit={handleFormSubmit} id="myForm" method="post">
        <div className="row">
          <div className="col-6">
            <div className="m-3">
              <input
                type="text"
                className="form-control"
                id="Task"
                placeholder="Task"
                name="task"
                value={formData.task}
                onChange={handleInputChange} // Update state on change
              />
            </div>
          </div>
          <div className="col-4">
            <div className="m-3">
              <input
                type="number"
                className="form-control"
                id="hours"
                placeholder="Hours"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange} // Update state on change
              />
            </div>
          </div>
          <div className="col-2">
            <button type="submit" id="Addtask" className="btn btn-primary m-3">
              Add New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
