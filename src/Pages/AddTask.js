import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AddTask = () => {
  const [user,loading,error]=useAuthState(auth);
  if(loading){
    return <h1>Loading...</h1>
  }
    const Task=(e)=>{
        
       if(e.key==="Enter"){
        e.preventDefault();
        console.log(e.target?.value,"validate")
        const task=e.target?.value;
        const email=user?.email;
        if(task===""){
            return alert("please give some input")
        }
        // console.log("after effect");
        const data={task,email}
        
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