
import '@fontsource/roboto';
import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Todo from './Todo.js';
import Form from "./Form.js";
import FilterButton from "./FilterButton.js";




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },

  addbtn: {
    '& > *': {
      margin: 1,
      width: 10,
      spacing: 8,
    },
  },


}));

const btn = document.querySelector('button');

let listData = [
  { id: "todo-0", title: "Eat", completed: false },
  { id: "todo-1", title: "Go shopping", completed: false },
  { id: "todo-2", title: "Eat Cheese", completed: false },
  { id: "todo-3", title: "Find my long lost best friend", completed: false },
  { id: "todo-4", title: "pilates...", completed: false },
  { id: "todo-5", title: "Eat Cheese", completed: false },
];

const taskList = listData.map(task => (
  <Todo
    id={task.id}
    title={task.title}
    completed={task.completed}
    key={task.id}
  />
));

function App() {
  const classes = useStyles();

  const [tasks, setTasks] = useState(listData.tasks);

  function addTask(name) {
    alert(name);
  }


  function handleSubmit(e) {
    e.preventDefault();
    alert('Hello, world!');
  }

  function addTask(name){
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className={classes.root}>
      <header className="App-header"></header>

      <div className="top">
        <h1>Your To-Do List!</h1>

        <p> Add any tasks to the list below:</p>

        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />

        <Button variant="contained" color="primary" className={classes.addbtn} m={10}
        onClick={() => 
          alert("Adding Task!")
        }
        >
          Add
        </Button>
        <hr></hr>
      </div>

      <div className = {classes.list}>
        <ul>
        {taskList}

          
        </ul>
      </div>

    </div>
  );
}


/*
          <Todo title="do stuff" completed = {false} id="todo-0"/>
          <Todo title="poo" completed = {false} id="todo-1"/>
          <Todo title="brush teeth" completed = {false} id="todo-2"/>
*/
export default App;
