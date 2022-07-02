import React from 'react';

const AddTask = () => {
    const Task=(e)=>{
        
       if(e.key==="Enter"){
        e.preventDefault();
        console.log(e.target?.task?.value,"validate")
        const task=e.target?.task?.value;
        const data={task}
        
fetch('http://localhost:5000/task', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
   
  })
  console.log(e.target.reset());
       }
       
    }
    return (
        <div>
           <form >
           <input onKeyDown={Task} type="text" placeholder="Type here" name='task' class="input input-bordered w-full max-w-xs" />
           </form>
        </div>
    );
};

export default AddTask;