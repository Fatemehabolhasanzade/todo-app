import './App.css';
import React, { useState, useEffect } from "react";
import { TextField, Button, listClasses } from '@mui/material';
import { firebase } from "firebase";
import { db } from "./firebase-config";

function App() {
  const [task, setTask] = useState("");
  const [taslList, setTaslList] = useState("");
  useEffect(() => {
    getTasks();
  }, [task])

  const addTask = (e) => {
    e.preventDefault();
    console.log("you are trying to add a task");
    db.collection("TodoTasks").add({
      inProgress: true,
      Timestamp: firebase.firestore.FieldValue.sreverTimeStamp(),
      Task: task
    })
    setTask("");
  }
  const getTasks = () => {
    db.collection("TodoTasks").onSnapshot((x) => {
      setTaslList(x.docs.map((docs) => ({
        id: docs.id,
        Task: docs.data().Task,
        inProgress: docs.data().inProgress
      })));
    })
  }

  return (
    <div className="App">
      <div className='container'>
        <header><h1>todolist application</h1></header>
        <form>
          <TextField id="outlined-basic" className="task-input" label="write a task" variant="outlined" />
          <Button type="submit" onClick={addTask} style={{ display: "none" }} variant="outlined">Outlined</Button>
          {/* show tasks */}
          {taslList.map((taskItem) => (
            <p>{taskItem.Task}</p>
          ))}
        </form>
      </div>

    </div>
  );
}


export default App;
