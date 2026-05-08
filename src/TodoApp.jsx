import { useState } from "react";

export default function TodoApp() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      
      <h1>To Do App</h1>

      <div style={styles.inputSection}>
        
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />

        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>

      </div>

      <ul style={styles.list}>
        
        {tasks.map((item, index) => (
          
          <li key={index} style={styles.listItem}>
            
            {item}

            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteBtn}
            >
              Delete
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

const styles = {

  container: {
    width: "350px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f4f4f4",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    fontFamily: "Arial"
  },

  inputSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },

  input: {
    flex: 1,
    padding: "10px"
  },

  addBtn: {
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },

  list: {
    listStyle: "none",
    padding: 0
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px"
  },

  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer"
  }
};