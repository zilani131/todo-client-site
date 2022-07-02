import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Todolistcard = ({datum,refetch}) => {
  const [user,loading,error]=useAuthState(auth);
 
    const {task,_id}=datum;
    const [edit,setEdit]=useState(true)
    const [checkbox,setCheckbox]=useState(false)
    if(loading){
      return <h1>Loading...</h1>
    }
    const Edit=()=>{
        setEdit(!edit);
    }
    const Update=(e)=>{
        e.preventDefault();
      const email=user?.email;
        console.log(e.target.task.value)
        const task=e.target.task.value;
      
        const data={task:task,
        id:_id,
        email:email,
    }
        fetch(`https://serene-atoll-60052.herokuapp.com/taskupdate/${_id}`, {
    method: 'PUT', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
    refetch()
  })

  setEdit(!edit);
    }
    const handleChecked=async (e)=>{
        console.log(e.target.checked)
        const check=e.target.checked;
        const email=user?.email
        if(check===true){
            const data={task:task,
              email:email};
            await fetch('https://serene-atoll-60052.herokuapp.com/completetask', {
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
           await   fetch(`https://serene-atoll-60052.herokuapp.com/dlt/${_id}`,{
                method:"DELETE",
                headers: {
                    'Content-Type':'application/json',
                  }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            
            })
        }
        setCheckbox(!checkbox)
    }
    // const handleDlt=(e)=>{
    //     e.preventDefault()
    //     console.log("dlt")
    //    fetch(`https://serene-atoll-60052.herokuapp.com/dlt/${_id}`,{
    //             method:"DELETE",
    //             headers: {
    //                 'Content-Type':'application/json',
    //               }
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
            
    //         })
    // }
    return (
        <div>
          {edit?<div> {checkbox? "":<div class="card w-10/12 lg:w-1/3 bg-base-100 shadow-md mx-auto">
  <div class="card-body"> <h2 class="card-title"><div className='flex items-center justify-center gap-3 m-2'><input type="checkbox" onChange={(e)=>handleChecked(e)}  class="checkbox "  /><h1>{task}</h1> <button class="btn btn-outline btn-xs" onClick={Edit}>Edit</button> </div></h2></div></div>} </div>:
        
        <div class="card w-10/12 lg:w-1/3 bg-base-100 shadow-md mx-auto">
  <div class="card-body"> <h2 class="card-title">  <form onSubmit={Update} className="mx-auto flex flex-col gap-3 items-center w-10/12">
<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="task" defaultValue={task}/>  <button type='submit' class="btn btn-outline w-1/2" >Update</button>
</form></h2> </div> </div>
            }
           
        </div>
    );
};
// <div className='flex items-center justify-center gap-3 m-2'><input type="checkbox" onChange={(e)=>handleChecked(e)}  class="checkbox "  /><h1>{task}</h1> <button class="btn btn-outline btn-xs" onClick={Edit}>Edit</button> </div>
export default Todolistcard;
 