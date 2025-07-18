import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ViewTask component receives tasks as props from the parent (AddTask)
function ViewTask({ tasks }) {
  return (
    <div className="container mt-4">
      {/* Section heading */}
      <h4 className="text-center mb-3">📋 Task List</h4>

      {/* Check if task list is empty */}
      {tasks && tasks.length === 0 ? (
        <p className="text-center text-muted">No tasks added yet.</p>
      ) : (
        // Render task list using Bootstrap list group
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index} // Required unique key for React to optimize rendering
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {/* Display task name on the left */}
              <span>{task.name}</span>

              {/* Display task date as a badge on the right */}
              <span className="badge bg-secondary">{task.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewTask;
