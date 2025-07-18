import React, { useState } from "react";
import ViewTask from "./ViewTask";
import "bootstrap/dist/css/bootstrap.min.css";

function AddTask() {
  // useState hook to manage task input field (text)
  const [taskName, setTaskName] = useState("");

  // useState hook to manage task input field (date)
  const [taskDate, setTaskDate] = useState("");

  // useState to manage the full task list array
  const [taskList, setTaskList] = useState([]);

  // Function to handle adding a new task to the list
  const handleAddTask = () => {
    // Create a task object from input values
    const newTask = {
      name: taskName,
      date: taskDate,
    };

    // Add new task to existing taskList using spread operator
    setTaskList([...taskList, newTask]);

    // Clear input fields after adding task
    setTaskName("");
    setTaskDate("");

    // Log updated task list to console (for debugging)
    console.log("All Tasks:", [...taskList, newTask]);
  };

  return (
    <>
      {/* Task Input Form using Bootstrap */}
      <div className="container text-center">
        <div className="row">
          {/* Task Name Field */}
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Task
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Task"
                aria-label="Task"
                aria-describedby="basic-addon1"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} // Update taskName on input change
              />
            </div>
          </div>

          {/* Task Date Field */}
          <div className="col">
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                aria-label="Task Date"
                aria-describedby="basic-addon2"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)} // Update taskDate on input change
              />
              <span className="input-group-text" id="basic-addon2">
                Task Date
              </span>
            </div>
          </div>

          {/* Add Task Button */}
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {/* ViewTask component called here and passing taskList as props */}
      <ViewTask tasks={taskList} />
    </>
  );
}

export default AddTask;
