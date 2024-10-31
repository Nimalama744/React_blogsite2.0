import React, { useState } from 'react'


const ToDoList = () => {

   const [Tasks, setTasks] = useState(["Code",
                                      "Workout",
                                      "Project"
   ])
   const [NewTask, setNewTask] = useState("") 

   function handleInputChange (event){
    setNewTask(event.target.value)
   }

   function addTask(){
    if(NewTask.trim() !== ""){
        setTasks(T => [...T, NewTask]);
    setNewTask("")
    }
    
   }
   function removeTask(index){
    setTasks (Tasks.filter((_,i) => i!==index))
   }
   function moveTaskUp(index){
    if (index > 0){
        const updatedTasks = [...Tasks];
        [updatedTasks[index],updatedTasks[index-1]] =
        [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
    
   }
   function moveTaskDown(index){
    if (index < Tasks.length -1){
        const updatedTasks = [...Tasks];
        [updatedTasks[index],updatedTasks[index+1]] =
        [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
   }

  return (
    <div className=''>
        <h1 className='center text-5xl px-5 my-2'>To-Do-List</h1>
        <div className='center justify-centercenter mx-7'>
            <input className='text-black tex text-2xl bg-white rounded-xl px-2'
                   type="text" 
                   placeholder='Enter a task'
                   value = {NewTask}
                   onChange={handleInputChange} />
            <button 
                      className=' text-3xl'
                      onClick={addTask}>
                        ✔️

            </button>       
        </div>
        <ul className='list-disc mx-5'>
            {Tasks.map((task,index) =>
               <li className='m-2 py-3 flex max-w-80 text-black font-bold bg-white border rounded-md justify-around text-2xl' key={index}>
                <span className=''>{task}</span>
                <span>
                <button  onClick={() => removeTask(index)}
                         className= ' px-2 rounded-full'>
                    ❌
                </button>
                <button  onClick={() => moveTaskUp(index)}
                         className='  px-2 rounded-full'>
                    ☝️
                </button>
                <button  onClick={() => moveTaskDown(index)}
                         className='  px-2 rounded-full'>
                    👇
                </button> 
                </span>
                
               </li>
            )}
        </ul>
    </div>
  )
}

export default ToDoList