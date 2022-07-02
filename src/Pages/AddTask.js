import React from 'react';

const AddTask = () => {
    const Task=(e)=>{
        
       if(e.key==="Enter"){
        e.preventDefault();
        console.log(e.target?.value,"validate")
        const task=e.target?.value;
        if(task===""){
            return alert("please give some input")
        }
        // console.log("after effect");
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
  e.target.value=""
       }
       
    }
    return (
        <div>
          
           <input onKeyDown={Task} type="text" placeholder="Type here" name='task' class="input input-bordered w-full max-w-xs" />
           
        </div>
    );
};

export default AddTask;