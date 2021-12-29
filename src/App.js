import './App.css';
import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import { firebase } from "firebase";
import { db } from "./firebase-config";

function App() {
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    console.log("you are trying to add a task");
    db.collection("Todo Task").add({
      inProgress: true,
      Timestamp: firebase.firestore.FieldValue.sreverTimeStamp(),
      Task: task
    })
    setTask("");
  }

  return (
    <div className="App">
      <div className='container'>
        <header><h1>todolist application</h1></header>
        <form>
          <TextField id="outlined-basic" className="task-input" label="write a task" variant="outlined" />
          <Button type="submit" onClick={addTask} style={{ display: "none" }} variant="outlined">Outlined</Button>

        </form>
      </div>

    </div>
  );
}

export default App;
