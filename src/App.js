import './App.css';
import { useState } from 'react';
import {Task} from './Task';

function App() {
  const [todoList, setTodoList]=useState([]); //initial value tpye is array
  const [newTask, setNewTask]=useState(""); 

  const handleChange=(event)=>{
    setNewTask(event.target.value);
    console.log(newTask);
  };

  const addTask=()=>{
    //inside state, it can't use push to add value into the array
    const task={
      //Object
      id: todoList.length===0 ? 1: todoList[todoList.length-1].id+1,
      taskName: newTask,
      completed: false,
    };

    //... means take the exact SAME component from todoList array
    //const newTodoList=[...todoList, task]; 
    //setTodoList(newTodoList); 
    setTodoList([...todoList, task]);
  };

  const deleteTask=(id)=>{
    //reason use id, is to avoid delete the same name task
    const newTodoList=todoList.filter((task)=>{
      // if(task===taskName){
      //   return false;
      // }else{
      //   return true;
      // }
      return task.id!==id;
    });
    setTodoList(newTodoList);
  }

  const completedTask =(id)=>{
    //don't forget to use setTodoList to change the state variable "todoList"
    setTodoList(
      todoList.map((task)=>{
        if(task.id===id){
          return {...task, completed: true};
        }else{
          return task;
        }
      })
    ); 
  };

  return (
    <div className="App">
      <div className='addTask'>
        <input type='text' onChange={handleChange}/>

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {todoList.map((task)=>{
          return (
            <Task 
              taskName={task.taskName} 
              id={task.id} 
              completed={task.completed} 
              deleteTask={deleteTask} 
              completedTask={completedTask}/>
          );
        })}

      </div>
    </div>
  );
}

export default App;
