import "./App.css";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { db } from "./firebase-config";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState("");
  // useEffect(() => {
  //   getTasks();
  // }, [task])

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
  // const getTasks = () => {
  //   db.collection("TodoTasks").onSnapshot((querySnapshot) => {
  //     let result = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       Task: doc.data().Task,
  //       inProgress: doc.data().inProgress
  //     }))
  //     setTaskList(result);
  //   })
  // }
  // console.log(taskList);

  return (
    <div className="App">
      <div className='container'>
        <header><h1>todolist application</h1></header>
        <form>
          <TextField id="outlined-basic" className="task-input" label="write a task" variant="outlined" />
          <Button type="submit" onClick={addTask} style={{ display: "none" }} variant="outlined">Outlined</Button>
          {/* show tasks */}
          {/* {taskList.map((taskItem) => {
            return (
              <p>{taskItem.Task}</p>
            )
          }

          )} */}
        </form>
      </div>

    </div>
  );
}


export default App;
