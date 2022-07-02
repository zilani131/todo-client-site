import React, { useState } from 'react';


const Todolistcard = ({datum,refetch}) => {
    const {task,_id}=datum;
    const [edit,setEdit]=useState(true)
    const [checkbox,setCheckbox]=useState(false)
    const Edit=()=>{
        setEdit(!edit);
    }
    const Update=(e)=>{
        e.preventDefault();
      
        console.log(e.target.task.value)
        const task=e.target.task.value;
        
        const data={task:task,
        id:_id}
        fetch(`http://localhost:5000/taskupdate/${_id}`, {
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
        
        if(check===true){
            const data={task};
            await fetch('http://localhost:5000/completetask', {
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
           await   fetch(`http://localhost:5000/dlt/${_id}`,{
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
    //    fetch(`http://localhost:5000/dlt/${_id}`,{
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
          {edit?<div> {checkbox? "":<div className='flex items-center justify-center gap-3 m-2'><input type="checkbox" onChange={(e)=>handleChecked(e)}  class="checkbox "  /><h1>{task}</h1> <button class="btn btn-outline btn-xs" onClick={Edit}>Edit</button> </div>} </div>:
        
           <form onSubmit={Update}>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="task" defaultValue={task}/>  <button type='submit' class="btn btn-outline" >save</button>
           </form>
            }
           
        </div>
    );
};

export default Todolistcard;