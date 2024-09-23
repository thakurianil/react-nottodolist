import React, { useState } from "react";
import "../App.css";
import DisplayBadList from "./displayBadList";
import DisplayGoodList from "./displayGoodList";
import CalculateHours from "./calculateHours";
function Form() {
  function generateId() {
    let id = "";
    const string =
      "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    for (let i = 0; i < 6; i++) {
      const idValue = Math.floor(Math.random() * string.length);
      id += string[idValue];
    }
    return id;
  }

  const [formData, setFormData] = useState({
    task: "",
    hours: "",
    type: "good",
    id: "",
    isChecked: false,
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSelected = (id, isChecked) => {
    setSubmittedData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isSelected: isChecked } : item
      )
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (formData.task && formData.hours) {
      const data = {
        task: formData.task,
        hours: formData.hours,
        type: formData.type,
        id: generateId(),
      };

      setSubmittedData([...submittedData, data]); // Add new data to the array

      setFormData({ task: "", hours: "", type: "good" });
    }
  };

  // Filter good and bad tasks from submitted data
  const goodTasks = submittedData.filter((data) => data.type === "good");

  const badTasks = submittedData.filter((data) => data.type === "bad");
  const totalHours = submittedData.reduce(
    (acc, value) => acc + parseFloat(value.hours),
    0
  );

  const changeTaskType = (index) => {
    setSubmittedData((prevList) =>
      prevList.map((item, i) =>
        item.id === index
          ? { ...item, type: item.type === "good" ? "bad" : "good" }
          : item
      )
    );
  };

  const deleteTask = (index) => {
    setSubmittedData((prevList) =>
      prevList.filter((item) => item.id !== index)
    );
  };

  return (
    <>
      <div className="container border border-light rounded-5">
        <div className="row p-2 ">
          <div className="Form">
            <form
              name="myForm"
              onSubmit={handleFormSubmit}
              id="myForm"
              method="post"
            >
              <div className="row">
                <div className="col-5">
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
                <div className="col-3">
                  <div className="m-3">
                    <input
                      type="number"
                      className="form-control"
                      id="hours"
                      placeholder="Hours"
                      name="hours"
                      value={formData.hours}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="m-3">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="good">Good</option>
                      <option value="bad">Bad</option>
                    </select>
                  </div>
                </div>
                <div className="col-2">
                  <button
                    type="submit"
                    id="Addtask"
                    className="btn btn-primary m-3"
                  >
                    Add New Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row p-1">
          <DisplayGoodList
            goodList={goodTasks}
            onChangeType={changeTaskType}
            onSelected={onSelected}
            onDeleteType={deleteTask}
          />

          <DisplayBadList
            badList={badTasks}
            onChangeType={changeTaskType}
            onDeleteType={deleteTask}
          />
        </div>
      </div>

      <CalculateHours totalHours={totalHours} />
    </>
  );
}

export default Form;
