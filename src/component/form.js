import React, { useState } from 'react';
import "../App.css";

function Form({ handleFormSubmit, formData }) {
  const [localFormData, setLocalFormData] = useState(formData);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(localFormData); // Pass the local form data to the parent (App.js)
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...localFormData,
      [name]: value,
    });
  };

  return (
    <div className="Form">
      <form name="myForm" onSubmit={onHandleSubmit} id="myForm" method="post">
        <div className="row">
          <div className="col-6">
            <div className="m-3">
              <input
                type="text"
                className="form-control"
                id="Task"
                placeholder="Task"
                name="task"
                value={localFormData.task}
                onChange={onChange}
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
                value={localFormData.hours}
                onChange={onChange}
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
