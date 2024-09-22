import React, { useState } from 'react';
import "../App.css";

function Form({ handleFormSubmit, formData }) {
 let onHandleSubmit = handleFormSubmit;


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
                value={formData.task}

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
