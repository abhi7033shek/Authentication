import React, { useRef, useState } from 'react'

export default function Inbox(props) {
  const [newTask,setNewTask] = useState(false)
  const titleRef = useRef()
  const calendarRef = useRef()
  const newtaskHandler=()=>{
    setNewTask(true)
  }
  const addHandler=(e)=>{
    e.preventDefault()
    if(titleRef.current.value === ""){
      window.alert("Task Can Not be empty");
      return;
    }
    const newObj = {
      number: props.list.length+1,
      title: titleRef.current.value,
      date : new Date(calendarRef.current.value)
    }
    props.append(newObj)
    setNewTask(false)
  }
  const cancelHandler=()=>{
    setNewTask(false)
  }
  return (
    <div className='To'>
     <h1 className='Heading'>INBOX</h1><hr></hr><br></br>
     {!newTask && (
      <button className="new" onClick={newtaskHandler}>+Add New</button>
     )}
     {newTask && (
      <form className='newtask-box'>
      <p> Write your task: <input type='text' ref={titleRef} placeholder='Write your task'/></p>
      
      <div className='button'>
          <p>Choose Date: <input type="date" ref={calendarRef} defaultValue="2023-01-04"/></p>
      
          <button className='newB' onClick={addHandler}>Add Task</button>

          <button className='newA' onClick={cancelHandler}>   Cancel</button><br></br><br></br>
          
      </div>
  </form> 
     )}<br></br>
     <h4 className='Heading'>Your Task</h4><br></br><hr className='line'></hr>
     <div>
      {props.list.map((list)=>{
        return (
          <div className="box" key={list.number}>
           <p><ul>
                <li>
                            {list.title}  ({list.date.toLocaleString()})
                        
                </li>
                </ul>
            </p><hr className='line1'></hr>
          </div>
        )
      })}
     </div>
    </div>
  )
}