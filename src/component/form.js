import React, { useState } from 'react';
import "../App.css"

function Form() {
    let listData = [];
  const [formData, setFormData] = useState({
    task: '',
    hours: '',
  });

  const onHandleSubmit = (e) => {
    e.preventDefault(); 
    listData += formData;    
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='Form'>
    <form name="myForm" onSubmit={onHandleSubmit} id="myForm" method="post">
        <div className='row'>
      <div className="col-6">
        <div className="m-3">
          <input
            type="text"
            className="form-control"
            id="Task"
            placeholder="Task"
            name="task"
            value={formData.task}
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
            value={formData.hours}
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

export  default Form;
