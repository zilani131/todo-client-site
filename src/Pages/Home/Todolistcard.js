import React, { useState } from 'react';
import ToolEdit from './ToolEdit';

const Todolistcard = ({datum}) => {
    const {task,_id}=datum;
    const [edit,setEdit]=useState(true)
    const Edit=()=>{
        setEdit(!edit);
    }
    const Update=(e)=>{
        e.preventDefault();
      
        console.log(e.target.task.value)
        const task=e.target.task.value;
        
        const data={task:task,
        id:_id}
        fetch(`http://localhost:5000/taskupdate/:id`, {
    method: 'PUT', // or 'PUT'
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
   
  })
  setEdit(!edit);
    }
    return (
        <div>
          {edit? <div><li>{task}</li> <button class="btn btn-outline" onClick={Edit}>Edit</button></div> :
          <ToolEdit datum={datum} setEdit={setEdit} edit={edit}></ToolEdit>
        //    <form onSubmit={Update}>
        //     <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="task" defaultValue={task}/>  <button type='submit' class="btn btn-outline" >save</button>
        //    </form>
            }
           
        </div>
    );
};

export default Todolistcard;