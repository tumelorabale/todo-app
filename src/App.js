import React, { useState } from "react";
import bin from './bin.png'
import './App.css'
import DateTime from "./DateTime";



function ListItem(props){
  return(
    <div className="list-item row jc-space-between">
        {/* */}
        <span onClick={()=>
        props.markComplete(props.index)}>
        {props.itemData.description} 
        </span>
        
        {/* */}
        <img 
        src={bin} 
        alt="trash bin" 
        className="delete-icon" 
        onClick={()=>
        props.deleteTask(props.index)} >
        </img>

    </div>)
}

function App() {
  // initialise the state of the input as empty sting
  const[taskInput,updateTaskInput] = useState("")

  // maintaining todo list 
  const [toDoList, updateToDoList] = useState([]) 
  

  // addTask function
  const addTask=()=>{
    toDoList.push({description:taskInput})  
    updateToDoList(toDoList)
    updateTaskInput("")
  }
  // deleteTask function 
  const deleteTask = (index)=>{
    const newList = toDoList.filter((item,i)=>i !== index)
    updateToDoList(newList)
  }
  // mark completed
  const markComplete = (index)=>{
    const list =[...toDoList];
    list[index].isComplete = true;
    updateToDoList(list)
  }



  return (
    <div className="app-background">
      <p className="heading-text">TODO APP</p>
      <DateTime/>
      <div className="task-container">
        <div>
        <input className="text-input" value={taskInput} onChange={(event)=>updateTaskInput(event.target.value)}></input>
        <button className="add-button" onClick={addTask}>Add task</button>
        </div>
        
        {/* we have to perfom conditional rendering. 
          If toDoList has something, show all listitem by mapping ,
         else show <p> No task Added */}

        {toDoList?.length? toDoList.map((toDoObject,index)=>
          <ListItem 
          index={index} 
          itemData={toDoObject}
          deleteTask={deleteTask}
          markComplete={markComplete}/>):
          <p className="no-item-text">No task added </p>}
      </div>  
      
    </div>
  );
}



export default App;
